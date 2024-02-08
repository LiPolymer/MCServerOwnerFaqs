import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/MCServerOwnerFaqs/',
  title: "腐竹常见问题一览",
  description: "在这里搜索你在搭建服务器中遇到的常见问题",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '目录', link: '/guide/' }
    ],

    sidebar: [
      {
        text: '快捷跳转',
        items: [
          { text: '从零开始', link: '/guide/#从零开始' },
          {
            text: 'Java相关问题', items: [
              { text: '要去哪里找Java安装包', link: '/guide/find-java.md' }
            ]
          },
          {
            text: 'Minecraft服务器（软件）相关问题', items: [
              { text: '要去哪里找服务端', link: '/guide/get-minecraft-server-jar.md' }
            ]
          },
          { text: '网络相关问题', link: '/guide/#网络相关问题' },
          {
            text: '插件相关问题', items: [
              { text: '常见插件中文名称与用途', link: '/guide/plugins-table.md' }
            ]
          },
          { text: '报错相关问题', link: '/guide/#报错相关问题' },
          {
            text: '常用链接', items: [
              { text: 'SpigotMC', link: 'https://www.spigotmc.org/' },
              { text: 'Bukkit Dev', link: 'https://dev.bukkit.org/' },
              { text: 'Minecraft插件百科', link: 'https://mineplugin.org/' },
              { text: '方块元服务器wiki', link: 'https://yang-qwq.top/block-server-wiki/' }
            ]
          },
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '全站内容均以</a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA</a>协议许可',
      copyright: "© Yang-qwq 2024"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yang-qwq/MCServerOwnerFaqs' },
      // {
      //   icon: {
      //     svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"/></svg>'
      //   }, link: 'https://github.com/Yang-qwq/MCServerOwnerFaqs'
      // }
    ]
  },

  lastUpdated: true
})
