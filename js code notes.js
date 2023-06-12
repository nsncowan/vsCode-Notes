//              DOM STUFF 

//.hidden - hides elements. Set to 'true' to hide, 'false' to un-hide.
  document.getElementById('idName').hidden = true;

// removeChild() - removes a specified child node from a parent node. Example below: we remove ice cream from the grocery list.
  const groceryList = document.getElementById('groceryList');
  const iceCream = document.getElementById('iceCream');

  groceryList.removeChild(iceCream);

// Creating Elements and Adding them to the DOM
  const h1New = document.createElement("h1");
  h1New.append("Webpage Recreation Practice");
  document.body.append(h1New);

  const pNew = document.createElement("p");
  pNew.append("The HTML of this webpage was created with JavaScript.");
  h1New.after(pNew);

  const imgNew = document.createElement("img");
  imgNew.setAttribute("src","https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  imgNew.setAttribute("alt","This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  imgNew.setAttribute("style", "width:50%");
  pNew.after(imgNew);

//===============================ARRAYS 
// get length of array
  const numbers = [1, 2, 3, 4];
  numbers.length // 4

// Accessing an array element
  const myArray = [100, 200, 300];
  console.log(myArray[0]); // 100
  console.log(myArray[1]); // 200
  console.log(myArray[2]); // 300

// Array.prototype.concat() 
// Array.prototype.push()
// Array.prototype.unshift()
// Array.prototype.shift()
// Array.prototype.pop()
// Array.prototype.join()
// Array.prototype.slice()
// Array.prototype.filter()




//================================LOOPING
// For Loops
// if we want to stop the loop, we can't use 
Array.prototype.forEach()
//Looping through every element in an array is a requirement of 
Array.prototype.forEach()


// Array Mapping

const array = [0,1,2,3,4,5];
const doubledArray = array.map(function(element) {
  return element * 2;
});
doubledArray;
// returns [1, 2, 4, 6, 8, 10]

// Arguments Object (in lesson 'for Loops with Text Analyzer')


//              Regular Expressions (Regex)

















