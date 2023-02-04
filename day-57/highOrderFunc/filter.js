let arrayB= ["Rih", "Yonce", "Doja", "Nicki", "Ari", "Meg"]
let targetL= "Doja"
const isPresent = arrayB.filter( 
    (name) => {
        return name.match(/d|o|j|a/)
    })

    console.log(`Names matching ${targetL} are ${isPresent}`)