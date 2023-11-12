// Define the welcomeMessage function
function welcomeMessage(fullName) {
    // This is a closure for an alert displaying "Welcome <fullName>"
    return function() {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create three variables with calls to welcomeMessage
  var guillaume = welcomeMessage('Guillaume');
  var alex = welcomeMessage('Alex');
  var fred = welcomeMessage('Fred');
  
  // Test the functions by calling them
  guillaume();
  alex();
  fred();
  