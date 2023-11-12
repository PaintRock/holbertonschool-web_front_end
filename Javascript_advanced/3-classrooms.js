function createClassRoom(numbersOfStudents) {
    // Initialize an array to store the students
    var students = [];
  
    // Define the studentSeat function
    function studentSeat(seat) {
      // Return a function that returns the seat number
      return function() {
        return seat;
      };
    }
  
    // Populate the students array using a loop
    for (var i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    // Return the students array
    return students;
  }
  
  // Create a closure classRoom by calling createClassRoom with 10 students
  var classRoom = createClassRoom(10);
  
  // Test the closure classRoom
  console.log(classRoom[0]()); // Should return 1
  console.log(classRoom[3]()); // Should return 4
  console.log(classRoom[9]()); // Should return 10
