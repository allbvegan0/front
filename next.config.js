const withImages = require("next-images");
const withOffline = require("next-offline")
module.exports = withImages();
const nextConfig = {}
module.exports=withOffline(nextConfig)
const isProd = process.env.NODE_ENV === "production";
// experimental:{css:true}
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },
}

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: '@mdx-js/loader',
//           options: pluginOptions.options,
//         },
//       ],
//     })

//     return config
//   },
// }