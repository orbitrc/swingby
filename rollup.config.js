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
