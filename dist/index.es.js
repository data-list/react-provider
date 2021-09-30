import React, { createContext, useContext } from 'react';

var Context = createContext({});

var DataListProvider = function (_a) {
    var children = _a.children;
    var value = {};
    return React.createElement(Context.Provider, { value: value }, children);
};

var useDataListContext = function () { return useContext(Context); };

export { DataListProvider, useDataListContext };
//# sourceMappingURL=index.es.js.map
