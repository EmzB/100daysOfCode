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
currentValue = (currentValue =="X")? "O" :"X";//check first is it X ? if so toggle O else vice versa
e.target.removeEventListener('click', addState)

}

function checkWin(){ // remember that our divs are generated from an array so to check for win,
// the condition must satisfy cells that form a winning combo
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

}

formBoard()
