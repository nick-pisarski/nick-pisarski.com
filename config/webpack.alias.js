const path = require('path');

module.exports = {      
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
    "@components": path.resolve(__dirname, "../src/components"),
    "@containers": path.resolve(__dirname, "../src/containers/"),
    "@shared": path.resolve(__dirname, "../src/components/shared"),
    "@store": path.resolve(__dirname, "../src/store"),
    "@constants": path.resolve(__dirname, "../src/constants"),
  }