const { render } = require('../index');
const { writeFileSync } = require('fs');
const example = require('../src/example.json');

const htmlOutputFile = './output/index.html';

writeFileSync(htmlOutputFile, render(example));
console.log(`Wrote to ${htmlOutputFile}`);