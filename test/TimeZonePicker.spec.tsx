import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import * as React from 'react';
import TimeZonePicker from '../src';
import { pick } from 'lodash';
import { Icon } from 'rsuite';

describe('TimeZonePicker', () => {
  afterEach(() => {
    cleanup();
  });

  it('should be true always', function () {
    expect(true).toBeTruthy();
  });

  it('should select first item', function () {
    const { container, baseElement } = render(<TimeZonePicker defaultOpen virtualized={false} />);

    const firstItem = baseElement.querySelector('.timezone-picker-menu-item');
    expect(firstItem).not.toBeNull();
    expect(firstItem.firstChild).toMatchInlineSnapshot(`
      <div>
        Abidjan
      </div>
    `);
    fireEvent.click(firstItem.firstChild);
    expect(container.querySelector('.rs-picker-toggle-value').firstChild as HTMLElement)
      .toMatchInlineSnapshot(`
      <div>
        Africa/Abidjan
      </div>
    `);
  });

  it('should onChange Callback Call', function (done) {
    const handleChange = (value: string) => {
      expect(value).toEqual('Asia/Tokyo');
      done();
    };
    const { container, baseElement, queryByText } = render(
      <TimeZonePicker defaultOpen virtualized={false} onChange={handleChange} />
    );
    fireEvent.click(queryByText('Tokyo'));
  });

  it('should onSelect Callback Call', function (done) {
    const handleSelect = (value: string, item) => {
      expect(pick(item, ['timezone', 'continent', 'name'])).toEqual({
        timezone: 'Asia/Tokyo',
        continent: 'Asia',
        name: 'Tokyo',
      });
      expect(value).toEqual('Asia/Tokyo');
      done();
    };
    const { container, baseElement, queryByText } = render(
      <TimeZonePicker defaultOpen virtualized={false} onSelect={handleSelect} />
    );
    fireEvent.click(queryByText('Tokyo'));
  });

  it('should disabled group', function () {
    const { container, baseElement, queryAllByRole } = render(
      <TimeZonePicker defaultOpen virtualized={false} disableGroup />
    );
    const listItems = queryAllByRole('listitem');
    expect(listItems.length).toBeGreaterThanOrEqual(1);
    expect(listItems[0].getAttribute('class')).not.toEqual('rs-picker-select-menu-group');
  });

  it('should custom icon string', function () {
    const { container } = render(<TimeZonePicker defaultOpen virtualized={false} icon="apple" />);
    const { container: iconContainer } = render(
      <TimeZonePicker defaultOpen virtualized={false} icon={<Icon icon="apple" />} />
    );
    expect(
      container.querySelector('.rs-icon').getAttribute('class').includes('apple')
    ).toBeTruthy();
    expect(
      iconContainer.querySelector('.rs-icon').getAttribute('class').includes('apple')
    ).toBeTruthy();
  });
});
