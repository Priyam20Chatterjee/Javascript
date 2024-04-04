let chatterjee={
    name:"Priyam Chatterjee",
    university:"Jain University",
    year:"2nd year",
    semester:"4th"
}

for (const key in chatterjee) {
    const element = chatterjee[key];
    console.log(key,element);
}

for (const x of "2nd year") {
    console.log(x);
}