let path = window.location.pathname;
let page = path.split("/").pop();
const hamburgerLinks = document.getElementById("hamburger-links");
hamburgerIconContainer = {
  bar1: document.getElementById("bar1"),
  bar2: document.getElementById("bar2"),
  bar3: document.getElementById("bar3"),
  menuOpen: false,
};
const searchIcon = document.getElementById("search-icon");
const searchIconInput = document.getElementById("search-icon-input");
const searchIconCont = document.getElementById("search-icon-results");
searchIconInput.style.width = "0px";
const yourself = document.getElementById("yourself");
const rateHover = document.getElementById("intro-text");
const yourselfMovies = [
  "Goodfellas",
  "The Big Short",
  "Kill Bill Vol.I",
  "Kill Bill Vol.II",
  "Big Daddy",
];
const test = document.getElementById("search-desc");
let movieNumber = 0;
let movieRateText = "rate " + yourselfMovies[movieNumber] + " yourself";
const rate = "rate";
const inputSearch = document.getElementById("search-input");

const labelSearch = document.getElementById("search-label");
const searchlist = document.getElementById("result-container");
let movieClickID = 0;
const randomTitle = document.getElementById("random-movie-title");
const randomContainer = document.querySelector(".random-movie-container");
const randomImgContainer = document.getElementById("random-img-container");
const randomDesc = document.getElementById("random-desc");
let searchResultPage = false;
//search page
let movieTitle = "";
let releaseDate = "";
let movieId = "";
let moviePoster = "";
//favorites page
const favoriteList = document.querySelector(".favorite-movies-container");

if (page === "index.html") {
  rateHover.addEventListener("click", () => {
    rateHover.innerText = "or " + yourselfMovies[movieNumber];
    movieNumber++;
  });
  inputSearch.addEventListener("click", () => {
    inputSearch.style.transform = "scale(1.1)";
  });
}

const menuOpen = () => {
  if (hamburgerIconContainer.bar1.style.backgroundColor == "white") {
    hamburgerLinks.style.animation = "hamburger-links-close 1s forwards";
    hamburgerIconContainer.bar1.style.transform = "rotate(0) translate(0,0)";
    hamburgerIconContainer.bar1.style.backgroundColor = "orangered";
    hamburgerIconContainer.bar2.style.opacity = 1;
    hamburgerIconContainer.bar3.style.backgroundColor = "orangered";
    hamburgerIconContainer.bar3.style.transform = "rotate(0) translate(0, 0)";
  } else {
    hamburgerLinks.style.animation = "hamburger-links-open 0.5s forwards";
    hamburgerIconContainer.bar1.style.transform =
      "rotate(45deg) translate(4px,8.5px)";
    hamburgerIconContainer.bar1.style.backgroundColor = "white";
    hamburgerIconContainer.bar2.style.opacity = 0;
    hamburgerIconContainer.bar3.style.transform =
      "rotate(-45deg) translate(15px, -18px)";
    hamburgerIconContainer.bar3.style.backgroundColor = "white";
  }
};
searchIcon.addEventListener("click", () => {
  if (searchIconInput.style.width == "0px") {
    searchIconInput.style.transition = "0s";
    searchIconInput.style.border = "#FF8D22 solid 3px";
    searchIconInput.style.padding = "20px";
    searchIconInput.style.transition = "900ms";
    searchIconInput.style.width = "250px";
  } else {
    searchIconInput.style.width = "0px";
    searchIconInput.style.border = "none";
    searchIconInput.style.padding = "0";
  }

  // searchIconInput.style.backgroundColor = "#F7D21B";
});

// rating

function StarsHover(n, cat) {
  for (i = 0; i <= n; i++) {
    cat.glowingStars[i].style.opacity = 1;
    cat.displayStars[i].style.opacity = 0;
  }
  for (i = 4; i >= n; i--) {
    cat.glowingStars[i].style.opacity = 0;
    cat.displayStars[i].style.opacity = 1;
  }
  if (n == 4) {
    cat.displayStars[4].style.opacity = 0;
    cat.glowingStars[4].style.opacity = 1;
    cat.glowingStars[5].style.opacity = 1;
    cat.displayStars[5].style.opacity = 0;
  }
}

