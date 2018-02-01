const determineRegion = (p1, p2, regions) => {
  const width = p2[0] - p1[0];
  const height = p2[1] - p1[1];

  const angle = Math.atan2(width, height) + Math.PI;
  return regions.find(r => angle <= r.max && angle >= r.min);
};

module.exports = determineRegion;
