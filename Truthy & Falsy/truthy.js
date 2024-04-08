let a=10,b=10,c=10

if(a==b==c){
    console.log("Hello World")
}
else{
    console.log("Bye Bye")
}

/// this is because in js a==b is true and true is considered as 1, so next step it checks (1==c) i.e, (1==10) which is false, so it comes out of the if loop and the element in else loop gets printed.///