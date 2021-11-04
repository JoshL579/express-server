require('dotenv').config();

const env = process.env.NODE_ENV;
const port = process.env.PORT;

module.exports = { env, port };