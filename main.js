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

    if (gameBoard[i][c] != ' '){
        return;
    }
    gameBoard[i][c] = currentPlayer;
    this.innerText = currentPlayer;

    if(currentPlayer == playerO){
        currentPlayer= playerX;
    }
    else{
        currentPlayer= playerO;
    }
    winner();
}

function winner(){
    //horizontally
    for (let i =0; i <3; i++){
        if(gameBoard[i][0] ==  gameBoard[i][1] &&  gameBoard[i][1] ==  gameBoard[i][2] &&  gameBoard[i][0] != " "){
            for (let c = 0; c < 3; c++){
                let box = document.getElementById(i.toString() + "-" +c.toString())
                box.classList.add("winner");
            }
            gameOver = true
            return
        }
    }
    // vertically
    for (let i =0; i <3; i++){
        if(gameBoard[0][i] ==  gameBoard[1][i] &&  gameBoard[1][i] ==  gameBoard[2][i] &&  gameBoard[0][i] != " "){
            for (let c = 0; c < 3; c++){
                let box = document.getElementById(c.toString() + "-" +i.toString())
                box.classList.add("winner");
            }
            gameOver = true
            return
        }
    }
    // diagonally
    if(gameBoard[0][0] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][2] && gameBoard[0][0] != " " ){
        for (let i = 0; i < 3; i++){
            let box = document.getElementById(i.toString() + "-" +i.toString())
            box.classList.add("winner");
        }
        gameOver = true
        return
       }
// anti diagonal
       if(gameBoard[0][2] == gameBoard[1][1] && gameBoard[1][1] == gameBoard[2][0] && gameBoard[0][2] != " " ){
        for (let i = 0; i < 3; i++){
            let box = document.getElementById("0-2")
            box.classList.add("winner");

            box = document.getElementById("1-1")
            box.classList.add("winner");

            box = document.getElementById("2-0")
            box.classList.add("winner");
        }
        gameOver = true
        return
       }
    }