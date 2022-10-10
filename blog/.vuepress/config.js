module.exports = {
  title: "Seven's Blog",
  description: "This is a blog example built by VuePress",
  theme: "@vuepress/theme-blog",
  plugins: ["demo-container"],
  base: "/blog/",
  // 文档：https://vuepress-theme-blog.billyyyyy3320.com/
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
      },
      {
        id: "writing",
        dirname: "_writings",
        path: "/writings/",
      },
    ],
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "随笔",
        link: "/writings/",
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
