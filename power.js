//power of a number using recursion

//Direct Recursion
function power(x,y){
    if(y==1){
      return x;
    }
return x*power(x,y-1)

}
console.log(power(4,4))