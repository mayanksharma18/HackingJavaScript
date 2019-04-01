//Check with subtracting -2 to achieve base conditions using Recursions
function even(n){
    if(n==0){
        return "even";
      }
      else if(n==1){
        return "odd"
      }
      return even(n-2);
    }
    console.log(even(0));

    