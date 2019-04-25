//Write a program for swapping of two arrays

//Swapping of Arrays of any length
function swap(x,y){
    if(x.length<y.length){
      n=x.length;
    }
    else{
      n=y.length;
    }
    for(i=0;i<n;i++){
      z=x[i]
      x[i]=y[i]
      y[i]=z
    }
  console.log(x,y)
  }
  swap([1,45,7,9,6],[0,0,0,0,0,0,0,0]);
  