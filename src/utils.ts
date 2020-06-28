export const stylePrefix = (prefix: string, delimiter = '-') => (
  styles: string | string[]
): string => {
  typeof styles === 'string' && (styles = [styles]);
  return styles.map((style) => `${prefix}${delimiter}${style}`).join(' ');
};

/**
 * 将utc字符串转化为对应分钟的偏移量
 * @param utc
 * @example
 * utcOffset('+8') // 480
 * utcOffset('-10')  // -600
 * utcOffset('-9:30) // -570
 * utcOffset('+10:45') // 645
 */
export const utcOffset = (utc: string): number => {
  let [hourStr, min] = utc.split(':');
  const hour = +hourStr * 60;

  return min !== undefined ? hour + +min : hour;
};
