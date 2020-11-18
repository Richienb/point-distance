declare const pointDistance: {
	/**
	Get the distance between 2 coordinates on a Earth.

	@param startCoordinates The starting latitude, longitude and altitude to get the distance from.
	@param endCoordinates The starting latitude, longitude and altitude to get the distance to.

	@returns The distance in metres.

	@example
	```
	const pointDistance = require("point-distance")

	console.log(pointDistance.earth([-36.848161, 174.762256], [-36.848513, 174.7635]))
	//=> 117.6259
	```
	*/
	earth: (startCoordinates: [number, number, number?], endCoordinates: [number, number, number?]) => number

	/**
	Get the distance between 2 points on a 2d or 3d plane.

	@param startCoordinates The starting x, y and z coordinate pair to get the distance from.
	@param endCoordinates The ending x, y and z coordinate pair to get the distance to.

	@example
	```
	const pointDistance = require("point-distance")

	console.log(pointDistance([0, 0], [3, 4]))
	//=> 5

	console.log(pointDistance([0, 0, 0], [3, 12, 4]))
	//=> 13
	```
	*/
	(startCoordinates: [number, number, number?], endCoordinates: [number, number, number?]): number
}

export = pointDistance
