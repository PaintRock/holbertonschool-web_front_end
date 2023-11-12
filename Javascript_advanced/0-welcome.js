function welcome(firstName, lastName) {
    // Concatenate first and last names with a space in between
    let fullName = firstName + ' ' + lastName;
  
    // Define the displayFullName function within the welcome function
    function displayFullName() {
      // Display an alert with the welcome message
      alert('Welcome ' + fullName + '!');
    }
  
    // Call the displayFullName function
    displayFullName();
  }
  
  // Test the welcome function
  welcome('Holberton', 'School');
  
  // Attempting to access fullName here will result in a reference error
  // Uncommenting the line below will result in an error
  // alert(fullName);
  