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
let searchTerm = "";
// const bigContainer=document.getElementById("big-desc-container");
// const observer = new IntersectionObserver((entries)=>{
//             bigContainer.classList.add("show");
//     })
const viewportHeight = document.documentElement.clientHeight;
const viewportWidth = document.documentElement.clientWidth;     

let path = window.location.pathname;
let page = path.split("/").pop();

const actingRating = {
    displayStars:[document.getElementById("actingstar1"),document.getElementById("actingstar2"),document.getElementById("actingstar3"),document.getElementById("actingstar4"),document.getElementById("actingstar5")],
    glowingStars:[document.getElementById("actingyellow1"),document.getElementById("actingyellow2"),document.getElementById("actingyellow3"),document.getElementById("actingyellow4"),document.getElementById("actingyellow5")]
};
const storyRating = {
    displayStars:[document.getElementById("storystar1"),document.getElementById("storystar2"),document.getElementById("storystar3"),document.getElementById("storystar4"),document.getElementById("storystar5")],
    glowingStars:[document.getElementById("storyyellow1"),document.getElementById("storyyellow2"),document.getElementById("storyyellow3"),document.getElementById("storyyellow4"),document.getElementById("storyyellow5")]
};
const dialogueRating = {
    displayStars:[document.getElementById("dialoguestar1"),document.getElementById("dialoguestar2"),document.getElementById("dialoguestar3"),document.getElementById("dialoguestar4"),document.getElementById("dialoguestar5")],
    glowingStars:[document.getElementById("dialogueyellow1"),document.getElementById("dialogueyellow2"),document.getElementById("dialogueyellow3"),document.getElementById("dialogueyellow4"),document.getElementById("dialogueyellow5")]
};
const charactersRating = {
    displayStars:[document.getElementById("charactersstar1"),document.getElementById("charactersstar2"),document.getElementById("charactersstar3"),document.getElementById("charactersstar4"),document.getElementById("charactersstar5")],
    glowingStars:[document.getElementById("charactersyellow1"),document.getElementById("charactersyellow2"),document.getElementById("charactersyellow3"),document.getElementById("charactersyellow4"),document.getElementById("charactersyellow5")]
};
const visualsRating = {
    displayStars:[document.getElementById("visualsstar1"),document.getElementById("visualsstar2"),document.getElementById("visualsstar3"),document.getElementById("visualsstar4"),document.getElementById("visualsstar5")],
    glowingStars:[document.getElementById("visualsyellow1"),document.getElementById("visualsyellow2"),document.getElementById("visualsyellow3"),document.getElementById("visualsyellow4"),document.getElementById("visualsyellow5")]
};

if(page=="index.html"){
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
    
}

const menuOpen = ()=>{
   
console.log(page);
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

function submitSearch(){
    let searchTerm= inputSearch.value;
    // document.querySelector("#search-title").innerText=searchTerm;

}


// rating 

function StarsHover(n,cat){
    for(i=0;i<=n;i++){
        cat.glowingStars[i].style.opacity=1;
        cat.displayStars[i].style.opacity=0;
    }
    for(i=4; i>n;i--){
        cat.glowingStars[i].style.opacity=0;
        cat.displayStars[i].style.opacity=1;
    }
}
// function leaveStars(cat){
//     for(i=0; i>=4;i++){
//         cat.glowingStars[i].style.opacity=0;
//         cat.displayStars[i].style.opacity=1;
//     }
// }