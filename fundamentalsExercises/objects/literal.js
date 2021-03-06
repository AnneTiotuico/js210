/*
Identify the bug in the following code. Don't run the code until after you've tried to answer.
*/

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a]; // The a needs to be in string form since it is not a number
             // this will look for a variable `a` in the global scope
myObject.a;

/* LS Solution:
The expression myObject[a] raises a ReferenceError.

Discussion
To access the value of a property using bracket notation (e.g., object[someKey]), the operand inside the brackets that references the property name (key) must be a string value. If the operand is a number, JavaScript converts it to a string using the Number.prototype.toString() method. If the operand is a variable, JavaScript looks up the value (converting it to a string if necessary), then uses it as a key to get the corresponding property value. The expression myObject[a] raises a ReferenceError because JavaScript cannot find the value of the variable a, since it has not been declared.

*/