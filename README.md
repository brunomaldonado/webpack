<h1>Preview</h1>
<p align = "center">
<img src="./src/assets/images/xdr.png" alt="">
</p>

# Webpack deploy

Webpack fundamentals example with test build project [https://brunomaldonado.netlify.app/](https://brunomaldonado.netlify.app/)

## Installation
 requires [Node.js](https://nodejs.org/en/ "Node.js") to  run
 
 clone the repository
 
 `https://github.com/brunomaldonado/webpack.git`
 

 
install all dependencies

| Command     | Description      |
| :------------ | :------------ |
| `npm install webpack-cli -D`        | Basic webpack dependencies         |
| `npm install babel-loader @babel/core`         | Work babel with webpack. Ensure javascript compatibility between browsers.          |
| `npm install @babel/preset-env`         | Use the latest ecmascript features          |
| `npm install @babel/plugin-transform-runtime`         | Work with async functions. async await and fetch          |
| `npm install html-webpack-plugin`         | Work with html files          |
| `npm install css-loader`         | The css-loader interprets @import and url() like import/require() and will resolve them.          |
| `npm install mini-css-extract-plugin`         | This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.          |
| `npm install node-sass sass-loader`         | Work with sass          |
| `npm install copy-webpack-plugin`         | Copies individual files or entire directories, which already exist, to the build directory.          |
| `npm install css-minimizer-webpack-plugin`         | Optimize CSS files          |
| `npm install dotenv-webpack`         | Environment variables. Wraps dotenv and Webpack.DefinePlugin. As such, it does a text replace in the resulting bundle for any instances of process.env.          |
| `npm install clean-webpack-plugin`         | Clean build directory          |
| `npm install webpack-dev-server`         | Provides you with a simple web server and the ability to use live reloading          |
| `npm install webpack-bundle-analyzer`         | Visualize size of webpack output files with an interactive zoomable treemap.          |

## Create .env file with public API values
`API=https://randomuser.me/api/?gender=female`

### production mode
Run in production mode

`npm run build`

> and open the build in `dist/index.html` with Live Server

Run in development mode

`npm run dev`

## Licence
MIT
