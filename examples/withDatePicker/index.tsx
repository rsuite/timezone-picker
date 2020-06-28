import React from 'react';
import { DatePicker } from 'rsuite';
import TimezonePicker from '../../src';

const WithDatePicker = (): JSX.Element => {
  return (
    <div>
      <TimezonePicker />
      <DatePicker format="HH:mmA" />
    </div>
  );
};

export default WithDatePicker;
