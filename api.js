// const movie_api_url = "https://www.omdbapi.com/?s=%22godfather%22&APIKEY=d442cd11";
// async function get() {
//   const response = await fetch(movie_api_url);
//   const data = await response.json();
//   console.log(data.latitude);
// }

// getMovie();


 async function searchMovie(searchTitle){
    const movie_URL = "https://www.omdbapi.com/?t="+searchTitle+"&APIKEY=d442cd11";
   const response = await fetch(movie_URL);
   const data = await response.json();
   console.log(data);
   document.getElementById("search-title").innerHTML=data.Title;
   document.getElementById("search-desc").innerHTML=data.Plot;
}
let searchTitle = window.prompt("search movie");

searchMovie(searchTitle);