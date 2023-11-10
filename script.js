const userInput = document.querySelector(".userInput");
const resetBtn = document.querySelector(".reset");
const countBtn = document.querySelector(".count");

countBtn.addEventListener("click", (e)=>{
   userInput.value++;
})

resetBtn.addEventListener("click" ,(e)=>{
    alert("do you want to reset counter?")
    if(alert){
    userInput.value="";
    }
})
