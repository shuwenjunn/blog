module.exports = {
  title: "VuePress Blog Example",
  description: "This is a blog example built by VuePress",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  plugins: ['demo-container'],
  base:"/blog/",
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return [...blogPluginOptions];
    },
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
      },
      {
        id: "writing", // Unique id for current classifier
        dirname: "_writings", // Matched directory name
        path: "/writings/", // Entry page for current classifier
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Blog",
        link: "/",
      },
      {
        text: "随笔",
        link: "/writings/",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ulivz",
        },
        {
          type: "twitter",
          link: "https://twitter.com/_ulivz",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "",
        },
      ],
    },
  },
};
