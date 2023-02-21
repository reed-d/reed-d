module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  moduleNameMapper: {
    "~/lib/select/dep/ellipsis.vue": "identity-obj-proxy",
    "~/lib/select/dep/icon.vue": "identity-obj-proxy",
    "~/lib/select/dep/tag.vue": "identity-obj-proxy",
  },
}
