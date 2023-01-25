window.addEventListener("load", () => {//init JS after all content loads on the DOM
console.log("ready when you are!")
let pianoKeys= document.querySelector('.keys') // selecting all piano keys
pianoKeys.forEach(
    addEventListener('click', (e) =>{// looping through each key and adding EventListener
        
        /* checking for the audio that matches the data-key of selected key*/
    const audio= document.querySelector (`audio[data-key="${e.target.dataset.key}"]`)

    audio.play();
    audio.currentTime=0; // audio playback on multiple clicks
})

)



});
