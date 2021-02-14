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
