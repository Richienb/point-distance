"use strict"
const { getPreciseDistance } = require("geolib")

const assertNumber = value => {
	if (typeof value !== "number") {
		throw new TypeError(`Expected a number, got ${typeof value}`)
	}
}

module.exports = ([startX, startY, startZ = 0], [endX, endY, endZ = 0]) => {
	assertNumber(startX)
	assertNumber(startY)
	assertNumber(startZ)
	assertNumber(endX)
	assertNumber(endY)
	assertNumber(endZ)

	return Math.hypot(endX - startX, endY - startY, endZ - startZ)
}

module.exports.earth = ([startLatitude, startLongitude, startAltitude = 0], [endLatitude, endLongitude, endAltitude = 0]) => {
	assertNumber(startLatitude)
	assertNumber(startLongitude)
	assertNumber(endLatitude)
	assertNumber(endLongitude)

	return Math.hypot(getPreciseDistance({
		latitude: startLatitude,
		longitude: startLongitude
	}, {
		latitude: endLatitude,
		longitude: endLongitude
	}, 1e-4), startAltitude - endAltitude)
}
