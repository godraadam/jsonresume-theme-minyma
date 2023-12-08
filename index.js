const handlebars = require("handlebars");
const { template, styles } = require("./output.js");

function render(input) {
  const _template = handlebars.compile(template);
  return _template({ ...input, styles });
}

module.exports = { render };
