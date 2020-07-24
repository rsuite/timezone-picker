import React, { useState } from 'react';
import { DatePicker } from 'rsuite';
import TimeZonePicker from '../../src';

const WithDatePicker = (): JSX.Element => {
  const [timeZone, setTimeZone] = useState<string>();
  return (
    <div>
      <TimeZonePicker
        onChange={(value) => {
          setTimeZone(value);
        }}
      />
      <DatePicker format="yyyy-MM-dd HH:mm:ss" timeZone={timeZone} />
    </div>
  );
};

export default WithDatePicker;
