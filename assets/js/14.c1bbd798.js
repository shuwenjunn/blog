(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{321:function(t,e,a){"use strict";a.r(e);var r=a(5),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"front-matter-in-vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#front-matter-in-vuepress"}},[t._v("#")]),t._v(" Front Matter in VuePress")]),t._v(" "),e("p",[t._v("Any markdown file that contains a YAML front matter block will be processed by "),e("a",{attrs:{href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("gray-matter"),e("OutboundLink")],1),t._v(". The front matter must be the first thing in the markdown file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token front-matter-block"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Blogging Like a Hacker\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("US")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])]),e("p",[t._v("Between these triple-dashed lines, you can set predefined variables (see "),e("a",{attrs:{href:"#predefined-variables"}},[t._v("below")]),t._v(" for a reference), or even create custom ones of your own. These variables will then be available to you to access using "),e("code",[e("RouterLink",{attrs:{to:"/note/_backup/global-computed.html#frontmatter"}},[t._v("$frontmatter")])],1),t._v(" at the rest of the page, plus all custom and theming components.")]),t._v(" "),e("p",[t._v("::: tip\nFront matter variables are "),e("strong",[t._v("optional")]),t._v(" in VuePress.\n:::")]),t._v(" "),e("h2",{attrs:{id:"alternative-front-matter-formats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alternative-front-matter-formats"}},[t._v("#")]),t._v(" Alternative Front Matter Formats")]),t._v(" "),e("p",[t._v("In addition, VuePress also supports JSON or "),e("a",{attrs:{href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"}},[t._v("TOML"),e("OutboundLink")],1),t._v(" front matter.")]),t._v(" "),e("p",[t._v("JSON front matter needs to start and end in curly braces:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('---\n{\n  "title": "Blogging Like a Hacker",\n  "lang": "en-US"\n}\n---\n')])])]),e("p",[t._v("TOML front matter needs to be explicitly marked as TOML:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('---toml\ntitle = "Blogging Like a Hacker"\nlang = "en-US"\n---\n')])])]),e("h2",{attrs:{id:"predefined-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables"}},[t._v("#")]),t._v(" Predefined Variables")]),t._v(" "),e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" title")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("h1_title || siteConfig.title")])])]),t._v(" "),e("p",[t._v("Title of current page.")]),t._v(" "),e("h3",{attrs:{id:"lang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lang"}},[t._v("#")]),t._v(" lang")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("en-US")])])]),t._v(" "),e("p",[t._v("Language of current page.")]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("siteConfig.description")])])]),t._v(" "),e("p",[t._v("Description of current page.")]),t._v(" "),e("h3",{attrs:{id:"layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" layout")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("Layout")])])]),t._v(" "),e("p",[t._v("Set the layout component of the current page.")]),t._v(" "),e("h3",{attrs:{id:"permalink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permalink"}},[t._v("#")]),t._v(" permalink")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("siteConfig.permalink")])])]),t._v(" "),e("p",[t._v("Refer to: "),e("RouterLink",{attrs:{to:"/note/_backup/permalinks.html"}},[t._v("Permalinks")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"metatitle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metatitle"}},[t._v("#")]),t._v(" metaTitle")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("string")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("`${page.title} | ${siteConfig.title}`")])])]),t._v(" "),e("p",[t._v("Override the default meta title.")]),t._v(" "),e("h3",{attrs:{id:"meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("array")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("Specify extra meta tags to be injected:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" description\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" keywords\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" super duper SEO\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),e("h2",{attrs:{id:"predefined-variables-powered-by-default-theme"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#predefined-variables-powered-by-default-theme"}},[t._v("#")]),t._v(" Predefined Variables Powered By Default Theme")]),t._v(" "),e("h3",{attrs:{id:"navbar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navbar"}},[t._v("#")]),t._v(" navbar")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("boolean")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("See: "),e("RouterLink",{attrs:{to:"/note/theme/default-theme-config.html#disable-the-navbar"}},[t._v("Default Theme Config > Disable the Navbar")]),t._v(".")],1),t._v(" "),e("h3",{attrs:{id:"sidebar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebar"}},[t._v("#")]),t._v(" sidebar")]),t._v(" "),e("ul",[e("li",[t._v("Type: "),e("code",[t._v("boolean|'auto'")])]),t._v(" "),e("li",[t._v("Default: "),e("code",[t._v("undefined")])])]),t._v(" "),e("p",[t._v("See: "),e("RouterLink",{attrs:{to:"/note/theme/default-theme-config.html#sidebar"}},[t._v("Default Theme Config > Sidebar")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);