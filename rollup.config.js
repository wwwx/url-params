import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const config = {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'urlparams',
    },
    plugins: [
        commonjs()
    ]

}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(terser())
}

export default config