//Write a program to find remainder of two numbers without using modulus (%) operator

function rem(x,y){
   
   if(y<x){
     return y;
   }
    return rem(x,y-x);

}
rem(7,8)
