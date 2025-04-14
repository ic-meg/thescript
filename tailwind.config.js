export const content = [
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      courier: ['Courier New Custom', 'monospace'],
      mono: ['Monospace Custom', 'monospace']
    }
  }
};

export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
];
