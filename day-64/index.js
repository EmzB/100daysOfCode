const squaresContainer= document.querySelector('.squares-container');
const scores= document.querySelector('.score');
const squares = ["", "", "", "", "","","","",""]

console.log(scores.className, squaresContainer.className);

function formBoard(){
squares.forEach((square, i)=>{

const singleSquare= document.createElement('div');
console.log(singleSquare);
singleSquare.id= i;
singleSquare.classList.add('single-square')
console.log(singleSquare.className)
squaresContainer.append(singleSquare)

})
}

formBoard()