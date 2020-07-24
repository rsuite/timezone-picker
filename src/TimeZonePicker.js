"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var rsuite_1 = require("rsuite");
var utils_1 = require("./utils");
var lodash_1 = require("lodash");
var date_fns_timezone_1 = require("date-fns-timezone");
var timezone_support_1 = require("timezone-support");
exports.transformTimeZonePickerData = function (data) {
    return data.map(function (item) {
        var index = item.lastIndexOf('/');
        var continent;
        var name = item;
        if (!!~index) {
            continent = item.slice(0, index);
            name = item.slice(index + 1);
        }
        else {
            continent = 'Abbreviation';
        }
        return {
            timezone: item,
            continent: continent,
            name: name
        };
    });
};
var TIME_ZONE_LIST = timezone_support_1.listTimeZones();
var UNHANDLED_PROPS = ['data', 'valueKey', 'labelKey', 'renderExtraFooter', 'groupBy'];
var prefix = utils_1.stylePrefix('timezone-picker');
var renderValue = function (content) { return (<div>
    <rsuite_1.Icon icon="globe2" className={prefix('placeholder-icon')}/>
    {content}
  </div>); };
exports.TimeZonePicker = function (_a) {
    var _b = _a.disableContinentGroup, disableContinentGroup = _b === void 0 ? false : _b, placeholder = _a.placeholder, onChange = _a.onChange, onSelect = _a.onSelect, onClean = _a.onClean, propsValue = _a.value, defaultValue = _a.defaultValue, props = __rest(_a, ["disableContinentGroup", "placeholder", "onChange", "onSelect", "onClean", "value", "defaultValue"]);
    props = lodash_1.omit(props, UNHANDLED_PROPS);
    var _c = react_1.useState((propsValue !== null && propsValue !== void 0 ? propsValue : defaultValue)), value = _c[0], setValue = _c[1];
    var data = react_1.useMemo(function () { return exports.transformTimeZonePickerData(TIME_ZONE_LIST); }, []);
    var labelKey = 'name';
    var valueKey = 'timezone';
    var groupKey = 'continent';
    // 12小时制，被勾选的时候为12小时制，否则为24小时制
    var _d = react_1.useState(false), meridian = _d[0], setMeridian = _d[1];
    var getDateString = react_1.useCallback(function (timeZone) {
        var template = meridian ? 'hh:ma' : 'HH:mm';
        return date_fns_timezone_1.formatToTimeZone(new Date(), template, { timeZone: timeZone });
    }, [meridian]);
    var renderExtraFooter = react_1.useCallback(function () { return (<div className={prefix('extra-footer')}>
        <rsuite_1.Toggle checked={meridian} onChange={setMeridian} size="md" checkedChildren="12h" unCheckedChildren="24h"/>
      </div>); }, [meridian]);
    var renderMenuItem = react_1.useCallback(function (label, _a) {
        var timeZone = _a.timezone;
        return (<div className={prefix('menu-item')}>
        <div>{label}</div>
        <div>{getDateString(timeZone)}</div>
      </div>);
    }, [getDateString]);
    var handleChange = react_1.useCallback(function (value, event) {
        var _a;
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(value, event);
    }, [onChange]);
    var handleSelect = react_1.useCallback(function (nextValue, item, event) {
        var _a;
        setValue(nextValue);
        (_a = onSelect) === null || _a === void 0 ? void 0 : _a(nextValue, item, event);
    }, [onSelect]);
    var handleClean = react_1.useCallback(function (event) {
        var _a, _b;
        setValue(null);
        (_a = onClean) === null || _a === void 0 ? void 0 : _a(event);
        (_b = onChange) === null || _b === void 0 ? void 0 : _b(null, event);
    }, [onClean, onChange]);
    return (<rsuite_1.SelectPicker value={value} data={data} labelKey={labelKey} valueKey={valueKey} groupBy={!disableContinentGroup && groupKey} placeholder={(placeholder !== null && placeholder !== void 0 ? placeholder : renderValue('Select Timezone'))} renderValue={renderValue} renderExtraFooter={renderExtraFooter} renderMenuItem={renderMenuItem} onChange={handleChange} onSelect={handleSelect} onClean={handleClean} {...props}/>);
};
exports.TimeZonePicker.displayName = 'TimezonePicker';
exports["default"] = exports.TimeZonePicker;
