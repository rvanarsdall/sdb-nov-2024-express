console.log("code works");

/* 
1. Have some data in the database or in the file to fetch (example: assets> movie-inventory.json).
2. getAllMovies Function to fetch all the movies (line: 55)
3. create a function to display all the movies (getAllMovies Function). (make sure you are clearing out the elements (ex: clearTable function))(line:76)

4. Fish for the form (line: 16)
5. Added the event listener (line:19)
6. Created the AddNewMovie(line: 24)

*/

const API_URL = "http://localhost:4000/movie/";

const formElement = document.querySelector("form");
console.log(formElement);

formElement.addEventListener("submit", addNewMovie);

async function addNewMovie(event) {
  event.preventDefault();
  console.log("Submit Works");
  // 1. Grab the form data
  let formData = new FormData(formElement);

  // 2. Build your data object (Look at postman for an example)
  // - the .get() needs to correspond to the "name" attribute to the form field
  let data = {
    title: formData.get("movieTitle"),
    genre: formData.get("movieGenre"),
    yearPublished: formData.get("movieYear"),
    inventoryQuantity: formData.get("inventoryQuantity"),
  };
  // 3. Fetch API to send the data
  const ADD_MOVIE_URL = API_URL + "add";
  let response = await fetch(ADD_MOVIE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  let responseData = await response.json();
  console.log(responseData);
  // 4. Refetch all data to display on the page.
  getAllMovies();
}

async function getAllMovies() {
  // 1. What is the endpoint I'm trying to reach?
  const GET_ALL_MOVIES = API_URL + "get-all";
  // 2. Create a Try Catch Block
  try {
    // 3. Use the fetch() api to send a request to get all the movies
    const response = await fetch(GET_ALL_MOVIES);
    // 4. Use response.json() method to parse the JSON response from the Server
    const data = await response.json();
    // 5. console log the data and try to navigate to the data that needs to be displayed
    console.log(data.movies);
    // 6. pass your data to your display function.
    // ! Only give the function the data it needs to work with
    displayMovieInventory(data.movies);
  } catch (error) {
    console.error(error);
  }
}

getAllMovies();

function clearTable() {
  let movieTableBody = document.querySelector("#movieTableBody");
  movieTableBody.innerHTML = "";
}

clearTable();

function displayMovieInventory(movies) {
  // 1. Create a variable called movieRows and set it to an empty string
  let movieRows = "";
  // 2. Use a foreach loop to iterate over the movies array
  movies.forEach((movie) => {
    movieRows += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.yearPublished}</td>
                <td>${movie.inventoryQuantity}</td>
                <td>
                  <button class="btn btn-warning btn-sm">Update</button>
                  <button class="btn btn-danger btn-sm" onclick="deleteMovie('${movie.id}')">Delete</button>
                </td>
            </tr>
    `;
  });
  let movieTableBody = document.querySelector("#movieTableBody");
  movieTableBody.innerHTML = movieRows;
}

async function deleteMovie(movieId) {
  console.log(movieId);
  //  1. The endpoint you want to use for deletion

  const DELETE_MOVIE_URL = API_URL + "delete/" + movieId;
  //  2. Conduct your fetch with the URL and make sure your method is "DELETE"
  const response = await fetch(DELETE_MOVIE_URL, {
    method: "DELETE",
  });

  // 3. Convert your Response to a JSON Object
  const data = await response.json();
  //  4. Call your function to re-fetch all of the data to display on the page.
  console.log(data);

  getAllMovies();
}
