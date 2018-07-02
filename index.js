const { join, dirname } = require('path');
const { xrns2ts } = require('tinyseq');

module.exports = function(source) {
  const callback = this.async();
  const instrumentsFilePath = join(dirname(this.resourcePath), 'instruments');
  const instruments = require(instrumentsFilePath);

  xrns2ts(source, instruments, result => {
    // what could possibly go wrong
    eval(`result=${result}`);
    callback(null, result);
  });
};

module.exports.raw = true;
