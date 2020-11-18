# point-distance [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/point-distance/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/point-distance)

Get the distance between 2 points on a 2d, 3d or Earth-like plane.

[![NPM Badge](https://nodei.co/npm/point-distance.png)](https://npmjs.com/package/point-distance)

## Install

```sh
npm install point-distance
```

## Usage

```js
const pointDistance = require("point-distance")

console.log(pointDistance([0, 0], [3, 4]))
//=> 5

console.log(pointDistance([0, 0, 0], [3, 12, 4]))
//=> 13

console.log(pointDistance.earth([-36.848161, 174.762256], [-36.848513, 174.7635]))
//=> 117.6259
```

## API

### pointDistance([startX, startY, startZ?], [endX, endY, endZ?])

Get the distance between 2 points on a 2d or 3d plane.

#### startX, startY, startZ, endX, endY, endZ

Type: `number`

The starting and ending coordinates to get the distance between.

### pointDistance.earth([startLatitude, startLongitude, startAltitude?], [endLatitude, endLongitude, endAltitude?])

Get the distance between 2 coordinates on Earth. Returns the distance in metres.

#### startLatitude, startLongitude, endLatitude, endLongitude

Type: `number`

The starting and ending coordinates to get the distance between.

#### startAltitude, endAltitude

Type: `number`

The starting and ending altitudes between the 2 coordinates in metres.
