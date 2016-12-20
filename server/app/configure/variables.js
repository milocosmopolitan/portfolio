'use strict';

const path = require('path');
const logMiddleware = require('volleyball');

const rootPath = path.join(__dirname, '../../../');
const indexPath = path.join(rootPath, './app/index.html');
// const faviconPath = path.join(rootPath, './public/favicon.ico');

const env = require(path.join(rootPath, './server/env'));

module.exports = function (app) {
  app.setValue('env', env);
  app.setValue('projectRoot', rootPath);
  app.setValue('indexHTMLPath', indexPath);
  // app.setValue('faviconPath', faviconPath);
  app.setValue('log', logMiddleware);
};
