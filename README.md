# tinyseq-xrns-loader
Webpack 3 loader for Renoise XRNS files, which outputs into tinyseq song format

## Usage
You probably want to use `raw-loader` with this to inject the result into your js directly.
(saves space in size limited productions):

`yarn add tinyseq-xrns-loader raw-loader`

Sample webpack config:

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.xrns/,
        use: [
          'raw-loader',
          'tinyseq-xrns-loader'
        ]
      },
```

Sample usage:
```
s = require("./example-song.xrns");

<tinyseq player goes here>
```

Get the player from: https://github.com/FruitieX/tinyseq
