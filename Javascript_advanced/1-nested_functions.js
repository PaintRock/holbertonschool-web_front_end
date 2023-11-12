// Create a global variable
var globalVariable = 'Welcome';

// Define the outer function
function outer() {
  // Alert the content of the global variable
  alert(globalVariable);

  // Create a local variable within the outer function
  var course = 'Holberton';

  // Define the inner function
  function inner() {
    // Alert the concatenated content of globalVariable and course
    alert(globalVariable + ' ' + course);

    // Create a local variable within the inner function
    var exclamation = '!';

    // Define the inception function within inner
    function inception() {
      // Alert the concatenated content of globalVariable, course, and exclamation
      alert(globalVariable + ' ' + course + exclamation);
    }

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function
outer();

// Call the inner function within outer
// This will display an alert with "Welcome Holberton"
inner();

// Call the inception function within inner
// This will display an alert with "Welcome Holberton!"
inner(); 
