const express = require("express");


// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


require("../routes/apiRoutes")(app);
require("../routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Server listening on: " + PORT);
});