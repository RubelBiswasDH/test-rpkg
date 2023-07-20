import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import clear from 'rollup-plugin-clear'

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/iife/calculator.js',
            format: 'iife',
            name: 'calculator'
        },
        plugins: [
            clear({ targets: [ 'dist/iife' ] }),
			typescript({ module: 'esnext' }),
			terser()
		]
    }
]