document.querySelectorAll(".acting-yellow-stars *").forEach((star) =>
  star.addEventListener("click", (event) => {
    for (i = 0; i <= 4; i++) {
      if (actingRating.glowingStars[i].style.opacity === 1) {
        actingRating.glowingStars[i].style.opacity = 1;
        actingRating.rating++;
      } else {
        actingRating.displayStars[i].style.opacity = 0;
      }
    }
  })
);

function checkRating(category) {
  for (i = 0; i < 5; i++) {
    category.glowingStars[i];
  }
}

function submitSearchIcon() {
  const IconInputtext = searchIconInput.value.trim();
  if (IconInputtext.length > 0) {
    searchMovieIcon(IconInputtext);
    searchIconCont.style.display = "block";
  } else {
    searchIconCont.style.display = "none";
  }
}
// api
async function searchMovie(searchTitle) {
  // movie API
  const movie_URL = ` https://api.themoviedb.org/3/search/movie?api_key=1deb0326fc3b1f89371e34530d9740a3&query= ${searchTitle}`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  displayMovieList(data);
}
async function searchMovieIcon(searchTitle) {
  // movie API
  const movie_URL = ` https://api.themoviedb.org/3/search/movie?api_key=1deb0326fc3b1f89371e34530d9740a3&query= ${searchTitle}`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  IconDisplayMovies(data);
}
function submitSearch() {
  searchMovie(inputSearch.value);
}

function findMovies() {
  let searchTerm = inputSearch.value.trim();
  if (searchTerm.length > 0) {
    searchMovie(searchTerm);
    searchlist.style.display = "flex";
  } else {
    searchlist.style.display = "none";
  }
}
function IconDisplayMovies(movies) {
  searchIconCont.innerHTML = "";
  for (i = 0; i < 4; i++) {
    getGenresSearch(movies.results[i]);
    let movieListItem = document.createElement("div");
    movieListItem.className = "MovieSearchItem";
    if (movies.results[i].title) {
      movieListItem.innerHTML = `
      <div class = "icons-thumbnail">
      <img src = https://image.tmdb.org/t/p/original/${
        movies.results[i].poster_path
      } onerror="this.src='/img/no-poster.svg';">
  </div>
  <div class="search-info-icon">

  <h1 class="icon-search-title">${movies.results[i].title}</h1>
  <p class="icon-search-list-genres"><span>Genres:</span>${getGenresSearch(
    movies.results[i]
  )} </p>
  <h2 class="icon-desc">Description</h1>
  <p class="icon-search-list-desc"> ${movies.results[i].overview}</p>
  <p class="icon-search-release"><span>release year:</span> ${movies.results[
    i
  ].release_date.substr(0, 4)}</p>
  </div>`;
      searchIconCont.appendChild(movieListItem);
      let movieId = movies.results[i].id;
      console.log(movies.results[i]);
      movieListItem.addEventListener("click", function () {
        alert(movieId);
        sessionStorage.setItem("movieId", movieId);
        window.location.href = "search.html";
      });
    }
  }
}
function getGenresSearch(movie) {
  // console.log(movie);
  // console.log(movie.genre_ids.length);

  let genres = "";

  for (let i = 0; i < movie.genre_ids.length; i++) {
    switch (movie.genre_ids[i]) {
      case 16:
        genres += " Animation";
        break;
      case 28:
        genres += " Action";
        break;
      case 12:
        genres += " Adventure";
        break;
      case 35:
        genres += " Comedy";
        break;
      case 80:
        genres += " Crime";
        break;
      case 99:
        genres += " Documentary";
        break;
      case 18:
        genres += " Drama";
        break;
      case 10751:
        genres += " Family";
        break;
      case 14:
        genres += " Fantasy";
        break;
      case 36:
        genres += " History";
        break;
      case 27:
        genres += " Horror";
        break;
      case 10402:
        genres += " Music";
        break;
      case 9648:
        genres += " Mystery";
        break;
      case 10749:
        genres += " Romance";
        break;
      case 878:
        genres += " Science Fiction";
        break;
      case 10770:
        genres += " TV Movie";
        break;
      case 53:
        genres += " Thriller";
        break;
      case 10752:
        genres += " War";
        break;
      case 37:
        genres += " Western";
        break;
    }
  }
  console.log(genres);
  return genres;
}
function displayMovieList(movies) {
  searchlist.innerHTML = "";
  for (let idx = 0; idx < 4; idx++) {
    let movieListItem = document.createElement("div");
    movieListItem.className = "movieListItem";
    if (movies.results[idx].title)
      movieListItem.innerHTML = `
            <div class = "search-item-thumbnail">
            <img src = https://image.tmdb.org/t/p/original/${
              movies.results[idx].poster_path
            }  alt="/img/no-poster.svg">
        </div>
    <div class="search-info-intropage">
    
        <h1 class="search-title">${movies.results[idx].title}</h1>
        <p class="search-list-genres"> Genres: ${movies.results[idx].title} </p>
        <p class="search-release">release year: ${movies.results[
          idx
        ].release_date.substr(0, 4)}</p>
    </div>`;
    searchlist.appendChild(movieListItem);
    movieListItem.addEventListener("click", function () {
      let movieId = movies.results[idx].id;
      sessionStorage.setItem("movieId", movieId);
      window.location.href = "search.html";
    });
  }
}

