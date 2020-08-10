import TimeZonePicker from '../../src/TimeZonePicker';
import React from 'react';

const Icon = () => {
  return (
    <main>
      <h4>Prefix icon</h4>
      <TimeZonePicker icon="apple" className="inline-item" />
      <TimeZonePicker icon="apple" value="Asia/Shanghai" />
    </main>
  );
};

export default Icon;
