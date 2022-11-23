let searchId = localStorage.getItem("movieId");
let title = document.getElementById("search-title");
let poster = document.getElementById("poster");
console.log(searchId);
async function SearchApi(id) {
  const movie_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=1deb0326fc3b1f89371e34530d9740a3&language=en-US`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  AddInfo(data);
}
SearchApi(searchId);

function AddInfo(movie) {
  console.log(movie);
  title.innerText = movie.title;
  poster.innerHTML = `<img src = https://image.tmdb.org/t/p/original/${movie.poster_path}>`;
}
console.log("test");
