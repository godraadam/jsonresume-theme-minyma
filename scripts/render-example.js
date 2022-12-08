const render = require("../index");
const { writeFileSync } = require("fs");
const example = require("../src/example.json");

const outputFile = "./output/index.html";

writeFileSync(outputFile, render(example));
console.log(`Wrote to ${outputFile}`);
