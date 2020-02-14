const rootPath = __dirname;
const path = require('path');

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, 'public', 'uploads'),
  port : 8000,
};