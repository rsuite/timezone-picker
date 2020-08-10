import React from 'react';
import WithDatePicker from './with-date-picker';
import Basic from './basic';
import Icon from './icon';
import DisableGroup from './disable-group';

const App = (): JSX.Element => {
  return (
    <div className="app-container">
      <h1>Examples</h1>
      <Basic />
      <WithDatePicker />
      <Icon />
      <DisableGroup />
    </div>
  );
};

export default App;
