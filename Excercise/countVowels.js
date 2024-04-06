const str = "I am Priyam Chatterjee a B.Tech Student at Jain University"
const Vowels=['a','e','i','o','u']

function countVowels(data){
    let count = 0;
    data.toLowerCase().split("").forEach((ch)=> {
        Vowels.includes(ch) && count++;
    });
    return count;
}

const numberofVowel = countVowels(str)

console.log(numberofVowel)