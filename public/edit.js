const API_URL = "http://localhost:4000/movie/";

function getURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return id;
}

async function getMovieById(id) {
  // 1. URL of Endpoint
  const url = `http://localhost:4000/movie/get-by-id/${id}`;
  // 2. Fetch the data from the URL
  const response = await fetch(url);
  // 3. Convert the response to JSON
  const data = await response.json();
  // 4. Return the data
  return data;
}

function fillFormsWithData(data) {
  // 1. Get the form elements
  const titleInput = document.getElementById("title");
  const genreInput = document.getElementById("genre");
  const yearPublishedInput = document.getElementById("yearPublished");
  const inventoryQuantityInput = document.getElementById("inventoryQuantity");
  // 2. Fill the form with the data
  titleInput.value = data.title;
  genreInput.value = data.genre;
  yearPublishedInput.value = data.yearPublished;
  inventoryQuantityInput.value = data.inventoryQuantity;
}

async function main() {
  const id = getURLParams();
  const data = await getMovieById(id);
  fillFormsWithData(data);
}

main();

// Save On Update

const formElement = document.getElementById("editMovieForm");

formElement.addEventListener("submit", async function (event) {
  event.preventDefault();
  const id = getURLParams();
  let formData = new FormData(formElement);

  const data = {
    title: formData.get("title"),
    genre: formData.get("genre"),
    yearPublished: formData.get("yearPublished"),
    inventoryQuantity: formData.get("inventoryQuantity"),
  };

  const UPDATE_MOVIE_URL = API_URL + id;

  const response = await fetch(UPDATE_MOVIE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    window.location.href = "/index.html";
  } else {
    alert("Failed to update movie");
  }
});
