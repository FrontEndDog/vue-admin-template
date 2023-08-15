module.exports = {
  multipass: true, // boolean. false by default
  datauri: 'none', // 'base64', 'enc' or 'unenc'. 'base64' by default
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    //将样式转化为属性
    'convertStyleToAttrs',
    //删除fill和stroke属性
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)',
      },
    },
  ],
}
