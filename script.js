let array = [{
    name:"Sundar",
    area:"Chennai"
},
{
    name:"Lakshman",
    area:"Bangalore"
}];
let obj = {
    name:"Sundar",
    area:"Chennai",
    age: 24,
    degree:"BE"
}
//FOR
for(let i=0;i<array.length;i++){
    console.log(array[i]);
    console.log(array[i].name)
}
// FOR OF
for (let a in obj){
    console.log(a);
}
//FOR OF
for (element of array) {
    console.log(element);
    console.log(element.name)
}
//FOR EACH
array.forEach(myFunction);
function myFunction(item) {

    console.log(item);
}