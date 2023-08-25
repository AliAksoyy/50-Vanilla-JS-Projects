const api_url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9d519cf637913b53609ad35ac541965&page=1";

const search_url =
  "https://api.themoviedb.org/3/search/movie?api_key=f9d519cf637913b53609ad35ac541965&query='";

const img_path = "https://image.tmdb.org/t/p/w1280";

const form = document.getElementById("form");

const search = document.getElementById("search");

//? Get initail movies

getMovies(api_url);

async function getMovies(url) {
  const res = await fetch(url);

  const data = await res.json();
  console.log(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(search_url + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
