const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer',
  };
  
  function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
  }
  
  const bindLogWelcomeUser = logWelcomeUser.bind(user);
  
  // Call the function with the bound context
  console.log(bindLogWelcomeUser('Hello')); // Should display: Hello, Buillaume. Your occupation is: Engineer
  