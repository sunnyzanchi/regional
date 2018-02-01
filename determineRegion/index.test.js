const { test } = require('ava');
const determineRegion = require('./index');
const getRegions = require('../getRegions');

// This checks against four points that are all 90 degrees apart from each other
test('for 2 regions', (t) => {
  const { cos, sin, sqrt } = Math;

  const p1 = [0, 0];

  // The 0 angle line is a vertical line, the angle increases clock-wise
  const d45 = [cos(sqrt(2) / 2), sin(sqrt(2) / 2)];
  const d135 = [-cos(sqrt(2) / 2), sin(sqrt(2) / 2)];
  const d225 = [cos(sqrt(2) / 2), -sin(sqrt(2) / 2)];
  const d315 = [-cos(sqrt(2) / 2), -sin(sqrt(2) / 2)];

  const regions = getRegions(2);

  t.true(determineRegion(p1, d45, regions) === regions[1]);
  t.true(determineRegion(p1, d135, regions) === regions[0]);

  t.true(determineRegion(p1, d225, regions) === regions[1]);
  t.true(determineRegion(p1, d315, regions) === regions[0]);
});
