/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Hanken Grotesk']
      },
      colors: {
        white: 'var(--White)',
        lightRed: 'var(--Light-red)',
        orangeyYellow: 'var(--Orangey-yellow)',
        greenTeal: 'var(--Green-teal)',
        cobaltBlue: 'var(--Cobalt-blue)',
        lightSlateBlue: 'var(--Light-slate-blue-background)',
        lightRoyalBlue: 'var(--Light-royal-blue-background)',
        violetBlueCircle: 'var(--Violet-blue-circle)',
        persianBlueCircle: 'var(--Persian-blue-circle)',
        paleBlue: 'var(--Pale-blue)',
        lightLavender: 'var(--Light-lavender)',
        darkGrayBlue: 'var(--Dark-gray-blue)',
      },
    },
  },
  plugins: [],
}
