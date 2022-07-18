// When setting this up, we will keep the default configuration and not take any arguments
const pgp = require("pg-promise")()
require("dotenv").config()

// const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
//   process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object

// JORDAN'S CONNECTION OBJECT
// const databaseUrl = process.env.DATABASE
// cn = {
//     connectionString: databaseUrl,
//     allowExitOnIdle: true,
//     max: 30
// }

const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
console.log(DATABASE_URL)

const cn = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
      password: PG_PASSWORD,
    };


// const cn =    {
//         host: process.env.PG_HOST,
//         port: process.env.PG_PORT,
//         database: process.env.PG_DATABASE,
//         user: process.env.PG_USER,
//         password: process.env.PG_PASSWORD,
//     };

// I can also set up a connection string, for which I'd need the database URL.  
// It can be passed in directly:
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