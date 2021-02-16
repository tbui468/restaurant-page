//Restaurant page notes:

//basic example class

class Rectangle {
  #color = "white";
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculatePerimeter() {
    return 2 * this.width + 2 * this.height;
  }

  get area() {
    return this.width * this.height;
  }
}

const rec = new Rectangle(3, 5);
console.log(rec.area);
console.log(rec.color); //undefined since color is private var
console.log(rec.calculatePerimeter());

////////////////////////History of Javascript and Webpack/Babel//////////////////////////////
//back in the day, libraries had to be added in html using <script> tags before the index.js that used said library was added into html
//eg
  //<script src="lib.js"></script> //third party lib using in your index.js
  //<script src="index.js"></script> //your stuff that you wrote

//npm allowed users to easily share code with only the config file, and packages would be installed locally only (avoiding large data transfers)
//  also, use npm to automate a lot of stuff

//nodejs added ability to import directly into index.js, avoiding the need to include multiple <script> elements for all dependencies
//  note: const lib = require('lib') imports libraries
//BUT, this wouldn't work in browsers, since it doesn't have access to file systems that node does.  So any 'require' calls will throw errors
//so web pack takes all those 'require' statements and replaces it with the actual library contents - now browsers can interpret the js files
//  Reactjs uses webpack.  This is why nodejs is required for Reactjs, dispite being a front end tool
//
//webpack.config.js can be used to configure webpack builds options (allowing us to need all the command line options)
//
//Babel, coffeescript and Typescript can transpile to javascript to an older version of javascript that more browsers support
//  this also allows developers to use modern js without having to worry about compatibility issues
//  this can be included in the webpack build process
//  minifying the file can also improve performance (at the cost of readability) use webpack-cli option --mode=production (as opposed to --mode=development)
//  --watch will automatically run webpack on changes to input javascript files

//Webpack has good tutorials to learn


////////////////////MODULES///////////////////////////
