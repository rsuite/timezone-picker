import React, { useCallback, useMemo, useState } from 'react';
import { SelectPicker, Icon, Toggle } from 'rsuite';
import { SelectPickerProps } from 'rsuite/lib/SelectPicker';
import utcPlugin from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { stylePrefix, transformTimezonePickerData } from './utils';
import { WORLD_MAIN_CITY_TIMEZONE_LIST, TimezoneListItem } from './config';
import { ItemDataType } from 'rsuite/lib/@types/common';

dayjs.extend(utcPlugin);

export interface TimezonePickerValue {
  region: string;
  timezone: string;
  utcOffset: number;
}

type OmitSelectPickerProps =
  | 'data'
  | 'valueKey'
  | 'labelKey'
  | 'renderMenuItem'
  | 'renderExtraFooter';

export interface TimezonePickerProps extends Omit<SelectPickerProps, OmitSelectPickerProps> {
  disableContinentGroup?: boolean;
  onChange?: (timezone: string) => void;
}

export interface TimezonePickerDataItem extends TimezoneListItem {
  region: string;
  utcOffset: number;
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
  renderValue: renderValueFromProps,
  onChange,
  data: propsData,
  valueKey: propsValueKey,
  labelKey: propsLabelKey,
  renderMenuItem: propsRenderMenuItem,
  renderExtraFooter: propsRenderExtraFooter,
  ...props
}: TimezonePickerProps) => {
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

  const handleChange = useCallback(
    (value: string) => {
      const target = data.find((item) => item[valueKey] === value);
      if (!target || !onChange) {
        return;
      }

      onChange(target.timezone);
    },
    [data, onChange, valueKey]
  );

  return (
    <SelectPicker
      data={data}
      labelKey={labelKey}
      valueKey={valueKey}
      groupBy={!disableContinentGroup && 'continent'}
      placeholder={renderValue('Select Timezone')}
      renderValue={renderValue}
      renderExtraFooter={renderExtraFooter}
      renderMenuItem={renderMenuItem}
      onChange={handleChange}
      {...props}
    />
  );
};

TimezonePicker.displayName = 'TimezonePicker';
export default TimezonePicker;
