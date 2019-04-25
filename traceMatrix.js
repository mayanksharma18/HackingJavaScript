//Trace of a Matrix
n=[[1,2,3],[4,5,6],[7,8,9]]
function Trace(n){
    sum=0;
for(i=0;i<n.length;i++){
    sum+=n[i][i]
}
return sum
}
console.log(Trace(n));