function add(a, b) {
  let sum = a + b;
  console.log(sum);
}

add(2, 5);

// Multiplication function
function multiplication(a, b) {
  let multi = a * b;
  console.log(multi);
}

multiplication(12, 13);

// Function which will return eligible or not based on age
function isEligible(age) {
  if (age >= 18) {
    console.log("Eligible");
  } else if (age < 1) {
    console.log("Invalid age");
  } else {
    console.log("Not Eligible");
  }
}

isEligible(20);

// Even or odd
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

evenOrOdd(5);
