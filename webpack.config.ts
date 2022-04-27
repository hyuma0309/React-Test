const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        generator: [
          {
            preset: "webp",
            implementation: ImageMinimizerPlugin.squooshGenerate,
            options: {
              encodeOptions: {
                /* 各種libSquooshのオプション設定 */
                webp: {
                  quality: 70,
                },
              },
            },
          },
        ],
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          filename: "[name][ext]",
          options: {
            encodeOptions: {
              /* 各種libSquooshのオプション設定 */
              mozjpeg: {
                quality: 70,
              },
            },
          },
        },
      }),
    ],
  },
};
