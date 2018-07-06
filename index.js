const isWindows = require("is-windows");
const upath  = require("upath");

module.exports = (path) => {
    if (isWindows)
        return upath.normalize(path).replace(/\//g,"\\");
    else return path;
    
}
