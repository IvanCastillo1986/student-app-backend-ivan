// When setting this up, we will keep the default configuration and not take any arguments
const pgp = require("pg-promise")()
require("dotenv").config()


const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
}

// Now we have set up the connection. 
// We will pass an object with the necessary information in order to connect our server with our database.
// We'll bring in variables from our .env file.
// Finally, we must open the connection with:
const db = pgp(cn)
// Note: cn is short for connection


module.exports = db