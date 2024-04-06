const obj1 = {
    name:'Priyam',
    age:19,
    college:'Jain University'
}

// console.log(obj1. name = 'John')   //Normally, we do like this
// console.log(obj1)

// By spread operator

console.log({...obj1,name : 'John'})