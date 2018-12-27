// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: true,
        locale: {
          default: 'en-US',
          baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
          antd: true,
        }, // 是否启用antd的<LocaleProvider />
        // title: 'ui',
        dll: true,
        hardSource: true,
        routes: {
          exclude: [/components/,]
        }
      },
    ],
    [
      'umi-plugin-pro-block', {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ]
}
