window.addEventListener('load', () => { //init JS after all content loads on the DOM
console.log("ready when you are!")

let pianoKeys= document.querySelector('.keys') // selecting all piano keys
pianoKeys.forEach( addEventListener('click', (e)=> {
let audio= document.querySelector (`audio[data-key="${e.target.dataset.key}"]`)

audio.play()
audio.currentTime=0; // audio playback on multiple clicks

}) )})

window.addEventListener('keydown', (e) => {
//first check if pressed key matches a corresponding data-key if! return
let audio= document.querySelector(`audio[data-key="${e.keyCode}"]`) 
if (!audio) return; 
audio.currentTime=0; 
audio.play()
    
})