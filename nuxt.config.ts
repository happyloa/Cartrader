export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: ['@nuxtjs/tailwindcss'],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
};
