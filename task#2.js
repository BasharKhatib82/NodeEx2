// Bashar Khatib    ID : 066043167
// Tareq Shaltaf    ID : 315483032

'use strict'

/**
 * Function to check if a number is prime.
 * @param {number} number - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Define the range number to check.
const number = 237;

// A loop that goes between the number 2 and the number we defined, excluding it, and prints all the prime numbers.
for (let num = 2; num < number; num++) {
  if (isPrime(num)) {
    console.log(num);
  }
}
