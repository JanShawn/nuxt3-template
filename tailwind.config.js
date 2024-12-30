/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './{App,app}.{js,ts,vue}',
    './{Error,error}.{js,ts,vue}',
    './app.config.{js,ts}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['28px', '28px'],
    },
    screens: {
      md: '768px', // 平板尺寸
      lg: '992px', // 桌上型電腦尺寸
      xl: '1200px', // 大型螢幕尺寸
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
      },
    },
    extend: {},
  },
  plugins: [],
}
