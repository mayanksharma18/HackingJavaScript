//Summing through for Loop
// function ArraySum(n){
// var a=0;
// for(i=0;i<n.length;i++){
// a=a+n[i]
// }
// console.log(a);
// }
// ArraySum([1,2,3,4,5,5]);
//Through While loop
function SumArray(n){
    var b=0;
    var c=n.length-1;
    while(c>=0){
        b+=n[c];
        c--
    }
console.log(b);
}
SumArray([1,2,3,4,5,5]);