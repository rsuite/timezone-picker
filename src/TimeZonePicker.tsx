import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { Icon, SelectPicker } from 'rsuite';
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
  disableGroup?: boolean;
  onSelect?: (
    value: string,
    item: ItemDataType & TimeZonePickerDataItem,
    event: React.SyntheticEvent
  ) => void;
}

const prefix = stylePrefix('timezone-picker');

export const TimeZonePicker = ({
  icon,
  disableGroup = false,
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

  const getDateString = useCallback(
    (timeZone: string) => format(new Date(), '[GMT]Z', { timeZone }),
    []
  );

  const renderValue = useCallback(
    (content): React.ReactNode => {
      let prefixIcon = null;

      if (typeof icon === 'string') {
        prefixIcon = <Icon icon={icon} className={prefix('placeholder-icon')} />;
      } else if (typeof icon === 'object') {
        prefixIcon = <span className={prefix('placeholder-icon')}>{icon}</span>;
      }

      return (
        <div>
          {prefixIcon}
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
      groupBy={!disableGroup && groupKey}
      placeholder={renderValue(placeholder)}
      renderValue={renderValue}
      renderMenuItem={renderMenuItem}
      onChange={handleChange}
      onSelect={handleSelect}
      onClean={handleClean}
      {...props}
    />
  );
};

export default TimeZonePicker;
