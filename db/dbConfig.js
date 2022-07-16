// When setting this up, we will keep the default configuration and not take any arguments
const pgp = require("pg-promise")()
require("dotenv").config()


const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

// I can also set up a connection string, for which I'd need the 
// database URL.  It can be passed in directly:
// const db = pgp('postgres://john:pass123@localhost:5432/products');
// or as a parameter within the configuration object (which then combines the values):
// const cn = {
//      connectionString: 'postgres://john:pass123@localhost:5432/products',
//      max: 30
// };

// Now we have set up the connection. 
// We will pass an object with the necessary information in order to connect our server with our database.
// We'll bring in variables from our .env file.
// Finally, we must open the connection with:
const db = pgp(cn)
// Note: cn is short for connection


module.exports = db