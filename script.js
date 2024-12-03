let h1=document.querySelector("h1");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let counter;
start.addEventListener("click",function
    (){
        let count=0;
        counter=setInterval(function()  {h1.textContent=count;
            count++;},
        1000);
    });

    stop.addEventListener("click", function () {
        clearInterval(counter); // Stops the interval
    });