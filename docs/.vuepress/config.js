import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        sidebar: [
            {
                text:'首页',
                link:'/'
            },
            // SidebarItem
            {
                text: 'Foo',
                link: '/guide',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                    '/foo/bar.md',
                ],
            },
            // 字符串 - 页面文件路径
            {
                text:'Components',
                link:'/components/select',
                children:[
                    {
                        text: 'Select',
                        link: '/components/select'
                    }
                ]
            }
        ],
        navbar:[
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]

    }),
    plugins: [

    ],
    })






