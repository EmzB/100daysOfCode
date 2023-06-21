const beeThrice= (b) => b*3
const beeSquared= (b) => b*b;

const compose = (...functions) => (b)=>
functions.reduceRight((acc, func) => func(acc), b);

const combine = compose(beeThrice, beeSquared);
const final = combine(5);
console.log (final)
