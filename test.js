import { TheLargestNumber } from './index.js';

const result = TheLargestNumber(4, '4.5', '5.6');
const areEqual1 = result === "The 3rd number is largest and equal: 5.6";
console.log(areEqual1);

const result2 = TheLargestNumber(7.7, '7.7', '7.6');
console.log(result2);
const areEqual2 = result2 === "All three numbers are equal. And equal: 7.7";
console.log(areEqual2);

const result3 = TheLargestNumber(12, '12', '4.6');
console.log(result3);
const areEqual3 = result3 === "The 1st number and the 2nd number are equal: 12";
console.log(areEqual3);