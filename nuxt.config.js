export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "小",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/element-ui/element-ui.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/proxy", "@nuxtjs/axios"],
  axios: {
    proxy: true,
    prefix: "/api",
  },
  proxy: {
    "/api": {
      target: "http://beta.ptcgvip.com", //要代理的后端地址
      pathRewrite: {
        "^/api": "",
      },
      // changeOrigin: true
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["element-ui"],
  },
};
