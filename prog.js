// Splice
const arrayOfNum = [1, 2, 3, 4, 5, 6, 7];
const applySplice = arrayOfNum.splice(2, 5);

const arrayOfNum1 = [1, 2, 3, 4, 5, 6, 7];
const applySplice1 = arrayOfNum1.splice(1, 0, 55, "hello");

//Slice
const arrayOfNum2 = [1, 2, 3, 4, 5, 6, 7];
const applySlice = arrayOfNum2.slice(0, 4);

console.log(arrayOfNum2);
console.log(applySlice);
