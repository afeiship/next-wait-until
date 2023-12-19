# next-wait-until
> Wait until for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
yarn add @jswork/next-wait-until
```

## usage
```js
import '@jswork/next-wait-until';

nx.waitUntil({
  timeout: 1000,
  interval:200,
  condition: function () {
    return window.$;
  },
  done: function () {
    console.log('done');
  },
  fail: function () {
    console.log('fail/timeout');
  },
  always: function () {
    console.log('always');
  }
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-wait-until/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-wait-until
[version-url]: https://npmjs.org/package/@jswork/next-wait-until

[license-image]: https://img.shields.io/npm/l/@jswork/next-wait-until
[license-url]: https://github.com/afeiship/next-wait-until/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-wait-until
[size-url]: https://github.com/afeiship/next-wait-until/blob/master/dist/next-wait-until.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-wait-until
[download-url]: https://www.npmjs.com/package/@jswork/next-wait-until
