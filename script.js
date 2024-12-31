function restart(){
window.location = "index.html"
}
let gameStatus = true
let currentPlayer = "O"
function cell1(){
    let d = document.getElementById("cell1")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
    if(currentPlayer=="O"){
        d.innerHTML = "O"
        winner()
        currentPlayer = "X"
    }
    else{
        d.innerHTML = "X"
        winner()
        currentPlayer = "O"
    }
}
}
    }
function cell2(){
    let d = document.getElementById("cell2")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function cell3(){
    let d = document.getElementById("cell3")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function cell4(){
    let d = document.getElementById("cell4")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function cell5(){
    let d = document.getElementById("cell5")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function cell6(){
    let d = document.getElementById("cell6")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function cell7(){
    let d = document.getElementById("cell7")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function cell8(){
    let d = document.getElementById("cell8")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function cell9(){
    let d = document.getElementById("cell9")
    if(d.innerHTML!="O" && d.innerHTML!="X"){
    if(gameStatus){
        if(currentPlayer=="O"){
            d.innerHTML = "O"
            winner()
            currentPlayer = "X"
        }
        else{
            d.innerHTML = "X"
            winner()
            currentPlayer = "O"
        }
    }
}
    }
function winner(){
    
    let c1 = document.getElementById("cell1").innerHTML
    let c2 = document.getElementById("cell2").innerHTML
    let c3 = document.getElementById("cell3").innerHTML
    let c4 = document.getElementById("cell4").innerHTML
    let c5 = document.getElementById("cell5").innerHTML
    let c6 = document.getElementById("cell6").innerHTML
    let c7 = document.getElementById("cell7").innerHTML
    let c8 = document.getElementById("cell8").innerHTML
    let c9 = document.getElementById("cell9").innerHTML 
    if((c1==currentPlayer && c2 == currentPlayer && c3==currentPlayer)||
        (c4==currentPlayer && c5 == currentPlayer && c6==currentPlayer)||
        (c7==currentPlayer && c8 == currentPlayer && c9==currentPlayer)||
        (c1==currentPlayer && c4 == currentPlayer && c7==currentPlayer)||
        (c2==currentPlayer && c5 == currentPlayer && c8==currentPlayer)||
        (c3==currentPlayer && c6 == currentPlayer && c9==currentPlayer)||
        (c1==currentPlayer && c5 == currentPlayer && c9==currentPlayer)||
        (c3==currentPlayer && c5 == currentPlayer && c7==currentPlayer)
    ){
        
        let gaveOvermsg = document.getElementById("gameOver")
        document.getElementById("winner").innerHTML = currentPlayer + " is the Winner"
        gaveOvermsg.style.display = "flex"
        gameStatus =false
    }
    if ((c1 === "O" || c1 === "X") && 
    (c2 === "O" || c2 === "X") && 
    (c3 === "O" || c3 === "X") && 
    (c4 === "O" || c4 === "X") && 
    (c5 === "O" || c5 === "X") && 
    (c6 === "O" || c6 === "X") && 
    (c7 === "O" || c7 === "X") && 
    (c8 === "O" || c8 === "X") && 
    (c9 === "O" || c9 === "X")) {
        let gaveOvermsg = document.getElementById("gameOver")
        document.getElementById("winner").innerHTML = "Game Over!!! It's a Draw"
        gaveOvermsg.style.display = "flex"
        gameStatus =false
    }
}
