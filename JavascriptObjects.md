# JavaScript Object Methods
- JavaScript objects may have property values that are functions. These are referred to as object methods.
- Methods may be defined using anonymous arrow function expressions, or with shorthand method syntax.
- Object methods are invoked with the syntax: objectName.methodName(arguments).

# Useful built-in object methods:

1. `toString()`: Converts an object to a string representation.
2. `valueOf()`: Returns the primitive value of an object.
3. `hasOwnProperty()`: Checks if an object has a specific property.
4. `Object.keys()`: Returns an array of an object's enumerable property names.
5. `Object.values()`: Returns an array of an object's enumerable property values.
6. `Object.entries()`: Returns an array of an object's enumerable property key-value pairs as arrays.
7. `Object.assign()`: Copies the values of all enumerable properties from 
    one or more source objects to a target object.
8. `Object.freeze()`: Freezes an object, preventing new properties from being added, 
    and existing properties from being modified or removed.
9. `Object.seal()`: Seals an object, preventing new properties from being added 
    and marking all existing properties as non-configurable.
10. `Object.create()`: Creates a new object with the specified prototype object and properties.
11. `Array.prototype.forEach()`: Executes a provided function once for each array element.
12. `Array.prototype.map()`: Creates a new array with the results of calling a 
    provided function on every element in the array.
13. `Array.prototype.filter()`: Creates a new array with all elements that pass a test provided by a function.
14. `Array.prototype.reduce()`: Applies a function against an accumulator and 
    each element in the array (from left to right) to reduce it to a single value.
15. `Array.prototype.includes()`: Determines whether an array includes a certain element.

These are just a few examples of the useful built-in object methods in JavaScript. There are many more methods available, and their usefulness depends on the specific use case and requirements of your code.

```js
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);
console.log(robotKeys);
Output:
[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

const robotEntries = Object.entries(robot);
console.log(robotEntries);
Output:
[ [ 'model', 'SAL-1000' ],
  [ 'mobile', true ],
  [ 'sentient', false ],
  [ 'armor', 'Steel-plated' ],
  [ 'energyLevel', 75 ] ]

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);
Output:
{ laserBlaster: true,
  voiceRecognition: true,
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75 }
```