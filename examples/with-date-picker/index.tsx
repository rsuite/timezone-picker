import React, { useState } from 'react';
import { DatePicker } from 'rsuite';
import TimeZonePicker from '../../src';

const WithDatePicker = (): JSX.Element => {
  const [timeZone, setTimeZone] = useState<string>();
  return (
    <main>
      <h4>Combine with DatePicker</h4>
      <TimeZonePicker
        onChange={(value) => {
          setTimeZone(value);
        }}
        className="inline-item"
      />
      <DatePicker format="yyyy-MM-dd HH:mm:ss" timeZone={timeZone} />
    </main>
  );
};

export default WithDatePicker;
