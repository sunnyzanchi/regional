# Regional
This library lets you split up a circle into regions and figure out what region a point is in with relation to a center point.

Here's an example:
```javascript
import { determineRegion, getRegions } from 'regional'

// This breaks our 'circle' into four regions, like this:
//       │ 0/360 degrees
// ┌─────┼─────┐ 
// │  0  │  3  │  
// ├─────○─────│ 
// │  1  │  2  │ 
// └─────┴─────┘ 
const regions = getRegions(4);

const { region } = determineRegion(
  [0, 0],
  [-2, -2], // a point that is 45 degrees clockwise from the start
  regions
);

// region === 0
```

One thing to be careful of is where the starting angle is — the 0 degree mark is at the top vertical, not the right horizontal like is often seen. Also, x values increase from left to right, while y values increase from top to bottom

## Methods
  + `determineRegions(p1: [number, number], p2: [number, number], regions: Array<region>): region` Returns the region object from the regions array that contains p2
  + `getRegions(numberOfSides: number): Array<region>` Returns an array of regions that is essentially a circle split into as many regions as the number provided 