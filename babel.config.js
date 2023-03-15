module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.json', '.svg', '.png', '.ts', '.tsx'],
        alias: {
          navigation: './src/navigation',
          components: './src/components',
          i18n: './src/i18n',
          screens: './src/screens',
          theme: './src/theme',
          utils: './src/utils',
          hooks: './src/hooks',
          models: './src/models',
          api: './src/api',
        },
      },
    ],
  ],
};
