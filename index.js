let arr = {
  edad: 20,
  ano: 1967
}


// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

// elValue are the property values
for (let elValue in arr) {
  console.log(arr[elValue])

}
let ape = 'corbaz'
let nom = 'julio'
let obj = {
  ape,
  nom,
  sexo: 'mas'
}

ape = 'guille'
console.log(obj,ape)

let numeros = [1, 3, 5, 7, 9];

for (let i in numeros) {
    console.log(i);     
    // log -> 0, 1, 2, 3, 4 indices
}
let array = [33, 55, 77];
array.test = "Beta";

for (let i in array) {
    console.log(i);     
    // log -> "0", "1", "2", "test"
}

for (let i of array) {
    console.log(i); 
    // log -> "33", "55", "77"
}

const myObject = { name: 'kuworking', description: 'Aprende desarrollo web en kuworking.com' }

for (const property in myObject) {
  if (myObject.hasOwnProperty(property)) {
    console.log(property)
    console.log(myObject.property) // no funciona, porque no tenemos ninguna propiedad de nombre 'property'
    console.log(myObject[property]) // sí funciona
  }
}

/*
name
undefined
"kuworking"
description
undefined
"Aprende desarrollo web en kuworking.com"
*/
