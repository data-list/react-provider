'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Context = React.createContext({});

var DataListProvider = function (_a) {
    var children = _a.children;
    var value = {};
    return React__default["default"].createElement(Context.Provider, { value: value }, children);
};

var useDataListContext = function () { return React.useContext(Context); };

exports.DataListProvider = DataListProvider;
exports.useDataListContext = useDataListContext;
//# sourceMappingURL=index.js.map
