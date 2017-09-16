# carriage-return

[![npm](https://img.shields.io/npm/v/carriage-return.svg)](https://www.npmjs.com/package/carriage-return) [![npm](https://img.shields.io/npm/dt/carriage-return.svg)](https://www.npmjs.com/package/carriage-return) [![GitHub issues](https://img.shields.io/github/issues/mbrandau/carriage-return.svg)](https://github.com/mbrandau/carriage-return/issues)

Small utility to make use of the carriage-return character, e.g. as a progress indicator.

## Usage

Install and save the package to your project `npm i --save carriage-return`

```js
const cr = require('carriage-return');

const delay = ms => new Promise(res => setTimeout(res, ms));
async function test () {

  // Prints out "I'm not gonna be visible"
  cr.print('I\'m not gonna be visible');

  await delay(1000);

  // Overrides "I'm not gonna be visible" and prints "You just got overridden" without a newline
  cr.print('You just got overridden');

  await delay(1000);

  // Just clears the line (without \n)
  cr.clear();

  await delay(1000);

  // Prints "That's it." with a newline
  cr.end('That\'s it.');
}
test();
```
