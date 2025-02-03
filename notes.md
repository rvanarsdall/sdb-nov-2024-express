# Getting Started with ExpressJS

- Docs for ExpressJS: [ExpressJS](https://expressjs.com/)

### Creating a Package.json file

- Right Click the folder we are making the sever in and click on `Open in Terminal`
- In the terminal type `npm init -y` to create a package.json file

- Install ExpressJS Package: `npm install express`

### Create our Main File (app.js)

- In the main folder create a file called `app.js`
- update our `package.json` file to point to our `app.js` file

### Install Nodemon

- Only Once: `npm install -g nodemon`
- Mac Users: `sudo npm install -g nodemon`
- test the version number: `nodemon --version`

### Boiler Plate Code for ExpressJS (app.js)

```js
const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Running your Server with Nodemon

- In the terminal type `nodemon` to start the server
- To exit the server press `ctrl + c`
- To restart it while the nodemon is running press `rs` or resave a file

### MVC (Model View Controller)

- View: What the user sees (Browser, POSTMAN)
- Controller: The logic of the application (Write files, Read files, Database)
- Model: Defines the Data Structure for the Database

### Boiler Plate for Controller

```js
// Goes at the top of the file
const router = require("express").Router();

// Goes at the end of the file
module.exports = router;
```