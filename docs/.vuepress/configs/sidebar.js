export default {
  '/api/': getAPISidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar(),

}

function getComponentsSidebar() {
  return [
    {
      isGroup: true,
      text: '组件',
      children: [
        {
          text: 'Avatar',
          link: '/components/Avatar.md'
        },
        {
          text: 'Button 按钮',
          link: '/components/button.md'
        },
        {
          text: 'Table 表格',
          link: '/components/table.md'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs.md'
        },
        {
          text: 'Select 下拉框',
          link: '/components/select.md'
        },
        {
          text: 'Breadcrumb 面包屑',
          link: '/components/Breadcrumb.md'
        },
        {
          text: 'Checkbox 多选框',
          link: '/components/Checkbox.md'
        }
      ]
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '教程',
      link:'guide/index.md'
    }
  ]
}

function getAPISidebar() {
  return [
    { text: 'API参考', link:'/api/index.md'}
  ]
}

