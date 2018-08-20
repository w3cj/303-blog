const fs = require('fs');
const schemas = require('../src/db/schemas');

Object.keys(schemas).forEach((name) => {
  fs.writeFileSync(`src/db/schemas/json/${name}.json`, JSON.stringify(schemas[name]));
});
