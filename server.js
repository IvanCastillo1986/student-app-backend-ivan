const app = require('./app');
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => console.log("listening on port " + PORT));
// app object has a method called listen(). This will take two parameters:
// first is the port, second is a callback that runs when our server starts up.
// We don't need a second argument, but then we won't see a message that says that we've started