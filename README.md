skrollto
====

## Introduction

Lightweight cross-browser animated scrolling.

## Installing

`$ npm install skrollto`

## Usage

```js

import skrollto from 'skrollto';
import * as d3 from 'd3-ease';

// Scroll to top
skrollto(0, 5000, d3.easeSinOut, function () {
    console.log('Scroll finished');
});

```

It's highly recommended to use d3-ease functions, but you can use other functions.

## Build ##

* Development: `$ npm run dev`
* Production: `$ npm run build`

## Tests

`$ npm run test`

## License ##

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
