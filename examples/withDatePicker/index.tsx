import React, { useState } from 'react';
import { DatePicker } from 'rsuite';
import TimezonePicker from '../../src';

export default () => {
  // @ts-ignore
  const [currentDate, setCurrentDate] = useState<Date>();
  return (
    <div>
      <TimezonePicker />
      <DatePicker format="HH:mmA" value={currentDate} />
    </div>
  );
};
