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
  checkRating(parseSingle.totalrating, movieId);
}

function checkRating(movie, id) {
  //   console.log(id);
  topRatedArr.push([movie, id]);
  //   console.log(topRatedArr);
  //   console.log(topRatedArr[5].toprated);
  let movienumber = "movieRating" + (topRatedArr.length - 3);
  //   let movienumerId = "id" + (topRatedArr.length - 3);
  FavoriteMovies(id);
  //   console.log(movienumber);

  //   console.log(topRatedArr);
  //   const sortedFavorites = obj.sort(function (a, b) {
  //     return obj.movienumber - b.age;
  //   });
  topRatedArr.sort(sortFunction);

  function sortFunction(a, b) {
    if (a[0] === b[0]) {
      return 0;
    } else {
      return a[0] < b[0] ? -1 : 1;
    }
  }
  console.log(topRatedArr);
  FavoriteMovies(topRatedArr[(topRatedArr.length - 4, topRatedArr)]);
  console.log(topRatedArr[topRatedArr.length - 4]);
}
async function FavoriteMovies(id, array) {
  const movie_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=1deb0326fc3b1f89371e34530d9740a3&language=en-US`;
  //   const response = await fetch(movie_URL);
  //   const data = await response.json();
  //   console.log(data);
}
