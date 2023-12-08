const { readFileSync, writeFileSync } = require("fs");

const template = readFileSync("./src/template.hbs").toString();
const styles = readFileSync("./output/styles.css").toString();

writeFileSync(
  "./output.js",
  `module.exports = {\n\ttemplate: \`${template}\`,\n\tstyles: ${JSON.stringify(styles)}\n};`,
);
