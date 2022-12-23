const startButton = document.querySelector(".start_button");
startButton.addEventListener("click", function(){
    console.log("click")
    decreaseCounter()
}); 
function decreaseCounter() {
    //for (let i = 120; i > 0; i--){
    setInterval(() => {
     setTimeout(() => {
    console.log("Delayed for 1 second.");
    const counter = document.querySelector(".counter"); 
   let value = counter.innerText;
   value--;
   counter.innerText = value;
    }, "1000")
   }, "1000")  
    //}
   
}

