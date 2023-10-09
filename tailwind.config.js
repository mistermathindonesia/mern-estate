/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // mendeteksi semua classes yg ditambahkan, any tailwind css class. you add is going to be detected and then css that equivalent to that has been created
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
