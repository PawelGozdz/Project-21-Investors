exports.pages = function (env, folder = '') {
  const rootPagesFolderName = 'pages'
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const fs = require('fs')
  const path = require('path')
  const viewsFolder = path.resolve(__dirname, `../src/views/${rootPagesFolderName}`)
  // const viewsFolder = path.resolve(__dirname, `../src/views/${rootPagesFolderName}/${folder}`)

  var pages = []

  fs.readdirSync(viewsFolder).forEach(view => {
    if (view.split('.')[1] === undefined)
      return false;

      // console.log(view);

    const viewName = view.split('.')[0];

    // console.log('viewname: ', viewName);
    const fileName = `${viewName}.html`;
    // const fileName = folder === '' ? `${viewName}/index.html` : `${folder}/${viewName}/index.html`;

    // console.log('filename: ', fileName);
    const options = {
      filename: fileName,
      template: `views/${rootPagesFolderName}/${view}`,
      inject: true
    };

    // console.log('options', options);

    if (env === 'development') {
      options.minify = {
        removeComments: true,
        // collapseWhitespace: true,
        removeAttributeQuotes: true
      };
    }

    pages.push(new HtmlWebpackPlugin(options));
  })

  console.log('pages: ', pages);
  return pages;
}
