let searchId = localStorage.getItem("movieId");
let movieRating = {};
let searchDesc = document.getElementById("search-desc");
let title = document.getElementById("search-title");
let poster = document.getElementById("poster");
let acting = {
  starsDisplayed: 0,
  checked: [
    document.getElementById("acting-ticked1"),
    document.getElementById("acting-ticked2"),
    document.getElementById("acting-ticked3"),
    document.getElementById("acting-ticked4"),
    document.getElementById("acting-ticked5"),
  ],
};
let dialogue = {
  starsDisplayed: 0,
  checked: [
    document.getElementById("dialogue-ticked1"),
    document.getElementById("dialogue-ticked2"),
    document.getElementById("dialogue-ticked3"),
    document.getElementById("dialogue-ticked4"),
    document.getElementById("dialogue-ticked5"),
  ],
};
let visuals = {
  starsDisplayed: 0,
  checked: [
    document.getElementById("visuals-ticked1"),
    document.getElementById("visuals-ticked2"),
    document.getElementById("visuals-ticked3"),
    document.getElementById("visuals-ticked4"),
    document.getElementById("visuals-ticked5"),
  ],
};
let story = {
  starsDisplayed: 0,
  checked: [
    document.getElementById("story-ticked1"),
    document.getElementById("story-ticked2"),
    document.getElementById("story-ticked3"),
    document.getElementById("story-ticked4"),
    document.getElementById("story-ticked5"),
  ],
};
let characters = {
  starsDisplayed: 0,
  checked: [
    document.getElementById("characters-ticked1"),
    document.getElementById("characters-ticked2"),
    document.getElementById("characters-ticked3"),
    document.getElementById("characters-ticked4"),
    document.getElementById("characters-ticked5"),
  ],
};
let execution = {
  starsDisplayed: 0,
  checked: [
    document.getElementById("execution-ticked1"),
    document.getElementById("execution-ticked2"),
    document.getElementById("execution-ticked3"),
    document.getElementById("execution-ticked4"),
    document.getElementById("execution-ticked5"),
  ],
};
async function searchAPI(id) {
  const movie_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=1deb0326fc3b1f89371e34530d9740a3&language=en-US`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  console.log(data);
  title.innerText = data.title;
  poster.innerHTML = `<img src = https://image.tmdb.org/t/p/original/${data.poster_path}>`;
  document.getElementById("releasedate").innerText = data.release_date;
  let dataTitle_raw = data.title;
  let dataTitle = dataTitle_raw.replace(" ", "_");
  descAPI(dataTitle);
}

async function descAPI(title) {
  console.log(title);
  const movie_URL = `https://omdbapi.com/?t=${title}&apikey=fc1fef96`;
  const response = await fetch(movie_URL);
  const data = await response.json();
  searchDesc.innerText = data.Plot;
}
searchAPI(searchId);
function checkIfRated() {
  if (localStorage.getItem(searchId) === null) {
    console.log("movie does not exist");
  } else {
    movieRating = JSON.parse(localStorage.getItem(searchId));
    for (i = 0; i < 5; i++) {
      if (i <= movieRating.acting - 1) {
        acting.checked[i].style.opacity = 1;
      }
      if (i <= movieRating.dialogue - 1) {
        dialogue.checked[i].style.opacity = 1;
      }
      if (i <= movieRating.visuals - 1) {
        visuals.checked[i].style.opacity = 1;
      }
      if (i <= movieRating.story - 1) {
        story.checked[i].style.opacity = 1;
      }
      if (i <= movieRating.characters - 1) {
        characters.checked[i].style.opacity = 1;
      }
      if (i <= movieRating.execution - 1) {
        execution.checked[i].style.opacity = 1;
      }
    }
  }
}

checkIfRated();
function submitRating(criteria, rating, criteriaID) {
  for (i = 0; i < 5; i++) {
    if (i <= rating - 1) {
      criteria.checked[i].style.opacity = 1;
    } else {
      criteria.checked[i].style.opacity = 0;
    }
  }
  switch (criteriaID) {
    case 0:
      movieRating.acting = rating;
      break;
    case 1:
      movieRating.dialogue = rating;
      break;
    case 2:
      movieRating.visuals = rating;
      break;
    case 3:
      movieRating.story = rating;
      break;
    case 4:
      movieRating.characters = rating;
      break;
    case 5:
      movieRating.execution = rating;
      break;
  }
  let localMovierating = JSON.stringify(movieRating);
  localStorage.setItem(searchId, localMovierating);
  console.log(JSON.parse(localStorage.getItem(searchId)));
  console.log(searchId);
}
