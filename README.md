# A simple and easy to use library to add properties to an object with an especific index

Usage:

```
let addProperty = require('add-property-to-object')
let obj = { place: "New World Pizza", location: 200 };
obj = addProperty(obj,{ especialty: "Pizza", dishes: [{ name: "American" }, { name: "Full Meat" }] }, 0);
console.log(obj);
//Obj now =
// {
//     especialty: 'Pizza',
//     dishes: [ { name: 'American' }, { name: 'Full Meat' } ],
//     place: 'New World Pizza',
//     location: 200
// }
```
