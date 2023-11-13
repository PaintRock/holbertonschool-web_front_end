function countPrimeNumbers() {
    const isPrime = (num) => {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
  
    const startTime = performance.now();
  
    let count = 0;
    for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    const endTime = performance.now();
    const executionTime = endTime - startTime;
  
    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
    return count;
  }
  
  // Call the function
  const primeCount = countPrimeNumbers();
  console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
  