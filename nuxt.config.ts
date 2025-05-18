import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-02-19',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: ['@nuxt/fonts', '@nuxtjs/seo'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  css: ['@/style.css'],

  vite: { plugins: [tailwindcss()] },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  modules: ['@nuxtjs/seo'],

  schemaOrg: {
    identity: {
      type: 'Organization',
      logo: '/icon.svg',
      sameAs: [
        'https://github.com/mfm-347',
        'https://dev.to/mfm-347',
        'https://codepen.io/mfm-347/',
        'https://twitter.com/@mfm347',
      ],
    },
  },

  sitemap: {},

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  features: {
    inlineStyles: true,
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  experimental: {
    viewTransition: true,
    renderJsonPayloads: true,
  },

  routeRules: {
    '/**/*.{css,svg,png,woff2}': {
      headers: {
        'Cache-Control': 'public, max-age=432000, stale-while-revalidate=604800',
      },
    },
  },
})
