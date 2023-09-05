const person = {
    name: "Egor",
    city: "Moscow",
}
const developer = Object.create(person);
developer.ownCity = "Piter";
developer.ownName = "Max";
function prop(developer){
    for(let key in developer){
        if(developer.hasOwnProperty(key)){
            console.log(key)
        }
    }
}
console.log(developer.ownCity)
console.log(developer.ownName)
prop(developer)