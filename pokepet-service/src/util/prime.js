const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkRandomPrime = (min, max) => {
  const randomNumber = getRandomNumber(min, max);
  console.log(`Generated random number: ${randomNumber}`);
  return isPrime(randomNumber);
};

module.exports = { checkRandomPrime };
