module.exports = {
  presets: ["react-app"],
  plugins: [
    [
      "import",
      {
        libraryName: "echo-rui", 
        camel2DashComponentName: false, // 是否需要驼峰转短线
        camel2UnderlineComponentName: false, // 是否需要驼峰转下划线
        customName: function (name) {
          console.log(name);

          return `echo-rui/dist/components/${name}`;
        },
        style: "css",
      },
    ],
    // ["import", {
    //   "libraryName": "antd",
    //   "libraryDirectory": "es",
    //   "style": "css" // `style: true` 会加载 less 文件
    // }]
  ],
};