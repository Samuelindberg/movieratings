// movieListItem.innerHTML = `
// //         <div class = "favorite-poster">
// //         <img src = https://image.tmdb.org/t/p/original/${movies.results[idx].poster_path}>
// //     </div>
// // <div class="search-info">

// //     <h1 class="search-title">${movies.results[idx].title}</h1>
// //     <p class="search-actors"> Actors:  </p>
// //     <p class="search-release">release year:${movies.results[idx].release_date}</p>
// // </div>`;
let FavoriteListItem = document.createElement("div");
FavoriteListItem.className = "FavoriteListItem";
let obj = {};
let topRatedArr = [3, 4, 2];

for (let i = 0, len = localStorage.length; i < len; ++i) {
  movie = localStorage.getItem(localStorage.key(i));
  const movieId = localStorage.key(i);
  const movieParsed = JSON.parse(movie);
  const movieIdString = movieId.toString();
  obj.movieId = movieParsed;
  allMovies = { movie };
  //   console.log(movieIdString);
  let parseSingle = JSON.parse(localStorage.getItem(movieId));
  //   console.log(movieId);
  //   console.log(parseSingle.totalrating);
  parseSingle.id = movieId;

  checkRating(parseSingle);
}

function checkRating(movie) {
  console.log(movie);
}
