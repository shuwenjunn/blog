module.exports = {
  title: "Seven's Blog",
  // title: "",
  description: "This is a blog example built by VuePress",
  theme: "@vuepress/theme-blog",
  plugins: ["demo-container"],
  base: "/blog/",
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    directories: [
      {
        id: "home",
        dirname: "note/home",
        path: "/",
      },
    ],
    nav: [
      {
        text: "首页",
        link: "/",
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/shuwenjunn",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "Copyright 2020. All Rights Reserved.",
          link: "",
        },
      ],
    },
  },
};
