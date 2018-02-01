/**
 * Finds which region a point, p2, lies in, given a center point, p1, and a list
 * of regions
 *              ○ p2
 *  0 rads │   ╱
 * ┌───────┼───────┐  Example:
 * │   0   │ ╱  3  │  determineRegion(p1, p2, getRegions(4));
 * │     p1│╱      │  ===
 * ├───────○───────│  {  // These are in radians
 * │   1   │   2   │     min: 4.71238898038469,  // (3/2π rads)
 * │       │       │     max: 6.283185307179586, // (2π rads)
 * └───────┼───────┘     region: 3
 *         │ π rads    }
 * @param {[number, number]} p1 The center point
 * @param {[number, number]} p2 The point to find which region it belongs in
 * @param {regions[]} regions A list of angle regions
 * @returns {region}
 */
const determineRegion = (p1, p2, regions) => {
  const width = p2[0] - p1[0];
  const height = p2[1] - p1[1];

  const angle = Math.atan2(width, height) + Math.PI;
  return regions.find(r => angle <= r.max && angle >= r.min);
};

module.exports = determineRegion;
