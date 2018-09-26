const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const globals = require('rollup-plugin-node-globals')

export default {
	input: 'src/app.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
		sourcemap: true,
    name: 'reduxShowcase'
	},
	plugins: [
    resolve(),
    commonjs(),
    globals(),
	]
};
