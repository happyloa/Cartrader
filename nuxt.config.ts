export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vueuse/nuxt'],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
};
