function Prime(n){
    if(n==1||n==2||n==3||n==5||n==7){
    console.log( n+" "+"number is prime")
    }
    else if(n%2==0||n%3==0||n%5==0||n%7==0){
        console.log( n+" "+"number is not prime")
    }
    else{
        console.log( n+" "+"number is prime")
    }
    }
    Prime(77);