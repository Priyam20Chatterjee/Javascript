const arr1 = [3,5,6,7]
const obj1 = {...arr1}
console.log(obj1)

function sum(v1,v2,v3,v4){
    return v1+v2+v3+v4
}

console.log(sum(...arr1))