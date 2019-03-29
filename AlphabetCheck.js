//function to check whether given character is an alphabet or not
function check(n){   
    var a=(+n);   //If unary operator operates on a string then we get NaN.
        if(isNaN(a)){          //Checking if a is NaN
            console.log("This is a alphabet")
        }
        else{
            console.log("Is a number")
        }
        
        }
        check(12)
        check("a");