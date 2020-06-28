import React, { useCallback, useMemo, useState } from 'react';
import { Icon, SelectPicker, Toggle } from 'rsuite';
import { SelectPickerProps } from 'rsuite/lib/SelectPicker';
import utcPlugin from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { stylePrefix, transformTimezonePickerData } from './utils';
import { TimezoneListItem, WORLD_MAIN_CITY_TIMEZONE_LIST } from './config';
import { ItemDataType } from 'rsuite/lib/@types/common';
import _ from 'lodash';

dayjs.extend(utcPlugin);

export interface TimezonePickerValue {
  region: string;
  timezone: string;
  utcOffset: number;
}

export interface TimezonePickerDataItem extends TimezoneListItem {
  region: string;
  utcOffset: number;
}

const UNHANDLED_PROPS = [
  'data',
  'valueKey',
  'labelKey',
  'renderMenuItem',
  'renderExtraFooter',
  'renderValue',
  'groupBy',
];

type OmitSelectPickerProps =
  | 'data'
  | 'valueKey'
  | 'labelKey'
  | 'renderMenuItem'
  | 'renderExtraFooter'
  | 'renderValue'
  | 'groupBy';

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
  placeholder?: string | React.ReactNode;
}

const prefix = stylePrefix('timezone-picker');

const renderValue = (content) => (
  <div>
    <Icon icon="globe2" className={prefix('placeholder-icon')} />
    {content}
  </div>
);

export const TimezonePicker = ({
  disableContinentGroup = false,
  placeholder = 'Select Timezone',
  onChange,
  onSelect,
  onClean,
  value: propsValue,
  defaultValue,
  ...props
}: TimezonePickerProps) => {
  props = _.omit(props, UNHANDLED_PROPS);
  const [value, setValue] = useState<TimezonePickerValue>(propsValue || defaultValue);
  const data = useMemo<TimezonePickerDataItem[]>(
    () => transformTimezonePickerData(WORLD_MAIN_CITY_TIMEZONE_LIST),
    []
  );
  const labelKey = 'region';
  const valueKey = 'region';
  // 12小时制，被勾选的时候为12小时制，否则为24小时制
  const [meridian, setMeridian] = useState<boolean>(false);

  const renderExtraFooter = useCallback(() => {
    return (
      <div className={prefix('extra-footer')}>
        <div>TIMEZONE</div>
        <Toggle
          checked={meridian}
          onChange={setMeridian}
          size="md"
          checkedChildren="12h"
          unCheckedChildren="24h"
        />
      </div>
    );
  }, [meridian]);

  const renderMenuItem = useCallback(
    (label: React.ReactNode, item: ItemDataType & TimezonePickerDataItem) => {
      const { utcOffset } = item;
      const template = meridian ? 'hh:mma' : 'HH:mm';
      return (
        <div className={prefix('menu-item')}>
          <div>{label}</div>
          <div>{dayjs().utcOffset(utcOffset).format(template)}</div>
        </div>
      );
    },
    [meridian]
  );

  const findItem = useCallback(
    (region: string) => {
      return data.find((item) => item[valueKey] === region);
    },
    [valueKey]
  );

  const pickValue = useCallback<(target: TimezonePickerDataItem) => TimezonePickerValue>(
    (target) => _.pick(target, ['region', 'timezone', 'utcOffset']),
    []
  );

  const handleChange = useCallback(
    (value: string, event: React.SyntheticEvent<any>) => {
      const target = findItem(value);
      const nextValue: TimezonePickerValue = pickValue(target);

      onChange?.(nextValue, event);
    },
    [data, onChange, valueKey, findItem, pickValue]
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
    [onSelect, findItem, pickValue]
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
      placeholder={renderValue('Select Timezone')}
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
