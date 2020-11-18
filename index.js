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

	return Math.sqrt(((endX - startX) ** 2) + ((endY - startY) ** 2) + ((endZ - startZ) ** 2))
}

module.exports.earth = ([startLatitude, startLongitude, startAltitude = 0], [endLatitude, endLongitude, endAltitude = 0]) => {
	assertNumber(startLatitude)
	assertNumber(startLongitude)
	assertNumber(endLatitude)
	assertNumber(endLongitude)

	return Math.sqrt((getPreciseDistance({
		latitude: startLatitude,
		longitude: startLongitude
	}, {
		latitude: endLatitude,
		longitude: endLongitude
	}, 1e-4) ** 2) + ((startAltitude - endAltitude) ** 2))
}
