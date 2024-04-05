//higher order function

function a(b) {
    console.dir(b);
    b()
}

// Call back function
a(function() {
    console.log("Hi, my name is Priyam Chatterjee")
})