const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
  siteName: 'ndhu-mwwte',
  // pathPrefix: '/',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer,
        ],
      },
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: ['content/posts/**/*.md'],
        typeName: 'Post',
        route: '/blog/:slug',
        remark: {}
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",

      // these options are optional, as they are copies of the default values...
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}

