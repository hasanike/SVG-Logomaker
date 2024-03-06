const { Svg, Rect } = require('svg-builder');

// Create a new SVG document
const svg = new Svg();

// Create a rectangle
const rect = new Rect()
    .x(10)
    .y(10)
    .width(180)
    .height(80)
    .fill('blue');

// Add the rectangle to the SVG document
svg.addChild(rect);

// Generate SVG markup
const svgMarkup = svg.toString();

// Output SVG markup to a file
const fs = require('fs');
fs.writeFileSync('output.svg', svgMarkup);

console.log('SVG file generated successfully.');
