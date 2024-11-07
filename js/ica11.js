
        
   function tellFortune(children, partner, location, job) {
    const fortune = "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids.";
    document.getElementById('fortuneOutput').innerHTML += "<p>" + fortune + "</p>";
  }

  function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    const dogAgeMessage = "Your doggie is " + dogAge + " years old in dog years!";
    document.getElementById('dogAgeOutput').innerHTML += "<p>" + dogAgeMessage + "</p>";
  }

  // Calling tellFortune 3 times
  tellFortune(2, 'Bella', 'LA', 'Teacher');
  tellFortune(3, 'Sarah', 'London', 'Writer');
  tellFortune(1, 'Taylor', 'Colorado', 'Journalist');

  // Calling calculateDogAge 3 times
  calculateDogAge(1);
  calculateDogAge(3);
  calculateDogAge(5);


