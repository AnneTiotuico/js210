/*
The following program is expected to log a multiplication table for the numbers from 1 to 10 to the console. Read through the code shown below. Will it produce the expected result? Why or why not?
*/

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

/*
No, because the outer for loop with i is going to only go up to 9 rows rather than 10 since we used < instead of <=. We will end up with 10 columns, but only 9 rows.


LS Solution:
No, the result is not as expected; the code generates the multiplication table for only the numbers from 1 to 9.

Discussion
This is an example of an off-by-one bug. The value of i, which is responsible for the rows of the table, only goes up to 9. Therefore, the entire row for the values of 10 x 1, 10 x 2, ..., 10 x 10 is not logged. To fix this bug, the for loop should be written as shown below.


for (let i = 1; i <= 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}
*/