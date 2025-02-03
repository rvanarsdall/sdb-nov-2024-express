const router = require("express").Router();

// Create an endpoint for /test
// Request Type: GET
// Response Send: "Hello from /test"

router.get("/test", (req, res) => {
  res.send("Hello from /test");
});

// ? Create the endpoint of /greeting
// ? Request type: POST request
// ? send back a "Good Afternoon"
router.post("/greeting", (req, res) => {
  res.send("Good Afternoon " + req.body.firstName + " " + req.body.lastName);
});

// ? Create the endpoint of /add
// ? Request type: POST request
// ? send back the sum of the two numbers sent in the request body
// Expected Request Body: { "num1": 5, "num2": 10 }

router.post("/add", (req, res) => {
  try {
    console.log(req.body);
    let number1 = req.body.num1;
    let number2 = req.body.num2;
    res.json({ message: `route works`, total: number1 + number2 });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
