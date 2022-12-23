## ALTERNATE SOLUTIONS

### Solution 1
```js
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);
```

### Code Explanation
- Create a new variable to keep flattened arrays.
- Loop over the elements of the array.
- If the element is an array then call the function again with to flatten the subarray and push the contents of the flattened subarray into the flattened array.
- If the element is not an array, then push that non-array element to the flattened array.
- Return the flattened array.

### REFERENCE LINKS
- [`Array.push()`](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-push-javascript-push-explained-with-examples/14298)


### Solution 2
```js
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

### Code Explanation
- Use spread operator to concatenate each element of `arr` with an empty array.
- Use `Array.some()` method to find out if the new array contains an array still.
- If it does, use recursion to call `steamrollArray` again, passing in the new array to repeat the process on the arrays that were deeply nested.
- If it does not, return the flattened array.

### REFERENCE LINKS
- [`Array.some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [`Array.concat`](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-concat-concat-explained-with-examples/14286)
- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Ternary Operator (condition ? a : b)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)


### Solution 3
```js
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
```

### Code Explanation
- First we turn the array to a string, which will give us a string of numbers separated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix later in our if statement.
- We replace the double comma with one, then split it back into an array.
- map through the array and fix object values and convert string numbers to regular numbers.


### Solution 4
```js
function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}
```


### Solution 5
```js
function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}
```

