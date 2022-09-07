function isATheLargest(a, b, c) {
  if (a > b && a > c) {
    return true;
  } else {
    return false;
  }
}

function isBTheLargest(a, b, c) {
  if (b > a && b > c) {
    return true;
  } else {
    return false;
  }
}

function isCTheLargest(a, b, c) {
  if (c > a && c > b) {
    return true;
  } else {
    return false;
  }
}

function isABequal(a, b, c) {
 if (a == b && a !== c) {
  return true;
 } else {
  return false;
 }
}
function isACequal(a, b, c) {
  if (a == c && a !== b) {
    return true;
  } else {
    return false;
  }
}
function isBCequal(a, b, c) {
  if (b == c && b !== a) {
   return true;
  } else {
   return false;
  }
 }
  


export function TheLargestNumber(a1, b1, c1) {
  let a = parseFloat(a1);
  // console.log(a);
  let b = parseFloat(b1);
  // console.log(b);
  let c = parseFloat(c1);
  // console.log(c);
  
  if (isATheLargest(a, b, c)) {
    return "The 1st number is largest and equal: " + a;
  } else if (isBTheLargest(a, b, c)) {
    return "The 2nd number is largest and equal: " + b;
  } else if (isCTheLargest(a, b, c)) {
    return "The 3rd number is largest and equal: " + c;
  } else if (isABequal(a, b, c)) {
    return "The 1st number and the 2nd number are equal: " + b;
  } else if (isACequal(a, b, c)) {
    return "The 1st number and the 3rd number are equal: " + c;
  } else if (isBCequal(a, b, c)) {
    return "The 2nd number and the 3rd number are equal: " + c;
  } else {
    return "All three numbers are equal. And equal: " + a;
  }
}
