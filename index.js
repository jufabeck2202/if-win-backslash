const isWindows = require("is-windows");
const upath = require("upath");

module.exports = (path) => {
    if (isWindows())
        return changeBackslash(path);
    else return path;

}
module.exports.test = (path) => {
    return changeBackslash(path);
};

function changeBackslash(path) {
    return upath.normalize(path).replace(/\//g, "\\");
}