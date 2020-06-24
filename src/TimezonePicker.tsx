import React, { useCallback, useState } from 'react';
import { SelectPicker, Icon, Toggle } from 'rsuite';
import { SelectPickerProps } from 'rsuite/lib/SelectPicker';
import utcPlugin from 'dayjs/plugin/utc';
import dayjs from 'dayjs';
import { stylePrefix } from './utils';
import { WORLD_MAIN_CITY_TIMEZONE_LIST, TimezoneListItem } from './config';
import { ItemDataType } from 'rsuite/lib/@types/common';

export interface TimezonePickerProps
  extends Omit<SelectPickerProps, 'data' | 'valueKey' | 'labelKey'> {
  groupByDistrict?: boolean;
  onChange?: (timezone: string) => void;
}

dayjs.extend(utcPlugin);
const prefix = stylePrefix('timezone-picker');

const renderValue = (content) => (
  <div>
    <Icon icon="globe2" className={prefix('placeholder-icon')} />
    {content}
  </div>
);

export const TimezonePicker = ({
  groupByDistrict = true,
  placeholder = 'Select Timezone',
  renderValue: renderValueFromProps,
  onChange,
  ...props
}: TimezonePickerProps) => {
  const data = WORLD_MAIN_CITY_TIMEZONE_LIST;
  const labelKey = 'districtCity';
  const valueKey = 'districtCity';
  // 小时制，被勾选的时候为24小时制，否则为12小时制
  const [hourSystemChecked, setHourSystemChecked] = useState<boolean>(false);

  const renderMenuItem = useCallback(
    (label: React.ReactNode, item: ItemDataType & TimezoneListItem) => {
      const { utcOffset } = item;
      const template = hourSystemChecked ? 'HH:mm' : 'hh:mma';
      return (
        <div className={prefix('menu-item')}>
          <div>{label}</div>
          <div>{dayjs().utcOffset(utcOffset).format(template)}</div>
        </div>
      );
    },
    [hourSystemChecked]
  );

  const renderExtraFooter = useCallback(() => {
    return (
      <div className={prefix('extra-footer')}>
        <div>TIMEZONE</div>
        <Toggle
          checked={hourSystemChecked}
          onChange={setHourSystemChecked}
          size="md"
          checkedChildren="24h"
          unCheckedChildren="12h"
        />
      </div>
    );
  }, [hourSystemChecked]);

  const handleChange = useCallback(
    (value: string) => {
      const target = data.find((item) => item[valueKey] === value);
      if (!target || !onChange) {
        return;
      }

      onChange(`UTC${target.tz}`);
    },
    [data, onChange, valueKey]
  );

  return (
    <SelectPicker
      data={data}
      groupBy={groupByDistrict && 'district'}
      labelKey={labelKey}
      valueKey={valueKey}
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
