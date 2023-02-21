import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        sidebar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'Components',
                link: '/components/select',
                children: [
                    {
                        text: 'Select',
                        link: '/components/select'
                    },
                    {
                        text: 'avatar',
                        link: '/components/avatar'
                    },
                    {
                        text: 'button',
                        link: '/components/button'
                    },
                    {
                        text: 'table',
                        link: '/components/table'
                    },
                    {
                        text: 'tabs',
                        link: '/components/tabs'
                    }
                ]
            }
        ],
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]

    }),
    plugins: [

    ],
})






