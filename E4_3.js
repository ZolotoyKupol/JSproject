function perObject(){
    const person = {};
    return Object.getPrototypeOf(person);
}
console.log(perObject())