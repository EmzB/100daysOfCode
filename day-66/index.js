const  svgs= document.querySelectorAll('#cool path');

console.log(svgs);
for (let i=0; i<svgs.length; ++i){
    console.log(svgs[i].getTotalLength());

}