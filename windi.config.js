import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        dark: '#06283D',
        blue: '#143F6B',
        subBlue: '#205375',
        green: '#256D85',
        white: '#FFF',
        purple: '#7D1E6A',
        peach: '#EEB0B0',
        midnight: '#9CB4CC',
        subWhite: '#cfcfcf',
        red: '#FF1E00',
        subRed: '#C21010'
      },
    },
  },
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})