import React, { useCallback, useMemo, useState } from 'react';
import { Icon, SelectPicker, Toggle } from 'rsuite';
import { stylePrefix, utcOffset } from './utils';
import { WORLD_MAIN_CITY_TIMEZONE_LIST } from './config';
import { ItemDataType } from 'rsuite/lib/@types/common';
import { omit, pick } from 'lodash';
import { SelectPickerProps } from 'rsuite/lib/SelectPicker';
import { format, zonedTimeToUtc } from 'date-fns-tz';

export interface TimezoneListItem {
  location: string;
  continent: string;
  timezone: string;
}

export interface TimezonePickerDataItem extends TimezoneListItem {
  region: string;
  utcOffset: number;
}

export interface TimezonePickerValue {
  region: string;
  timezone: string;
  utcOffset: number;
}

export const transformTimezonePickerData = (data: TimezoneListItem[]): TimezonePickerDataItem[] =>
  data.map((item) => ({
    region: `${item.continent}/${item.location}`,
    utcOffset: utcOffset(item.timezone),
    ...item,
  }));

const UNHANDLED_PROPS = ['data', 'valueKey', 'labelKey', 'renderExtraFooter', 'groupBy'];

type OmitSelectPickerProps = 'data' | 'valueKey' | 'labelKey' | 'renderExtraFooter' | 'groupBy';

export interface TimezonePickerProps extends Omit<SelectPickerProps, OmitSelectPickerProps> {
  value?: TimezonePickerValue;
  defaultValue?: TimezonePickerValue;
  disableContinentGroup?: boolean;
  onSelect?: (
    value: TimezonePickerValue,
    item: TimezonePickerDataItem,
    event: React.SyntheticEvent
  ) => void;
  onChange?: (value: TimezonePickerValue, event: React.SyntheticEvent<any>) => void;
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
  const [value, setValue] = useState<TimezonePickerValue>(propsValue || defaultValue);
  const data = useMemo<TimezonePickerDataItem[]>(
    () => transformTimezonePickerData(WORLD_MAIN_CITY_TIMEZONE_LIST),
    []
  );
  const labelKey = 'region';
  const valueKey = 'region';
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
      const { utcOffset, region } = item;
      const template = meridian ? 'hh:mma' : 'HH:mm';
      return (
        <div className={prefix('menu-item')}>
          <div>{label}</div>
          <div>{format(zonedTimeToUtc(new Date(), region), template)}</div>
        </div>
      );
    },
    [meridian]
  );

  const findItem = useCallback(
    (region: string) => {
      return data.find((item): boolean => item[valueKey] === region);
    },
    [valueKey, data]
  );

  const pickValue = useCallback<(target: TimezonePickerDataItem) => TimezonePickerValue>(
    (target) => pick(target, ['region', 'timezone', 'utcOffset']),
    []
  );

  const handleChange = useCallback(
    (value: string, event: React.SyntheticEvent<any>) => {
      const target = findItem(value);
      const nextValue: TimezonePickerValue = pickValue(target);

      onChange?.(nextValue, event);
    },
    [onChange, findItem, pickValue]
  );

  const handleSelect = useCallback(
    (
      _value: string,
      item: ItemDataType & TimezonePickerDataItem,
      event: React.SyntheticEvent<any>
    ) => {
      const nextValue = pickValue(item);
      setValue(nextValue);
      onSelect?.(nextValue, item, event);
    },
    [onSelect, pickValue]
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
      value={value?.region}
      data={data}
      labelKey={labelKey}
      valueKey={valueKey}
      groupBy={!disableContinentGroup && 'continent'}
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
