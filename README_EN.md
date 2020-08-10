# @rsuite/timezone-picker
time zone picker for rsuite

English | [中文版](README.md)

## Installation

```
yarn add @rsuite/timezone-picker
// or use npm
npm i @rsuite/timezone-picker
```

## Usage

```typescript
import TimezonePicker from '@rsuite/timezone-picker';
import '@rsuite/timezone-picker/lib/styles/index.less';

export default () => {
  return <TimeZonePicker />;
};
```

## Props

| Property              | Type`(Default)`                                  | Description                                             |
| --------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| disableGroup          | boolean`(false)`                                 | Disable grouping                                        |
| icon                  | union: SVGSymbol,string,ReactElement             | Customize the icon in front of the value or placeholder |

In addition, TimeZonePicker also inherits most of the [@rsuite/SelectPickerProps](https://rsuitejs.com/components/select-picker/#%3CSelectPicker%3E)

> Note: TimezonePicker does not support all properties of `SelectPicker`, the following properties are not supported.
>
> - `data`
> - `valueKey`
> - `labelKey`
> - `groupBy`

## Note

#### PeerDependency
- react >= 16.8
- rsuite >= 5.0
