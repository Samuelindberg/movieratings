let topRatedArr = [];
let index = 0;
let moviesContainer = document.querySelector(".favorite-movies-container");
for (let i = 0, len = localStorage.length; i < len; ++i) {
  movie = localStorage.getItem(localStorage.key(i));
  const movieId = localStorage.key(i);
  allMovies = { movie };
  //   console.log(movieIdString);
  let parseSingle = JSON.parse(localStorage.getItem(movieId));
  //   console.log(movieId);
  //   console.log(parseSingle.totalrating);
  parseSingle.id = movieId;
  checkRating(parseSingle.totalrating, movieId);
}

function checkRating(movie, id) {
  //   console.log(id);
  topRatedArr.push([movie, id]);
  topRatedArr.sort(sortFunction);
  //   console.log(topRatedArr[topRatedArr.length - 1]);
  function sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return b[0] < a[0] ? -1 : 1;
    }
  }
}
FavoriteMovies();

async function FavoriteMovies() {
  console.log(topRatedArr);

  for (i = 0; i < topRatedArr.length; i++) {
    const movie_URL = `https://api.themoviedb.org/3/movie/${topRatedArr[i][1]}
    ?api_key=1deb0326fc3b1f89371e34530d9740a3&language=en-US`;
    const response = await fetch(movie_URL);
    const data = await response.json();

    displayFavorites(data);
  }
}

function displayFavorites(movie) {
  console.log(movie);
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
}
