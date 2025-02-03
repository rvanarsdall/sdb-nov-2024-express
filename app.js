const express = require("express");
const practiceController = require("./controllers/practice");
const movieController = require("./controllers/movie");
const app = express();
const PORT = 4000;

// ! Needs to be above the routes
app.use(express.json()); // THIS WILL ALLOW YOU TO SEND IN YOUR PAYLOAD A JSON OBJECT AND IT WILL PARSE IT FOR US TO USE- Middleware

// This will serve the static html page that is inside the public folder
app.use(express.static(`${__dirname}/public`));

// Route: /practice and it will go into the folder where practice.js lives
app.use("/practice", practiceController);

// Route: /movie and it will go to the folder that contains the movie.js (controller)
app.use("/movie", movieController)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
