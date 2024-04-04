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

//Dublicating by taking details of key:value pair from user1 to user2 and change the value with respective keys.

const user2 = user1

// console.log(user2)

user2.secondname = 'khan' 
user2.firstname = 'Zaira'
user2.age = 30

console.log(user1)
console.log(user2)