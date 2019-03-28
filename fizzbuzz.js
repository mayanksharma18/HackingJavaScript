//With While Loop
function fizz(N){
while(N>=1){
if(N%3==0){
    console.log("Fizz");
}
else if(N%5==0){
    console.log("Buzz");
}
N--
}
}
fizz(100)
//With for loop
function Buzz(N){
    for(i=0;i<=N;i++){
        if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
    }
}
Buzz(100)