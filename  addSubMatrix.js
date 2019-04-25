//Write a program to add and subtract of given (NXN) Matrices

//Function to check if given input matrices are of same rows and column
var a=[[45,7,9],[1,4]]
var b=[[5,6],[02,1]]

function checkMatrices(a,b){
  if(a.length==b.length){
for(i=0;i<a.length;i++){
    if(a[i].length!=b[i].length)
    {console.log("matrices cant be added");return false;}}
    console.log("matrices can be added")
    return true
  }
  else{
      console.log("matrices cant be added")
      return false
  }
  }
function addMat(a,b){
  if(checkMatrices(a,b)==false){
    return false
       }
  let c=[].concat(a)   //cloning schema of a to c with values
   for(i=0;i<a.length;i++){
    for(j=0;j<a[i].length;j++){
     c[i][j]=a[i][j]+b[i][j];
    }
   }
 
return c;
}

console.log(addMat(a,b))




















