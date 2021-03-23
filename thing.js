const fs = require("fs");

fs.writeFileSync(
  "node_modules/.keystone/prisma.js",
  `module.exports = require('../../.keystone/prisma/generated-client')
const path = require("path")

path.join(__dirname, '../../.keystone/prisma/app.db');
path.join(process.cwd(), './.keystone/prisma/app.db');

`
);
