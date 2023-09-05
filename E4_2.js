const name = "name";
const obj = {
  Age : 26,
  name : "Egor",
  city : "Moscow"  
};

function find (str, object) {
  if (str in object){
    console.log("+");
    return true; 
  } else {
  console.log("-");
   return false;
     }
}
find(name,obj);