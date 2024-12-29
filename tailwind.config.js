/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
  safelist: [
    "w-4",
    "h-4",
    "w-6",
    "h-6",
    "w-7",
    "h-7",
    "w-8",
    "h-8",
    "w-10",
    "h-10",
    "w-12",
    "h-12",
  ]
}

