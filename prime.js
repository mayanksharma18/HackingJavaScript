
//Check number is prime or not
//try find a whole number nearly greater than the square root of give input.
// p is square root(n).Check whether n is divisible by any number less than p. 
function prime(n){
    var p=Math.floor((Math.sqrt(n)));
          console.log(p)
          if(n==0||n==1||n==2||n==3){
            return "Prime"
          }
      for(i=2;i<=p;i++){
        if(n%i==0){
          return console.log("Number is not prime")
        }
      }
      return console.log("Number is prime")
        }
    prime(71)