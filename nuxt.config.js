require("dotenv").config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "client",
    htmlAttrs: {
      lang: "en"
    },
    script: [
      {
        src: "/jquery-3.5.1.slim.min.js"
      },
      {
        src: "/popper.min.js"
      },
      {
        src: "/bootstrap.min.js"
      }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/bootstrap-vue",
    "nuxt-socket-io",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { baseURL: "http://localhost:3002/api" },
  auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/"
    },
    strategies: {
      local: {
        token: {
          property: "access_token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          global: true,
          required: true
        },
        endpoints: {
          login: { url: "login", method: "post" },
          user: { url: "user", method: "get" },
          logout: false
        }
      }
    }
  },
  io: {
    sockets: [
      // Required
      {
        // At least one entry is required
        name: "home",
        url: "http://localhost:3002",
        default: true,
        vuex: {
          /* see section below */
        },
        namespaces: {
          /* see section below */
        }
      }
    ]
  },
  router: {
    middleware: ["auth"]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
