# browsersync-starterpack

Simple [browsersync](https://www.browsersync.io) starterpack with html, css and js filewatcher, as well as sass compiler.


### Usage
 - `$ npm install`
 - `$ sudo npm install gulp -g` (run `npm config set prefix /usr/local` if gulp isn't installed globally but in your `~`)
 - run `$ gulp serve`
 
#### Contains
 - Gulp
 - Browsersync
 - Sass Compiler

#### dev dependencies
 - Node.js
 - npm
 - browser-sync: ^2.26.7
 - gulp: ^4.0.2
 - gulp-sass: ^4.1.0
 - node-sass: ^4.14.1

### Troubleshooting
 - If npm installs gulp in `~` instead of the global npm folder, follow [this guide](http://blog.webbb.be/command-not-found-node-npm/).
 - Further help in case of `EACCES` permission errors can be found [here](https://docs.npmjs.com/getting-started/fixing-npm-permissions).
