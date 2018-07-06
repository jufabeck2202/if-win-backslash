# name [![Build Status](https://travis-ci.org/jufabeck2202/if-win-backslash.svg?branch=master)](https://travis-ci.org/jufabeck2202/if-win-backslash)

> changes / to \\ if the platform is windows


## Install

```
$ npm install if-win-backslash
```


## Usage
```js
const ifwinb = require("if-win-backslash");

let path = ifwinb("your/path/to/something")
// if on windows path = your\\path\\to\\something
// on everything else = your/path/to/something
```
Text

## API

### ifwinb(path)

Returns a `String` path, if on windows with backslashes, 
on everything else with frontslashes.Also normalizes the path using upath


#### path

Type: `string`

Path can contain as many front and backslashes as you want


## Related

- [is-windows](https://github.com/jonschlinkert/is-windows) - Returns true if the platform is Windows. 

## License

MIT © [Julian Beck](https://github.com/jufabeck2202)