// random movie section
async function descAPI(title) {
  console.log(title);
  const dataTitle_raw = title;
  const dataTitle = dataTitle_raw.replace(" ", "_");
  const movie_URL = `https://omdbapi.com/?t=${dataTitle}&apikey=fc1fef96`;
  const response = await fetch(movie_URL);
  const data = await response.json();
}
function movieDetails() {
  movies.results[idx];
}
async function randomMovieApi(id) {
  const movie_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=1deb0326fc3b1f89371e34530d9740a3&language=en-US`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  randomMovie(data);
  descAPI(data.title);
}

function generateMovie() {
  const movieID = Math.floor(Math.random() * 2000) + 500;
  randomMovieApi(movieID);
}
function randomMovie(movie) {
  console.log(movie);
  if (movie.adult == true || (movie.adult == false && movie.poster_path)) {
    randomTitle.innerText = movie.title;
    randomImgContainer.innerHTML = `<img id="random-img" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt=""></img>`;
    randomDesc.style.display = "block";
  } else {
    generateMovie(movie);
  }
}

// watched movie section
if (page === "watched.html") {
  collectWatchedMovies();
}
function collectWatchedMovies() {
  for (let i = 0, len = localStorage.length; i < len; ++i) {
    const movieId = localStorage.key(i);
    ratedMovies(movieId);
  }
}

async function ratedMovies(id) {
  const movie_URL = `https://api.themoviedb.org/3/movie/${id}
    ?api_key=1deb0326fc3b1f89371e34530d9740a3&language=en-US`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  DisplayWatchedMovie(data);
}
function DisplayWatchedMovie(movie) {
  console.log(movie);
  let FavoriteListItem = document.createElement("div");
  FavoriteListItem.className = "FavoriteListItem";
  FavoriteListItem.innerHTML = `
     <div class="search-info">
    <h1 class="favorites-title">${movie.original_title}</h1>
    <p class="favorites-desc">${movie.overview}</p>
    <div class="bottom-div-favorites">
    <div class=""genres-release">
    <h3><h3>
    <h3>Release Date: ${movie.release_date.substr(0, 4)}<h3>
    </div>
    </div>
     </div>
     <div class = "favorite-poster">
     <img src = https://image.tmdb.org/t/p/original/${
       movie.poster_path
     } alt="/img/no-poster.svg">
  </div>`;
  document
    .querySelector(".watched-movies-container")
    .appendChild(FavoriteListItem);
}
