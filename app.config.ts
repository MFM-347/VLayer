export default defineAppConfig({
  myLayer: {
    name: 'VLayer',
  },
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
