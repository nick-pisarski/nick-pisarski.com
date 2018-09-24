import path from 'path'


module.exports = {
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers/"),
      "@shared": path.resolve(__dirname, "src/components/shared"),

    }
  }
}