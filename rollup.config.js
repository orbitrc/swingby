import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    external(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    del({ targets: ['dist/*'] }),
    postcss(),
    typescript(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
}
