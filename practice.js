
var a=[[1,2,3],[4,5,6],[7,8,9]]
var b=[[1,2,30],[4,5,6],[7,8,9]]
var k=[]
 function add(a,b){
if(a.length==b.length && a[0].length==b[0].length){
 console.log("Matrices can be added"); 
for(i=0;i<a.length;i++){
  for(j=0;j<a[i].length;j++){
   c=a[i][j]+b[i][j];
   k[i[j]].push(c)
  }
}
}
else{
 console.log("Matrices cannot be added")
}
console.log(a);
console.log(b);
return k
 }
 add(a,b)