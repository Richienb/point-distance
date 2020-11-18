const test = require("ava")
const pointDistance = require(".")

test("main", t => {
	t.is(pointDistance([0, 0], [3, 4]), 5)
	t.is(pointDistance([0, 0, 0], [3, 12, 4]), 13)
})

test(".earth()", t => {
	t.is(pointDistance.earth([-36.848161, 174.762256], [-36.848513, 174.7635]), 117.6259)
})
