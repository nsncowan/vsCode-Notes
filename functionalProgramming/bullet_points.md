

## 5. Immutability
- Immutability is a fundamental concept in functional programming.
- Immutability means that values in variables, objects, and arrays cannot be changed.
- In functional programming, new variables, objects, or arrays are created instead of modifying existing ones.
- The use of `let` indicates mutability, while `const` signifies immutability.
- Functional programming prioritizes immutability to enhance code reliability and prevent bugs.
- Using immutability allows developers to communicate intentions clearly and avoid unexpected changes in code.

## 6. Imperative Versus Declarative Programming
- Imperative programming explicitly states all steps to achieve a result, while declarative programming focuses on defining the desired result and letting the program decide how to achieve it.
- Imperative programming provides specific instructions, while declarative programming describes the end goal.
- Declarative programming is commonly used in HTML, where the focus is on the end result rather than individual steps.
- The map() function in JavaScript is an example of declarative programming, allowing the program to handle most of the work.
- Declarative code is considered more reusable, readable, and collaborative compared to imperative code.

## 7. Pure Functions (more detail in separate file)
- Pure functions always return the same output for a given input.
- Pure functions cannot return random or different results with the same input.
- Pure functions always return an output and cannot return nothing.
- Pure functions cannot have side effects and should not alter anything outside the function.
- Pure functions cannot rely on external variables or state.
- Pure functions are easier to test and ensure code quality.
- Pure functions can be analyzed in isolation without considering the rest of the application.
- Pure functions result in fewer bugs and are beneficial in larger codebases.
- Pure functions are important in both functional programming and object-oriented programming approaches.

## 8. First Class Citizens
- Functions being first-class citizens means that they can be treated as values and manipulated like any other data type in JavaScript.
- One important aspect of this is the ability to pass functions as arguments to other functions. This allows for the implementation of callbacks, where a function is passed as an argument to another function and is called at a later time or under specific conditions.
- By using callbacks, we can achieve modular and reusable code. For example, the `printResult` function can be used with different mathematical functions such as `multiply()` or `subtract()`, promoting code reusability and reducing duplication.
- Assigning functions to variables is another feature made possible by functions being first class. This allows us to store functions in variables and use them like any other value. *Function expressions*, where an anonymous function is stored in a variable, provide flexibility and the ability to call the function later.
- Functions can also return other functions, known as higher order functions. This allows for the creation of more complex and specialized functions. The returned function can have access to variables and scope from the outer function, leading to the concept of closures, which will be covered in the next lesson.
- JavaScript's ability to treat functions as first-class citizens is what enables it to be used as both an object-oriented and functional language. It provides the foundation for functional programming techniques and gives JavaScript tremendous power and versatility.

## 9. Closures
- Closures are an important concept in functional programming and coding.
- Closures are created when a function is created in JavaScript.
- A closure is an inner function that has access to variables from an outer function.
- Here's an example: We create a function called `welcome` that takes a salutation as an argument and returns an anonymous inner function that takes a name as an argument.
- The inner function can access both the salutation variable from the outer function and its own variable (name).
- To use the closure, we assign the result of calling `welcome` with a salutation to a variable, such as `heyThere`.
- The `heyThere` variable now represents the inner function of the closure.
- To actually call the inner function and get a result, we add parentheses after the variable (e.g., `heyThere()`).
- The inner function will return a string combining the salutation and the name passed to it.
- We can create multiple closures with different greetings by calling `welcome` with different salutations and assigning them to different variables.
- Closures retain the values of the arguments passed into the outer function even after the outer function has been called.
- Another example of closures is a function called `multiplier` that returns an inner function for multiplying a number by a specific value.
- We can create different closures for multiplying by different values by calling `multiplier` with different arguments and assigning them to variables.
- Closures can be used to create reusable functions that remember the values they were created with.
- In the example of the `howManyEvenNumbers` function, the callback function passed to `forEach` is an example of a closure.
- The callback function has access to the variables declared in the outer function.
- Not all callbacks are closures. If a callback is not defined inside an outer function, it won't have access to the variables of that outer function.
- Closures are a powerful technique in functional programming and can be combined with currying to create reusable and modular code.
- Closures are commonly used for encapsulating private data.
- If closures are still confusing, don't worry. With practice, you'll get more comfortable working with them.

Remember, closures are inner functions that can access variables from outer functions. They are useful for creating reusable functions and can be combined with other techniques like currying. Keep practicing, and you'll become more familiar with closures over time!