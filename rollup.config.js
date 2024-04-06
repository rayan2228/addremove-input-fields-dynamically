import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
const devMode = (process.env.NODE_ENV === 'development');
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

export default [
    {
        input: 'src/index.js',
        output: {
            file: "dist/index.js",
            format: 'es',
            sourcemap: devMode ? 'inline' : false,
        },
        plugins: [
            resolve(),
            commonjs({
                exclude: 'src/**',
            }),
            babel({
                babelHelpers: 'bundled',
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['transform-react-remove-prop-types'],
            }),
            postcss({
                plugins: [autoprefixer],
                extract: true,
                minimize: true,
                sourceMap: true,
                modules: true,
            }),
            terser({
                ecma: 2020,
                mangle: { toplevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: !devMode,
                    drop_debugger: !devMode
                },
                output: { quote_style: 1 }
            })
        ],
        external: ['react', 'react-dom'],
    }
]