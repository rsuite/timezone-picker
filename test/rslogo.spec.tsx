import React from 'react';
import { mount } from 'enzyme';

import { TimezonePicker } from '../src';

describe('RsLogo component test', () => {
  test('should always true', () => {
    expect(true).toBe(true);
  });

  test('should render text correctly', () => {
    const h = 111,
      w = 12;
    const wrapper = mount(<TimezonePicker width={w} height={h} />);
    const t = wrapper.find('img');
    expect(t.first().getDOMNode().getAttribute('alt')).toBe('Share');
    expect(t.first().getDOMNode().getAttribute('alt')).not.toBe('Sharessss');
    expect(t.first().getDOMNode().getAttribute('width')).toBe(String(w));
    expect(t.first().getDOMNode().getAttribute('height')).toBe(String(h));
  });
});
