export const themeData = JSON.parse("{\"sidebar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"Components\",\"link\":\"/components/select\",\"children\":[{\"text\":\"Select\",\"link\":\"/components/select\"},{\"text\":\"avatar\",\"link\":\"/components/avatar\"},{\"text\":\"button\",\"link\":\"/components/button\"},{\"text\":\"table\",\"link\":\"/components/table\"},{\"text\":\"tabs\",\"link\":\"/components/tabs\"}]}],\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Guide\",\"link\":\"/guide/\"},{\"text\":\"External\",\"link\":\"https://google.com\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
