const fs = require('fs');
// generate unique id
const { v4: uuidv4 } = require('uuid');

const util = require('util');
const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);
// read - readfilesync
// write - writefilesync
// get
// add
// remove

module.exports