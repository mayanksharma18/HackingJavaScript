// function check(n){
// var a=(+n);

//     if(isNaN(a)){
//         console.log("This is a alphabet")
     
//     }
//     else{
//         console.log("Is a number")
//     }
    
//     }
//     check("9")
//     check("as");
function prime(n){
    if(n==0){
      return "prime";
    }
    else if(n==1){
      return "not prime"
    }
    return prime(n-2);
  }
  prime(10)