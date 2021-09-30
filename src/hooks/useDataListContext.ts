import { useContext } from 'react';
import Context from '../context';
import { DataListContextData } from '../types';

const useDataListContext = (): DataListContextData => useContext(Context);

export { useDataListContext as default };
