# @rsuite/timezone-picker
   时区选择器

![npm](https://img.shields.io/npm/v/@rsuite/timezone-picker?color=green) ![Node.js CI](https://github.com/rsuite/timezone-picker/workflows/Node.js%20CI/badge.svg)

[English](README_EN.md) | 中文版

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
  return (
    <TimeZonePicker />
  );
}
```

## Props

| 属性名称             | 类型`(默认值)`                                                                      | 描述                                 |
| ------------------- | --------------------------------------------------------------------------------- | ------------------------------------ |
| disableGroup        | boolean`(false)`                                                                  | 禁用分组                        |
| icon                | union: SVGSymbol,string,ReactElement                                              | 自定义 value 或者 placeholder 前面的图标 |

此外 TimeZonePicker 还继承了大多数的 [@rsuite/SelectPickerProps](https://rsuitejs.com/zh/components/select-picker/#%3CSelectPicker%3E)

> 注意: TimezonePicker 并不是支持 SelectPicker 所有的属性，以下属性是不支持的。 
> - `data`
> - `valueKey`
> - `labelKey`
> - `groupBy`

## Note
#### PeerDependency
  - react >= 16.8
  - rsuite >= 5.0