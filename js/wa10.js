// 1. Store references to elements
const customName = document.getElementById('customname');
const generateBtn = document.getElementById('generate');
const storyDiv = document.getElementById('story');
const ukCheckbox = document.getElementById('uk');

// 2. Create a new base story around the ocean and flying ducks
const storyText =
  "It was a bright and breezy day on the open ocean, and :insertx: was gliding just above the waves. Suddenly, over by :inserty:, a huge flock of flying ducks swooped down, quacking wildly. Without warning, :insertx: :insertz:. Onlookers couldn't believe their eyes, but they all agreed it was a sight to remember.";

// 3. Placeholder arrays for random selections
const insertX = ["Captain Quackers", "Sir Flaps-a-Lot", "Daisy Duck", "The Great Ducknar"];
const insertY = ["the coral reef", "a tiny island", "an abandoned pirate ship", "a glistening lagoon"];
const insertZ = ["did a backflip mid-air", "somersaulted into the water", "flapped wildly and honked", "landed gracefully on a dolphin's back"];

// 4. Random value function
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 5. Button event listener
generateBtn.addEventListener('click', generateStory);

function generateStory() {
  // Start with the base story
  let newStory = storyText;

  // Replace placeholders with random selections
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // If custom name is entered, replace "Captain Quackers" with custom name
  if (customName.value !== '') {
    newStory = newStory.replace('Captain Quackers', customName.value);
  }

  // Convert units to UK if checked
  if (ukCheckbox.checked) {
    newStory = newStory.replace('gliding just above the waves', 'soaring over the waves');
  }

  // Display the story in the div and make it visible
  storyDiv.textContent = newStory;
  storyDiv.style.visibility = 'visible';
}

