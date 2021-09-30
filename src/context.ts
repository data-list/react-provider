import { createContext } from 'react';
import type { DataListContextData } from './types';

const Context = createContext<DataListContextData>({});

export { Context as default };
