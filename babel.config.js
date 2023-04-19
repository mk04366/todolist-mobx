module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@analytics': './src/analytics',
          '@assets': './src/assets',
          '@components': './src/components',
          '@i18n': './src/i18n',
          '@middleware': './src/middleware',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
