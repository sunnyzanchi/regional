const { test } = require('ava');
const getRegions = require('./index');

/**
 * This is the easiest to test and to reason about.
 *  - region 0 is from 0deg/0rads to 179.999deg/0.999πrads
 *  - region 1 is from 180deg/2πrads to 360deg/2πrads
 *            0
 *   2π ───────────── 0
 *            1
 */
test('2 sides', (t) => {
  const regions = getRegions(2);

  t.true(Array.isArray(regions));
  t.true(regions.length === 2);

  t.true(regions[0].max === Math.PI);
  t.true(regions[0].min === 0);

  t.true(regions[1].max === 2 * Math.PI);
  t.true(regions[1].min === Math.PI);
});
