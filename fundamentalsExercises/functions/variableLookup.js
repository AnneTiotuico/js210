/*
What will the following code log to the console and why?
Don't run the code until after you have tried to answer.
*/

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/*
This will log 'This is global' because myVar is in the global scope,
which means someFunction() has access to its value.

LS Solution:
When console.log tries to log the value of myVar, JavaScript first attempts to find a variable with that name in the current scope (i.e., the local scope of someFunction). Since myVar does not exist in this scope, JavaScript then starts looking for myVar in the next outer scope, which happens to be the global scope in this case. Here, JavaScript finds the global myVar and logs its value, "This is global".

When a variable is referenced, JavaScript will first look for a variable with the same name in the current scope, then keep moving up through subsequent outer scopes until the variable is found. If JavaScript reaches the outermost (global) scope without finding the variable, a ReferenceError will be raised in most situations, but this is not always the case, as you will see in the next exercise.
*/