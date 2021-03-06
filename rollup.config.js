import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			// file: pkg.main,
			dir: './dist/',
			format: 'cjs',
			exports: 'named',
			sourcemap: true
		},
		{
			dir: './dist',
			format: 'es',
			exports: 'named',
			sourcemap: true,
			entryFileNames: '[name].es.js'
		}
	],
	preserveModules: true,
	plugins: [
		external(),
		resolve(),
		typescript({
			rollupCommonJSResolveHack: true,
			clean: true,
			exclude: ['src/**/*.stories.tsx', 'src/**/*.test.(tsx|ts)']
		}),
		commonjs({
			namedExports: {
				react: ['createContext', 'useContext']
			}
		})
	]
};
