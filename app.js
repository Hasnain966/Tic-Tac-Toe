let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;
boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", () => {
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn
            checkWin()
            checkDraw()
            changeTurn()
        }
    })
})


function changeTurn() {
    if(turn === 'X'){
        turn = 'O'
        document.querySelector('.bg').style.left = '85px'
    }else{
        turn = 'X'
        document.querySelector('.bg').style.left = '0'
    }
}
function checkDraw() {
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e => {
            if(e.innerHTML === '') isDraw = false;
        })

        if(isDraw){
            isGameOver = true
            document.querySelector('#results').innerHTML = 'Match is Draw';
            document.querySelector('#play-again').style.display = 'inline';
        };
    };
};
function checkWin() {
    let winConditions = [
        [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
        for(let i = 0; i < winConditions.length; i++){
            let p1 = boxes[winConditions[i][0]].innerHTML;
            let p2 = boxes[winConditions[i][1]].innerHTML;
            let p3 = boxes[winConditions[i][2]].innerHTML;
        

        if(p1 != '' && p1 ===  p2 && p1 === p3){
            isGameOver = true
            document.querySelector("#results").innerHTML = turn + ' Win'
            document.querySelector('#play-again').style.display = 'inline'

            for(let j = 0; j < 3; j++){
                boxes[winConditions[i][j]].style.background = '#08D9D6';
                boxes[winConditions[i][j]].style.color = '#000';
            }
        }
    }
}

document.querySelector('#play-again').addEventListener('click', () => {
    location.reload()
})