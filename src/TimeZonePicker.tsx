import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { Icon, SelectPicker, Toggle } from 'rsuite';
import { stylePrefix } from './utils';
import { ItemDataType, SVGIcon } from 'rsuite/lib/@types/common';
import { omit } from 'lodash';
import { SelectPickerProps } from 'rsuite/lib/SelectPicker';
import { formatToTimeZone as format } from 'date-fns-timezone';
import { listTimeZones } from 'timezone-support';
import { IconNames } from 'rsuite/lib/Icon/Icon';

export interface TimeZonePickerDataItem {
  timezone: string;
  continent: string;
  name: string;
}

export const transformTimeZonePickerData = (data: string[]): TimeZonePickerDataItem[] =>
  data.map((item) => {
    const index = item.lastIndexOf('/');
    let continent;
    let name = item;

    if (!!~index) {
      continent = item.slice(0, index);
      name = item.slice(index + 1);
    } else {
      continent = 'Abbreviation';
    }

    return {
      timezone: item,
      continent,
      name,
    };
  });

const TIME_ZONE_LIST = listTimeZones();

const UNHANDLED_PROPS = ['data', 'valueKey', 'labelKey', 'renderExtraFooter', 'groupBy'];

type OmitSelectPickerProps = 'data' | 'valueKey' | 'labelKey' | 'renderExtraFooter' | 'groupBy';

export interface TimeZonePickerProps
  extends Omit<Pick<SelectPickerProps, keyof SelectPickerProps>, OmitSelectPickerProps> {
  icon?: ReactElement | IconNames | SVGIcon;
  disableContinentGroup?: boolean;
  onSelect?: (
    value: string,
    item: ItemDataType & TimeZonePickerDataItem,
    event: React.SyntheticEvent
  ) => void;
}

const prefix = stylePrefix('timezone-picker');

export const TimeZonePicker = ({
  icon,
  disableContinentGroup = false,
  placeholder = 'Select Time Zone',
  onChange,
  onSelect,
  onClean,
  value: propsValue,
  defaultValue,
  ...props
}: TimeZonePickerProps): React.ReactElement<TimeZonePickerProps> => {
  props = omit(props, UNHANDLED_PROPS);
  const [value, setValue] = useState<string>(propsValue ?? defaultValue);
  const data = useMemo<TimeZonePickerDataItem[]>(
    () => transformTimeZonePickerData(TIME_ZONE_LIST),
    []
  );
  const labelKey = 'name';
  const valueKey = 'timezone';
  const groupKey = 'continent';
  // 12小时制，被勾选的时候为12小时制，否则为24小时制
  const [meridian, setMeridian] = useState<boolean>(false);

  const getDateString = useCallback(
    (timeZone: string) => {
      const template = meridian ? 'hh:ma' : 'HH:mm';
      return format(new Date(), template, { timeZone });
    },
    [meridian]
  );

  const renderExtraFooter = useCallback(
    (): React.ReactNode => (
      <div className={prefix('extra-footer')}>
        <Toggle
          checked={meridian}
          onChange={setMeridian}
          size="md"
          checkedChildren="12h"
          unCheckedChildren="24h"
        />
      </div>
    ),
    [meridian]
  );

  const renderValue = useCallback(
    (content): React.ReactNode => {
      return (
        <div>
          {typeof icon === 'string' || typeof icon === 'undefined' ? (
            <Icon icon={icon ?? 'globe2'} className={prefix('placeholder-icon')} />
          ) : (
            <span className={prefix('placeholder-icon')}>{icon}</span>
          )}
          {content}
        </div>
      );
    },
    [icon]
  );

  const renderMenuItem = useCallback(
    (
      label: React.ReactNode,
      { timezone: timeZone }: ItemDataType & TimeZonePickerDataItem
    ): React.ReactNode => (
      <div className={prefix('menu-item')}>
        <div>{label}</div>
        <div>{getDateString(timeZone)}</div>
      </div>
    ),
    [getDateString]
  );

  const handleChange = useCallback(
    (value: string, event: React.SyntheticEvent<any>) => {
      onChange?.(value, event);
    },
    [onChange]
  );

  const handleSelect = useCallback(
    (
      nextValue: string,
      item: ItemDataType & TimeZonePickerDataItem,
      event: React.SyntheticEvent<any>
    ) => {
      setValue(nextValue);
      onSelect?.(nextValue, item, event);
    },
    [onSelect]
  );

  const handleClean = useCallback(
    (event: React.SyntheticEvent<any>) => {
      setValue(null);
      onClean?.(event);
      onChange?.(null, event);
    },
    [onClean, onChange]
  );

  return (
    <SelectPicker
      value={value}
      data={data}
      labelKey={labelKey}
      valueKey={valueKey}
      groupBy={!disableContinentGroup && groupKey}
      placeholder={renderValue(placeholder)}
      renderValue={renderValue}
      renderExtraFooter={renderExtraFooter}
      renderMenuItem={renderMenuItem}
      onChange={handleChange}
      onSelect={handleSelect}
      onClean={handleClean}
      {...props}
    />
  );
};

export default TimeZonePicker;
