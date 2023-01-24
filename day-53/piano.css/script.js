window.addEventListener("load", () => {
var pianoKeys= document.querySelector('.keys') 
pianoKeys.forEach(addEventListener('click', (e)=>{
const audio= document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
audio.play()
}))



});
