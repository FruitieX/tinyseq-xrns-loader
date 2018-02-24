const { xrns2ts } = require('tinyseq');

module.exports = function(source) {
  const callback = this.async();

  xrns2ts(source, result => {
    // what could possibly go wrong
    eval(`result=${result}`);
    callback(null, result);
  });
};

module.exports.raw = true;
