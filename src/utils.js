"use strict";
exports.__esModule = true;
exports.stylePrefix = function (prefix, delimiter) {
    if (delimiter === void 0) { delimiter = '-'; }
    return function (styles) {
        typeof styles === 'string' && (styles = [styles]);
        return styles.map(function (style) { return "" + prefix + delimiter + style; }).join(' ');
    };
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
exports.utcOffset = function (utc) {
    var _a = utc.split(':'), hourStr = _a[0], min = _a[1];
    var hour = +hourStr * 60;
    return min !== undefined ? hour + +min : hour;
};
