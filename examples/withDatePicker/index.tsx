import React, { useState } from 'react';
import { DatePicker } from 'rsuite';
import TimezonePicker from '../../src';

const WithDatePicker = (): JSX.Element => {
  const [timeZone, setTimeZone] = useState<string>();
  return (
    <div>
      <TimezonePicker
        onSelect={(value) => {
          setTimeZone(value);
        }}
      />
      <DatePicker format="YYYY-MM-DD HH:mm:ss" timeZone={timeZone} />
    </div>
  );
};

export default WithDatePicker;
