### sorting arrays
```js
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};
// alternate
let sortByLength = arr => arr.sort((a,b) => a.length - b.length);
```

```js
function sortAnArray (array) {
  return array.sort((a,b) => a - b);
};
```

### remove vowels from an array
```js
const vowels = 'aeiou';
function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}
```

### function to search json objects for matching values
```js
const getCharacters = (obj, key, val) => {
  val = val.toLowerCase();
  return obj.characters.filter(v => (v[key] || '').toLowerCase() == val);
}
```

### return the number of consonents in the string str
```js
const consonantCount = (str) => {
	let count = 0
	for (const c of str) {
		if ("BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".indexOf(c) >= 0) count++
	}
	return count
}
```


##### Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
  - the "Set" constructor is like an array, but it only stores UNIQUE values. 
  - In this problem, pushing s1 + s2 to a Set will cause the operation to ignore repeated values. 
  - The result will be a Set of only the unique letters of the combined strings, which can then be sorted and joined as needed.

  ```js
  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
  ```

  In the given code snippet, `Set` refers to the built-in JavaScript object called Set. 

  A Set is an unordered collection of unique elements in JavaScript. It can store any type of value, whether it's a primitive value or an object reference. In the code snippet, the Set is used to create a unique collection of characters from two input strings `s1` and `s2`.

  Let's break down the code step by step:

  1. `s1 + s2`: This concatenates the two input strings `s1` and `s2` into a single string, combining all the characters from both strings.

  2. `new Set(s1 + s2)`: The concatenated string is then passed as an argument to the `Set` constructor. By using `new Set()`, a new Set object is created, and it automatically eliminates duplicate characters, as Sets only store unique elements.

  3. `[...new Set(s1 + s2)]`: The spread operator (`...`) is used to convert the Set object into an array. This operation creates a new array containing all the unique characters from the concatenated string.

  4. `.sort()`: The `sort()` method is called on the array to sort the characters in ascending order. This is an optional step, and if you remove it, the resulting characters will be in the order they were encountered.

  5. `.join('')`: Finally, the `join()` method is used to join the sorted array elements back into a single string. The empty string `''` is passed as the separator, so the characters are concatenated without any separator between them.

  The result of the code snippet will be a string that contains all the unique characters from `s1` and `s2`, sorted in alphabetical order and concatenated together.

  ```js
  function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }
  ```