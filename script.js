var hitVal =0;
function getNewHit(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitVal;
}

function myBubble(){
    var clutter ="";

    for(var i =1;i<=169;i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
function timerValue(){
    
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
            clearInterval(timerint);
        }
        
    },1000)
}
var score =0;
function increasedScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(event){
    var bubbleClicked = Number(event.target.textContent);
    if(bubbleClicked === hitVal){
        increasedScore();
        myBubble();
        getNewHit();
    }
})
timerValue();
myBubble();
getNewHit();