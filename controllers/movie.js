// Goes at the top of the file
const router = require("express").Router();
const save = require("../helper/save");
const read = require("../helper/read");
// In reference to the path of the app.js
const DB_PATH = "./assets/movie-inventory.json";

// Create an endpoint for /get-all
// Request Type: GET
// Response Send: "route works"
// localhost:4000/movie/get-all
router.get("/get-all", (req, res) => {
  try {
    // 1. read the DB Path file and store it in a variable
    let movieArray = read(DB_PATH);
    res.json({ message: `route works`, movies: movieArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Create an endpoint for /add
// Request Type: POST
// Response Send: "route works"
// localhost:4000/movie/add

router.post("/add", (req, res) => {
  try {
    // 1. Pull out the keys from the req.body
    console.log(req.body);
    // Destructuring the body object with the keys that we need.
    const { title, genre, yearPublished, inventoryQuantity } = req.body;
    console.log(title, genre, yearPublished, inventoryQuantity);

    // 2. Create the object so it will inserted into the movieArray

    const movieObject = {
      title: title,
      genre,
      yearPublished,
      inventoryQuantity,
    };

    // 3. Create a variable to store the movieArray and read the current file

    let movieArray = read(DB_PATH);

    // 4. Use the .push() to add the new movie to the array

    movieArray.push(movieObject);

    // 5. Save the Data to the File using the Save Function
    save(movieArray, DB_PATH)

    //  send the full array back to the client
    res.json({ message: `route works`, movies: movieArray });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Goes at the end of the file
module.exports = router;
