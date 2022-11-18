const yourself = document.getElementById("yourself");
const rateHover = document.getElementById("intro-text");
const yourselfMovies = ["Goodfellas","The Big Short","Kill Bill Vol.I", "Kill Bill Vol.II", "Big Daddy"];
let movieNumber=0;
let movieRateText = "rate "+yourselfMovies[movieNumber]+" yourself";
let rate = "rate";
// const bigContainer=document.getElementById("big-desc-container");
// const observer = new IntersectionObserver((entries)=>{
//             bigContainer.classList.add("show");
//     })
const viewportHeight = document.documentElement.clientHeight;
const viewportWidth = document.documentElement.clientWidth;     



rateHover.addEventListener("mouseover", () => {  
    rateHover.style.color="#FE4500";
    // if(movieNumber<yourselfMovies){
            if(movieNumber==0){
                rateHover.style.display="block";
                rateHover.innerText ="like " + yourselfMovies[movieNumber]; 

            }
            else{
                rateHover.innerText ="Even " + yourselfMovies[2]; 
            
                rateHover.innerText ="or " + yourselfMovies[movieNumber]; 
            }
            if(movieNumber>=yourselfMovies.length){
              movieNumber--
            }
    console.log(movieNumber);
    movieNumber++
});
rateHover.addEventListener("click", () => {
    rateHover.innerText ="or " + yourselfMovies[movieNumber];
    movieNumber++
});
