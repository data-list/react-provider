import React, { ReactElement } from 'react';
import Context from './context';
import type { DataListContextData, DataListProviderProps } from './types';

const DataListProvider: React.FC<DataListProviderProps> = ({
	children
}): ReactElement => {
	const value: DataListContextData = {};
	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { DataListProvider as default };
