
const customName = document.getElementById('customname');
const generateBtn = document.getElementById('generate');
const storyDiv = document.getElementById('story');
const ukCheckbox = document.getElementById('uk');

const storyText =
  "It was a bright and breezy day on the open ocean, and :insertx: was gliding just above the waves. Suddenly, over by :inserty:, a huge flock of flying ducks swooped down, quacking wildly. Without warning, :insertx: :insertz:. Onlookers couldn't believe their eyes, but they all agreed it was a sight to remember.";

const insertX = ["Captain Quackers", "Sir Flaps-a-Lot", "Daisy Duck", "The Great Ducknar"];
const insertY = ["the coral reef", "a tiny island", "an abandoned pirate ship", "a glistening lagoon"];
const insertZ = ["did a backflip mid-air", "somersaulted into the water", "flapped wildly and honked", "landed gracefully on a dolphin's back"];

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
generateBtn.addEventListener('click', generateStory);

function generateStory() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);


  if (customName.value !== '') {
    newStory = newStory.replace('Onlookers', customName.value);
  }

  storyDiv.textContent = newStory;
  storyDiv.style.visibility = 'visible';
}

