//Check prime
//by definition prime number is greater than 1 and it is completely divisible by itself.
//1 is not a prime either composite
function prime(N){
if(N==0||N==1){
    return N+" "+"Is not Prime"
}
for(i=2;i<N;i++){
   if(N%i==0){
       return (N+" "+"Is not Prime")
   } 
}
return (N+" "+"Is Prime");
}
function print(X){
 for(j=0;j<X;j++){
     console.log(prime(j));
 }    
}
print(100)


    
