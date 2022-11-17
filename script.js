const yourself = document.getElementById("yourself");
const rateHover = document.getElementById("intro-text");
const yourselfMovies = ["Goodfellas","The Big Short"];
let movieNumber=0;
let movieRateText = "rate "+yourselfMovies[movieNumber]+" yourself";
let rate = "rate";


rateHover.addEventListener("mouseover", () => {  
    rateHover.style.color="#FE4500";
    // if(movieNumber<yourselfMovies){
        if(yourselfMovies.length>movieNumber){
            if(movieNumber==0){
                rateHover.innerText ="like " + yourselfMovies[movieNumber]; 
            }
            // }else{
            //     if(movieNumber<=yourselfMovies){
                 else{
                    rateHover.innerText ="or " + yourselfMovies[movieNumber]; 
                 } 
        }
        
        //     }
        // }
         
    // }

    console.log(movieNumber);
    movieNumber++
});
rateHover.addEventListener("click", () => {
    rateHover.innerText ="or " + yourselfMovies[movieNumber];
    movieNumber++
});

    

