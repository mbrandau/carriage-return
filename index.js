module.exports = print;
module.exports.print = print;
module.exports.clear = clear;
module.exports.end = end;

const util = require('util');

let length = 0;

function print() {
  let line = util.format.apply(this, Array.prototype.slice.call(arguments));
  const l = line.length;
  line += fill(length - line.length);
  length = l;
  process.stdout.write('\r' + line);
};

function clear() {
  process.stdout.write('\r' + fill(length));
};

function end() {
  let line = util.format.apply(this, Array.prototype.slice.call(arguments));
  const l = line.length;
  line += fill(length - line.length);
  length = l;
  process.stdout.write('\r');
  console.log(line);
};

function fill(length) {
  let s = '';
  for (var i = 0; i < length; i++) s += ' ';
  return s;
};
