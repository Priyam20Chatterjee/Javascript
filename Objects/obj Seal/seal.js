const user1 = {
    firstname: "Priyam",
    secondname: "Chatterjee",
    age: 19,
    address: {
        city: "Banglore",
        area: "Kanakpura",
        pincode: 546743,
        state: "karnataka",
        country: "India",
    },
    education: {
        school: "Delhi Public School",
        college: "Jain University",
    }
} 

const user2 = {
    firstname: "Arman",
    secondname: "Panda",
    age: 19,
    address: {
        city: "Banglore",
        area: "Kanakpura",
        pincode: 546743,
        state: "karnataka",
        country: "India",
    },
    education: {
        school: "Kendra Vidyalaya",
        college: "Jain University",
    }
}

console.log(user1)
console.log(user2)

Object.freeze(user1);

user1.firstname= "Aasha" //on freeze this is not acceptable
console.log(user1)

console.log(user1.address.area)

console.log("Badhan er ma Priyam er kole") 