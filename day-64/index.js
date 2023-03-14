const squaresContainer= document.querySelector('.squares-container');
const scores= document.querySelector('.score');
const squares = ["", "", "", "", "","","","",""];
let currentValue= "X";

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
e.target.textContent= currentValue;


}

formBoard()
