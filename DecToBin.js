//Convert any Decimal number to binary through recurssion

function decimal(n){
    var y=(n%2).toString();
    if(n==1){
      return 1;
    }
    return decimal(parseInt(n/2))+y;
    
    }
    console.log(decimal(129))