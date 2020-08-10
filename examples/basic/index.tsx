import * as React from 'react';
import TimeZonePicker from '../../src/TimeZonePicker';
import { useState } from 'react';

const Basic = (): JSX.Element => {
  const [value, setValue] = useState<string>('Asia/Shanghai');

  return (
    <main>
      <h4>Basic Usage</h4>
      <TimeZonePicker onChange={setValue} value={value} className="inline-item" />
      <span>
        TimeZonePicker Value: <mark>{value}</mark>
      </span>
    </main>
  );
};

export default Basic;
