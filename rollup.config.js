import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

import React from 'react'
import ReactDOM from 'react-dom'

export default [
  {
    input: './dist/dts/index.d.ts',
    output: [
      { file: 'dist/index.d.ts', format: 'es' },
    ],
    external: [/\.scss$/],
    plugins: [
      dts(),
    ],
  },
  // Router
  {
    input: './dist/dts/src/router/index.d.ts',
    output: [
      { file: 'dist/router.d.ts', format: 'es' },
    ],
    plugins: [
      dts(),
    ],
  },
  {
    input: './src/router/index.ts',
    output: [
      { file: 'dist/router.cjs.js', format: 'cjs' },
      { file: 'dist/router.esm.js', format: 'esm' },
    ],
    plugins: [
      typescript(),
    ],
  },
  // Main
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      external(),
      commonjs({
        include: /node_modules/,
        namedExports: {
          'react': Object.keys(React),
          'react-dom': Object.keys(ReactDOM),
        },
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
      }),
      del({ targets: ['dist/dts'] }),
      postcss(),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
]
