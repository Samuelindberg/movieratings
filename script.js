const hamburgerLinks = document.getElementById("hamburger-links");
hamburgerIconContainer = {
    bar1: document.getElementById("bar1"),
    bar2: document.getElementById("bar2"),
    bar3: document.getElementById("bar3"),
    menuOpen:false
};
const yourself = document.getElementById("yourself");
const rateHover = document.getElementById("intro-text");
const yourselfMovies = ["Goodfellas","The Big Short","Kill Bill Vol.I", "Kill Bill Vol.II", "Big Daddy"];
let movieNumber=0;
let movieRateText = "rate "+yourselfMovies[movieNumber]+" yourself";
let rate = "rate";
let inputSearch = document.getElementById("search-input");
let labelSearch = document.getElementById("search-label");
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

inputSearch.addEventListener("click",()=>{
    inputSearch.style.transform="scale(1.1)";
    labelSearch.style.transform="scale(0.9)";
});

const menuOpen = ()=>{
    if(hamburgerIconContainer.bar1.style.backgroundColor=="white"){
        hamburgerLinks.style.animation= "hamburger-links-close 1s forwards";
        hamburgerIconContainer.bar1.style.transform="rotate(0) translate(0,0)";
        hamburgerIconContainer.bar1.style.backgroundColor="orangered";
        hamburgerIconContainer.bar2.style.opacity=1;
        hamburgerIconContainer.bar3.style.backgroundColor="orangered";
        hamburgerIconContainer.bar3.style.transform="rotate(0) translate(0, 0)";
    }else{
        hamburgerLinks.style.animation="hamburger-links-open 0.5s forwards";
        hamburgerIconContainer.bar1.style.transform="rotate(45deg) translate(4px,8.5px)";
        hamburgerIconContainer.bar1.style.backgroundColor="white";
        hamburgerIconContainer.bar2.style.opacity=0;
        hamburgerIconContainer.bar3.style.transform="rotate(-45deg) translate(15px, -18px)";
        hamburgerIconContainer.bar3.style.backgroundColor="white";
    }   

}
