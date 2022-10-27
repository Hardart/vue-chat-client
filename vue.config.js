const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   transpileDependencies: true,
   css: {
      loaderOptions: {
         scss: {
            additionalData: '@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";',
         },
      },
   },
   // devServer: {
   //    port: 5000,
   // },
   // configureWebpack: {
   //    experiments: {
   //       topLevelAwait: true,
   //    },
   // },
})
