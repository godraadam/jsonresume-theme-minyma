const handlebars = require("handlebars")
const { readFileSync } = require('fs');

function render(input) {
    const source = readFileSync('./src/template.hbs').toString();
    const template = handlebars.compile(source);
    return template(input);
}

module.exports = {render};