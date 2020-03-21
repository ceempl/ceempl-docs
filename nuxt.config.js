const config = {
  mode: "universal",
  head: {
    title: "Ceempl Framework",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: {
    color: "#001FFF"
  },
  css: ["ceempl"],
  plugins: [],
  modules: ["@nuxtjs/pwa"],
  build: {
    extend(config, ctx) {}
  }
};

export default config;
