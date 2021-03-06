# polld 
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image]

Because sometimes, it's just easier to poll.

## Install

```bash
$ npm install -g polld
```

## Usage

```bash
polld -h <statsd_host> -p <statsd_port> -i <interval> <taskfile>
```
The taskfile is just a .js file that is run at each interval period. Provided inside the taskfile is a handle to an instance of [node-statsd](https://github.com/sivy/node-statsd) to send metrics to the statsd server.

The taskfile can be written in js or coffee, See /example for more details.

## License

Copyright (c) 2015 Ainsley Chong. Licensed under the MIT license.


[npm-url]: https://npmjs.org/package/polld
[npm-image]: https://badge.fury.io/js/polld.svg
[travis-url]: https://travis-ci.org/ainsleyc/polld
[travis-image]: https://travis-ci.org/ainsleyc/polld.svg?branch=master
[daviddm-url]: https://david-dm.org/ainsleyc/polld.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ainsleyc/polld
