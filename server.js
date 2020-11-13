  
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Assign Port
const PORT = process.env.PORT || 3000;

const db = require("./models/index");

// Instantiate Server
const app = express();

//Logs request, etc, to terminal
app.use(logger("dev"));

//Encodes json and url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Outputs to the client
app.use(express.static("public"));


//Initialize Mongo database named workout
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


//Add routes
require("./routes/api-routes")(app);
require("./routes/views")(app);


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});