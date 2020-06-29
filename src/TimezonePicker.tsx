import React, { useCallback, useMemo, useState } from 'react';
import { Icon, SelectPicker, Toggle } from 'rsuite';
import { stylePrefix } from './utils';
import { ItemDataType } from 'rsuite/lib/@types/common';
import { omit } from 'lodash';
import { SelectPickerProps } from 'rsuite/lib/SelectPicker';
import { formatToTimeZone as format } from 'date-fns-timezone';
import { listTimeZones } from 'timezone-support';

export interface TimezonePickerDataItem {
  timezone: string;
  continent: string;
  name: string;
}

export const transformTimezonePickerData = (data: string[]): TimezonePickerDataItem[] =>
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

export interface TimezonePickerProps extends Omit<SelectPickerProps, OmitSelectPickerProps> {
  value?: string;
  defaultValue?: string;
  disableContinentGroup?: boolean;
  onSelect?: (value: string, item: TimezonePickerDataItem, event: React.SyntheticEvent) => void;
  onChange?: (value: string, event: React.SyntheticEvent<any>) => void;
}

const prefix = stylePrefix('timezone-picker');

const renderValue = (content): React.ReactNode => (
  <div>
    <Icon icon="globe2" className={prefix('placeholder-icon')} />
    {content}
  </div>
);

export const TimezonePicker = ({
  disableContinentGroup = false,
  placeholder,
  onChange,
  onSelect,
  onClean,
  value: propsValue,
  defaultValue,
  ...props
}: TimezonePickerProps): JSX.Element => {
  props = omit(props, UNHANDLED_PROPS);
  const [value, setValue] = useState<string>(propsValue ?? defaultValue);
  const data = useMemo<TimezonePickerDataItem[]>(
    () => transformTimezonePickerData(TIME_ZONE_LIST),
    []
  );
  const labelKey = 'name';
  const valueKey = 'timezone';
  const groupKey = 'continent';
  // 12小时制，被勾选的时候为12小时制，否则为24小时制
  const [meridian, setMeridian] = useState<boolean>(false);

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

  const renderMenuItem = useCallback(
    (label: React.ReactNode, item: ItemDataType & TimezonePickerDataItem): React.ReactNode => {
      const { timezone: timeZone } = item;
      const template = meridian ? 'hh:mma' : 'HH:mm';
      return (
        <div className={prefix('menu-item')}>
          <div>{label}</div>
          <div>{format(new Date(), template, { timeZone })}</div>
        </div>
      );
    },
    [meridian]
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
      item: ItemDataType & TimezonePickerDataItem,
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
      placeholder={placeholder ?? renderValue('Select Timezone')}
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

TimezonePicker.displayName = 'TimezonePicker';
export default TimezonePicker;
