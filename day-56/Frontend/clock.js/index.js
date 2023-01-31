const secHand= document.querySelector('.sec-hand')
const minHand= document.querySelector('.min-hand')
const hrHand= document.querySelector('.hr-hand')

var date = new Date()
console.log(date)

seconds= date.getSeconds();
console.log (seconds)
minutes= date.getMinutes();
console.log (minutes)
hours=  date.getHours();
console.log (hours)