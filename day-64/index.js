const squaresContainer= document.querySelector('.squares-container');
const scores= document.querySelector('.score');
const squares = ["", "", "", "", "","","","",""];
let currentValue= "X"; // this will represent the X and O div to be toggled.
// we'll make this value the name of their respective classes

console.log(scores.className, squaresContainer.className);

function formBoard(){
squares.forEach((square, i)=>{

const singleSquare= document.createElement('div');
console.log(singleSquare);
singleSquare.id= i;
singleSquare.classList.add('single-square');
singleSquare.addEventListener('click', addState)
console.log(singleSquare.className);
squaresContainer.append(singleSquare);

})
}

function addState(e){
console.log("i've been clicked adding state...");
displayValue= document.createElement('div');
displayValue.classList.add(currentValue)// here's where the magic happens 
e.target.append(displayValue)
e.target.removeEventListener('click', addState)
checkWin()
currentValue = (currentValue =="X")? "O" :"X";//check first is it X ? if so toggle O else vice versa
}

formBoard()

function checkWin(){ 
 const squaresNodeList = document.querySelectorAll('.single-square');
 const winningCombos= [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],

];
let gameOver = false;
  for (let i= 0; i<= winningCombos.length-1; ++i) {
    const singleCombo= winningCombos[i];
    console.log(currentValue)
    if(singleCombo.every(val => squaresNodeList[val].children[0]?.className === currentValue)) {
      console.log (`${currentValue} wins!`);
      scores.textContent+= `${currentValue} wins!!`;
      gameOver = true;
      break;
    }
  }
  if (!gameOver && Array.from(squaresNodeList).every(square => square.children[0])) {
    console.log("It's a draw!");
    scores.textContent += "It's a draw!";
    gameOver = true;
  }
  if (gameOver) {
    squaresNodeList.forEach(square => {
      square.removeEventListener('click', addState);
    });
  }
}

  






//console.log(squaresNodeList[0].children[0].className) // this will return x or 0 

