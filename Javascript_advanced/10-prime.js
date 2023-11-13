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
  
    return { count, executionTime };
  }
  
  // Execute countPrimeNumbers 100 times
  function execute100Times() {
    const totalStartTime = performance.now();
  
    for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
    }
  
    const totalEndTime = performance.now();
    const totalExecutionTime = totalEndTime - totalStartTime;
  
    console.log(`Execution time of calculating prime numbers 100 times was ${totalExecutionTime} milliseconds.`);
  }
  
  // Call the function to execute 100 times
  execute100Times();
   