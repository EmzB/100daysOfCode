const secHand= document.querySelector('.sec-hand')
const minHand= document.querySelector('.min-hand')
const hrHand= document.querySelector('.hr-hand')
//setInterval(moveClock, 1000)

function moveClock(){
var date = new Date()
console.log(date)

seconds= date.getSeconds()/60;
console.log (seconds)
minutes= (seconds+ date.getMinutes())/60;
console.log (minutes)
hours=  (minutes+ date.getHours())/12;
console.log (hours)


secHand.style.setProperty('--rotationValue', seconds*360)
minHand.style.setProperty('--rotationValue', minutes*360 )
hrHand.style.setProperty('--rotationValue', hours*360 )
}
moveClock();