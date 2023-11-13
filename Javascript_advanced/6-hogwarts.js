const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;
  
    const changeScoreBy = (points) => {
      privateScore += points;
    };
  
    return {
      setName: (newName) => {
        name = newName;
      },
      rewardStudent: () => {
        changeScoreBy(1);
      },
      penalizeStudent: () => {
        changeScoreBy(-1);
      },
      getScore: () => {
        return `${name}: ${privateScore}`;
      },
    };
  };
  
  // Create instances of studentHogwarts
  const harry = studentHogwarts();
  harry.setName('Harry');
  
  const draco = studentHogwarts();
  draco.setName('Draco');
  
  // Reward and log scores for Harry
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore()); // Should display: Harry: 4
  
  // Penalize and log scores for Draco
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore()); // Should display: Draco: -2
  