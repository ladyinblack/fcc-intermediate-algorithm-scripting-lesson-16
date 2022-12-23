# fcc-intermediate-algorithm-scripting-lesson-16

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-ydc53d)

## PROBLEM EXPLANATION
This problem seems simple but you need tomake sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.

### REFERENCE LINKS
- [Array.isArray()](https://forum.freecodecamp.org/t/how-to-use-javascript-array-isarray-explained-with-examples/14284)

## HINTS
### Hint 1
You need to check if an element is an array or not.

### Hint 2
If you are dealing with an array, then you need flatten it by getting the value inside of the array.  This means if you have `[[4]]` then instead of return `[4]` you need to return `4`.  If you get `[[[4]]]` then the same, you want the `4`.  You can access it with `arr[index1][index2]` to go a level deeper.

### Hint 3
You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed.  Have fun!

