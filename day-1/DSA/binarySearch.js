function calculate(){
    let arrayAges=
  [20, 30,40,50,60,70,80,90,100]
  let target= 50;
  let start=0
  let end= arrayAges.length-1
  while(start<=end){// as long as values exist
    let midIndex= Math.floor(
      (start+end)/2)   
   if (arrayAges[midIndex]===target){
    document.write("found me");
     return true;
   }
else if (arrayAges[midIndex]<target)
    start= midIndex+1
    else
      end= midIndex-1  
  }
  
document.write
("uh oh item not in Array");
  }

calculate();
