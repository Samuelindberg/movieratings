let topRatedArr = [];
let index = 0;
let moviesContainer = document.querySelector(".favorite-movies-container");
let genres = "";
for (let i = 0, len = localStorage.length; i < len; ++i) {
  movie = localStorage.getItem(localStorage.key(i));
  const movieId = localStorage.key(i);
  allMovies = { movie };
  let parseSingle = JSON.parse(localStorage.getItem(movieId));
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
    CollectGenres(data);
    displayFavorites(data, i);
  }
}
function CollectGenres(movie) {
  try {
    genres = "Genres: " + movie.genres[0].name + " ";
  } catch (error) {
    console.log("error");
  }

  for (var i = 1; i < 3; i++) {
    console.log(movie);
    try {
      genres += movie.genres[i].name + " ";
    } catch (error) {
      console.log(error);
    }
  }
}
function displayFavorites(movie, index) {
  console.log(genres);
  let FavoriteListItem = document.createElement("div");
  FavoriteListItem.className = "FavoriteListItem";
  FavoriteListItem.innerHTML = `
     <div class="search-info">
    <h1 class="favorites-title">${movie.original_title}</h1>
    <p class="favorites-desc">${movie.overview}</p>
    <div class="bottom-div-favorites">
    <div class=""genres-release">
    <h3>${genres}<h3>
    <h3>Release Date: ${movie.release_date.substr(0, 4)}<h3>
    </div>
    <h1 class="favorites-rated">${topRatedArr[index][0].toFixed(1)}/5</h1>
    </div>
     </div>
     <div class = "favorite-poster">
     <img src = https://image.tmdb.org/t/p/original/${
       movie.poster_path
     } alt="/img/no-poster.svg">
  </div>`;
  moviesContainer.appendChild(FavoriteListItem);
  genres = "";
}
