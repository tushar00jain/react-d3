var path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "editor.min.js"
    },
    module: {
        loaders: [
          {
            test: /\.js|\.jsx$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
          },
        ]
    }
};
