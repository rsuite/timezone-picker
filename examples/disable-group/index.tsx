import TimeZonePicker from '../../src/TimeZonePicker';
import React from 'react';

const DisableGroup = (): JSX.Element => {
  return (
    <main>
      <h4>Disable group</h4>
      <TimeZonePicker disableGroup defaultOpen style={{ minWidth: '224px' }} />
    </main>
  );
};

export default DisableGroup;
