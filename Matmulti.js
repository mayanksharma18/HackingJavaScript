A=[[1,2,3],[4,5,6],[7,8,9]]
B=[[5,6,7],[9,8,9],[5,6,2]]

function Multi(){
if(A[0].length==B.length){
C=[];
for(i=0;i<A.length;i++){
    C[i]=[];
    for(j=0;j<B[0].length;j++){
        add=0;
        for(k=0;k<A[0].length;k++){
            add+=A[i][k]*B[k][j];
        }
        C[i][j]=add;
     }
   }
  }
  return C
}
console.log(Multi(A,B))
