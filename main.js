var gameBoard;
var playerO = "O";
var playerX = "X";
var currentPlayer = playerO;
var gameOver = false

window.onload = function(){
    game();
}
function game(){
    gameBoard=[
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' '],
    ]

    for(let i = 0; i<3; i++){
        for(let c =0; c<3 ; c++){
            // creating a div with an id of the loop in string e.g "1-1"
            let box = document.createElement("div");
            box.id = i.toString() + "-" +c.toString();
            box.classList.add("box");

                        // this is same as adding <div id="0-0"></div> to the div with id game-board in html 9 times
            if(i == 0 || i == 1){
                box.classList.add("hr-line-box")
            }
            if(c == 0 || c == 1){
                box.classList.add("vr-line-box")
            }
            box.addEventListener('click',setBox)
            document.getElementById("game-board").append(box)
        }
    }
}

function setBox(){
    if(gameOver){
        return
    }
    // else{
    //     gameOver = true;
    // }

    let coords = this.id.split("-")//i.e e.g "1-1" to ["1","1"]
    let i = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    gameBoard[i][c] = currentPlayer;
    this.innerText = currentPlayer;

    if(currentPlayer == playerO){
        currentPlayer= playerX;
    }
    else{
        currentPlayer= playerO;
    }
}