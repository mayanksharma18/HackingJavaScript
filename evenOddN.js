//Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd Numbers.

function print(n){
    for(i=0;i<n;i++){
    if(i%2==0){
        console.log(i+" "+"Number is even");
    }
    else{
        console.log(i+" "+"Number is odd");
    }
    }
    
    }
    print(10)
//checking and printing with recursions
function print(n){
  if(n<0){
      return;
  }
  n--
  if((n+2)%2==0){
      console.log(n+" "+"number is even");
  }
  else{
    console.log(n+" "+"number is odd");  
  }
  return print(n);
}
