## @rsuite/timezone-picker
   时区选择器

#### Installation
```
yarn add @rsuite/timezone-picker
// or use npm
npm i @rsuite/timezone-picker
```

#### PeerDependency
  - react >= 16.8
  - rsuite >= 4.0

#### Usage
```typescript
import TimezonePicker from '@rsuite/timezone-picker';
import '@rsuite/timezone-picker/lib/styles/index.less';

export default () => {
  return (
    <TimezonePicker />
  );
}
```

#### Props

```tsx
interface TimezonePickerValue {
  region: string; // 区域：通常是大洲与城市或地区的组合，如：America/Indiana
  timezone: string; // 时区，省略「UTC」前缀，如：+11、-11:30
  utcOffset: number; // 时区与子午线时间偏移分钟数，如：-660 表示 UTC-11、120 表示 UTC+2
}
```

| 属性名称             | 类型`(默认值)`                                                                      | 描述                                 |
| -------------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| value                | TimezonePickerValue                                                                 | 受控值                               |    
| defaultValue         | TimezonePickerValue                                                                 | 默认值                               |
| disableContinentGroup | boolean`(false)`                                                                   | 禁用按大洲分组                        |
| onSelect             | (value: TimezonePickerValue, item: [DataItemType](#types), event: React.SyntheticEvent) => void | 选项被点击选择后的回调函数  |
| onChange             | (value: TimezonePickerValue, event: React.SyntheticEvent) => void                   | `value`发生变化的时候触发的回调函数     |
|           |                                                         |                              |

此外 TimezonePicker 还继承了大多数的 @rsuite/SelectPicker Props

| 属性名称             | 类型`(默认值)`                                                                      | 描述                                 |
| -------------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| appearance           | enum: 'default', 'subtle' `('default')`                                             | 设置外观                             |
| block                | boolean                                                                             | 堵塞整行                             |
| classPrefix          | string `('picker')`                                                                 | 组件 CSS 类的前缀                    |
| cleanable            | boolean `(true)`                                                                    | 可以清除                             |
| container            | HTMLElement or (() => HTMLElement)                                                  | 设置渲染的容器                       |
| disabled             | boolean                                                                             | 禁用组件                             |
| disabledItemValues   | string[]                                                                            | 禁用选项                             |
| listProps            | [listprops]                                                                         | `react-virtualized` 中 List 的相关属性 |
| maxHeight            | number `(320)`                                                                      | 设置 Dropdown 的最大高度             |
| menuClassName        | string                                                                              | 应用于菜单 DOM 节点的 css class      |
| menuStyle            | React.CSSProperties                                                                 | 应用于菜单 DOM 节点的 style          |
| onClean              | (event:SyntheticEvent)=>void                                                        | 值清理时触发回调                     |
| onClose              | ()=>void                                                                            | 关闭回调函数                         |
| onGroupTitleClick    | (event)=>void                                                                       | 点击分组标题的回调函数               |
| onOpen               | ()=>void                                                                            | 打开回调函数                         |
| onSearch             | (searchKeyword:string, event)=>void                                                 | 搜索的回调函数                       |
| onSelect             | (value:string, item: [DataItemType](#types) , event)=>void                          | 选项被点击选择后的回调函数           |
| placeholder          | React.Node `('Select')`                                                             | 占位符                               |
| placement            | enum: [Placement](#types)`('bottomStart')`                                          | 位置                                 |
| preventOverflow      | boolean                                                                             | 防止浮动元素溢出                     |
| renderExtraFooter    | ()=>React.Node                                                                      | 自定义页脚内容                       |
| renderMenu           | (menu:React.Node)=>React.Node                                                       | 自定义渲染菜单列表                   |
| renderMenuGroup      | (groupTitle:React.Node, item:[DataItemType](#types))=>React.Node                    | 自定义渲染选项组                     |
| renderMenuItem       | (label:React.Node, item:[DataItemType](#types))=>React.Node                         | 自定义渲染选项                       |
| renderValue          | (value:string, item: [DataItemType](#types),selectedElement:React.Node)=>React.Node | 自定义渲染被选中的选项               |
| searchBy             | (keyword: string, label: React.ReactNode, item: ItemDataType) => boolean            | 自定义搜索规则                       |
| searchable           | boolean `(true)`                                                                    | 可以搜索                             |
| size                 | enum: 'lg', 'md', 'sm', 'xs' `('md')`                                               | 设置组件尺寸                         |
| sort                 | (isGroup: boolean) => (a: any, b: any) => number                                    | 对选项排序                           |
| toggleComponentClass | React.ElementType `('a')`                                                           | 为组件自定义元素类型                 |
| value                | string                                                                              | 设置值 `受控`,                       |
| valueKey             | string `('value')`                                                                  | 设置选项值在 `data` 中的 `key`       |
| virtualized          | boolean `(true)`                                                                    | 是否开启虚拟列表                     |

[listprops]: https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md#prop-types

#### Note
