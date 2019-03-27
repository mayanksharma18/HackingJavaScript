//Check with subtracting -2 to achieve base conditions using Recursions
function prime(n){
    if(n==0){
        return "prime";
      }
      else if(n==1){
        return "not prime"
      }
      return prime(n-2);
    }
    prime(n);

    