export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: ['@nuxtjs/tailwindcss'],
  head: {
    title: 'Car Trader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
};
