module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/bam-revamp-website/dist/lib/**/*.{js,ts,jsx,tsx}', // <- เพิ่ม path lib
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // BAM Brand Colors extracted from wireframe
        'bam-navy': '#01243c',
        'bam-blue': '#004d83',
        'bam-sky': '#34719c',
        'bam-light': '#ccdbe6',
        'bam-gray': '#666666',
        'bam-gray-light1': '#7f7f7f',
        'bam-gray-light2': '#efefef',
        'bam-gray-light3': '#f8f8f8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
