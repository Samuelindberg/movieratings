let path = window.location.pathname;
let page = path.split("/").pop();
const hamburgerLinks = document.getElementById("hamburger-links");
hamburgerIconContainer = {
  bar1: document.getElementById("bar1"),
  bar2: document.getElementById("bar2"),
  bar3: document.getElementById("bar3"),
  menuOpen: false,
};
const yourself = document.getElementById("yourself");
const rateHover = document.getElementById("intro-text");
const yourselfMovies = [
  "Goodfellas",
  "The Big Short",
  "Kill Bill Vol.I",
  "Kill Bill Vol.II",
  "Big Daddy",
];
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
const actingRating = {
  displayStars: [
    document.getElementById("actingstar1"),
    document.getElementById("actingstar2"),
    document.getElementById("actingstar3"),
    document.getElementById("actingstar4"),
    document.getElementById("actingstar5"),
  ],
  glowingStars: [
    document.getElementById("actingyellow1"),
    document.getElementById("actingyellow2"),
    document.getElementById("actingyellow3"),
    document.getElementById("actingyellow4"),
    document.getElementById("actingyellow5"),
  ],
  rating: 0,
};
const storyRating = {
  displayStars: [
    document.getElementById("storystar1"),
    document.getElementById("storystar2"),
    document.getElementById("storystar3"),
    document.getElementById("storystar4"),
    document.getElementById("storystar5"),
  ],
  glowingStars: [
    document.getElementById("storyyellow1"),
    document.getElementById("storyyellow2"),
    document.getElementById("storyyellow3"),
    document.getElementById("storyyellow4"),
    document.getElementById("storyyellow5"),
  ],
  rating: 0,
};
const dialogueRating = {
  displayStars: [
    document.getElementById("dialoguestar1"),
    document.getElementById("dialoguestar2"),
    document.getElementById("dialoguestar3"),
    document.getElementById("dialoguestar4"),
    document.getElementById("dialoguestar5"),
  ],
  glowingStars: [
    document.getElementById("dialogueyellow1"),
    document.getElementById("dialogueyellow2"),
    document.getElementById("dialogueyellow3"),
    document.getElementById("dialogueyellow4"),
    document.getElementById("dialogueyellow5"),
  ],
  rating: 0,
};
const charactersRating = {
  displayStars: [
    document.getElementById("charactersstar1"),
    document.getElementById("charactersstar2"),
    document.getElementById("charactersstar3"),
    document.getElementById("charactersstar4"),
    document.getElementById("charactersstar5"),
  ],
  glowingStars: [
    document.getElementById("charactersyellow1"),
    document.getElementById("charactersyellow2"),
    document.getElementById("charactersyellow3"),
    document.getElementById("charactersyellow4"),
    document.getElementById("charactersyellow5"),
  ],
  rating: 0,
};
const executionRating = {
  displayStars: [
    document.getElementById("executionstar1"),
    document.getElementById("executionstar2"),
    document.getElementById("executionstar3"),
    document.getElementById("executionstar4"),
    document.getElementById("executionstar5"),
  ],
  glowingStars: [
    document.getElementById("executionyellow1"),
    document.getElementById("executionyellow2"),
    document.getElementById("executionyellow3"),
    document.getElementById("executionyellow4"),
    document.getElementById("executionyellow5"),
  ],
  rating: 0,
};
const visualsRating = {
  displayStars: [
    document.getElementById("visualsstar1"),
    document.getElementById("visualsstar2"),
    document.getElementById("visualsstar3"),
    document.getElementById("visualsstar4"),
    document.getElementById("visualsstar5"),
  ],
  glowingStars: [
    document.getElementById("visualsyellow1"),
    document.getElementById("visualsyellow2"),
    document.getElementById("visualsyellow3"),
    document.getElementById("visualsyellow4"),
    document.getElementById("visualsyellow5"),
  ],
  rating: 0,
};
const searchTitle = element;
if (page == "index.html") {
  //   rateHover.addEventListener("mouseover", () => {
  //     rateHover.style.color = "#FE4500";
  //     if (movieNumber == 0) {
  //       rateHover.style.display = "block";
  //       rateHover.innerText = "like " + yourselfMovies[movieNumber];
  //     } else {
  //       rateHover.innerText = "Even " + yourselfMovies[2];

  //       rateHover.innerText = "or " + yourselfMovies[movieNumber];
  //     }
  //     if (movieNumber >= yourselfMovies.length) {
  //       movieNumber--;
  //     }
  //     console.log(movieNumber);
  //     movieNumber++;
  //   });
  rateHover.addEventListener("click", () => {
    rateHover.innerText = "or " + yourselfMovies[movieNumber];
    movieNumber++;
  });

  inputSearch.addEventListener("click", () => {
    inputSearch.style.transform = "scale(1.1)";
  });
}

const menuOpen = () => {
  console.log(page);
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
// function leaveStars(cat){
//     for(i=0; i>=4;i++){
//         cat.glowingStars[i].style.opacity=0;
//         cat.displayStars[i].style.opacity=1;
//     }
// }

document.querySelectorAll(".acting-yellow-stars *").forEach((star) =>
  star.addEventListener("click", (event) => {
    alert("funkar");
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

// api
async function searchMovie(searchTitle) {
  // movie API
  const movie_URL = ` https://api.themoviedb.org/3/search/movie?api_key=1deb0326fc3b1f89371e34530d9740a3&query= ${searchTitle}`;
  const response = await fetch(movie_URL);
  const data = await response.json();

  displayMovieList(data);
  console.log(data);
}
// async function castMovie(movie_id) {
//   console.log(movie_id);
//   const cast_URL = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=1deb0326fc3b1f89371e34530d9740a3`;
//   const castResponse = await fetch(cast_URL);
//   const castData = await castResponse.json();
//   console.log(castData);
// }
function submitSearch() {
  console.log(inputSearch.value);
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
inputSearch.addEventListener("click", () => {
  inputSearch.style.transform = "translateY(0)";
});

function displayMovieList(movies) {
  searchlist.innerHTML = "";
  for (let idx = 0; idx < 4; idx++) {
    // console.log(movies);
    let movieListItem = document.createElement("div");
    // movieListItem.dataset.id = movies.results[idx].id;
    // console.log(movieListItem);
    // const actors = castMovie(movies.results[idx].id);
    // console.log(actors);
    movieListItem.className = "movieListItem";
    movieListItem.innerHTML = `
            <div class = "search-item-thumbnail">
            <img src = https://image.tmdb.org/t/p/original/${movies.results[idx].poster_path}>
        </div>
    <div class="search-info">
    
        <h1 class="search-title">${movies.results[idx].title}</h1>
        <p class="search-actors"> Actors:  </p>
        <p class="search-release">release year:${movies.results[idx].release_date}</p>
    </div>`;
    // console.log(movies.results[idx].id);
    searchlist.appendChild(movieListItem);
    // movieListItem.forEach((movie) => {
    //   movie.results[idx].addEventListener("click", () => {
    //     movieDetails(movie.results[idx].id);
    //   });
    // });
    movieListItem.addEventListener("click", () => {
      // console.log(movies.results[idx]);
      searchMovie(movies.results[idx].id);
    });
  }
}

// random movie section

function movieDetails() {
  movies.results[idx];
}
async function randomMovieApi(id) {
  const movie_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=1deb0326fc3b1f89371e34530d9740a3&language=en-US`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  // console.log(data.success);
  randomMovie(data);
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
