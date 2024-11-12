const words = [
  "apple",
  "banana",
  "grape",
  "orange",
  "pear",
  "peach",
  "melon",
  "kiwi",
  "mango",
  "berry",
  "coconut",
  "pineapple",
  "strawberry",
  "blueberry",
  "raspberry",
  "plum",
  "cherry",
  "fig",
  "apricot",
  "papaya",
  "watermelon",
  "pomegranate",
  "lime",
  "lemon",
  "tangerine",
  "clementine",
  "cucumber",
  "carrot",
  "onion",
  "garlic",
  "tomato",
  "potato",
  "pepper",
  "broccoli",
  "cauliflower",
  "spinach",
  "lettuce",
  "cabbage",
  "zucchini",
  "asparagus",
  "celery",
  "radish",
  "pumpkin",
  "eggplant",
  "bean",
  "pea",
  "corn",
  "squash",
  "beet",
  "turnip",
  "sweet",
  "potato",
  "parsnip",
  "herb",
  "sage",
  "rosemary",
  "thyme",
  "basil",
  "oregano",
  "cilantro",
  "parsley",
  "mint",
  "dill",
  "fennel",
  "chive",
  "code",
  "game",
  "curry",
  "spice",
  "salt",
  "pepper",
  "sugar",
  "honey",
  "syrup",
  "violin",
  "oil",
  "butter",
  "moon",
  "cream",
  "cheese",
  "yogurt",
  "milk",
  "almond",
  "hand",
  "walnut",
  "cashew",
  "pecan",
  "peanut",
  "late",
  "candy",
  "cake",
  "cookie",
  "pie",
  "brown",
  "move",
  "donut",
  "pudding",
  "gelato",
  "ice cream",
  "sorbet",
  "pancake",
  "wife",
  "toast",
  "sandwich",
  "burger",
  "hotdog",
  "pizza",
  "taco",
  "sushi",
  "sashimi",
  "soup",
  "salad",
  "stew",
  "curry",
  "bird",
  "pasta",
  "noodle",
  "ramen",
  "hamburger",
  "soda",
  "juice",
  "coffee",
  "tea",
  "water",
  "milk",
  "smooth",
  "clock",
  "wine",
  "beer",
  "whiskey",
  "voice",
  "gin",
  "brandy",
  "change",
  "temple",
  "run",
  "soldier",
  "seller",
  "lemon",
  "ice",
  "tea",
  "hot",
  "chocolate",
  "chat",
  "matcha",
  "egg",
  "late",
  "monkey",
  "cup",
  "mango",
  "frog",
  "dessert",
  "application",
  "enter",
  "main",
  "buy",
  "brunch",
  "dinner",
  "snack",
  "meal",
  "recipe",
  "chef",
  "kitchen",
  "restaurant",
  "menu",
  "table",
  "plate",
  "bowl",
  "fork",
  "spoon",
  "knife",
  "cup",
  "glass",
  "mug",
  "napkin",
  "cloth",
  "serving",
  "dish",
  "cuisine",
  "gourmet",
  "banquet",
  "feast",
  "potluck",
  "picnic",
  "barbecue",
  "grill",
  "smoke",
  "broil",
  "bake",
  "fry",
  "steam",
  "roast",
  "store",
  "saute",
  "summer",
  "boil",
  "prepare",
  "garnish",
  "plate",
  "serve",
  "eat",
  "taste",
  "sip",
  "chew",
  "swallow",
  "devour",
  "gobble",
  "munch",
  "nibble",
  "snack",
  "savor",
  "relish",
  "enjoy",
  "indulge",
  "treat",
  "crave",
  "hunger",
  "thirst",
  "appetite",
  "diet",
  "note",
  "calorie",
  "fiber",
  "protein",
  "car",
  "fat",
  "vitamin",
  "mineral",
  "nutrient",
  "meal",
  "plan",
  "healthy",
  "healthy",
  "organic",
  "vegan",
  "vegetable",
  "gluten",
  "free",
  "paleo",
  "keto",
  "mind",
  "raw",
  "whole",
  "foods",
  "process",
  "fast",
  "food",
  "take",
  "out",
  "delivery",
  "dinner",
  "cooking",
  "baking",
  "grilling",
  "frying",
  "boil",
  "steam",
  "roasting",
  "microwave",
  "prepping",
  "marinating",
  "seasoning",
  "spicing",
  "saucing",
  "flavoring",
  "tasting",
  "crunching",
  "slurping",
  "sipping",
  "grazing",
  "sharing",
  "plating",
  "cooking",
  "cuisine",
  "bistro",
  "cafe",
  "dinner",
  "pub",
  "tavern",
  "taco",
  "stand",
  "food",
  "truck",
  "market",
  "farmers",
  "market",
  "grocery",
  "store",
  "supermarket",
  "butcher",
  "bakery",
  "delicious",
  "fish",
  "cheese",
  "winery",
  "brewery",
  "distance",
  "vineyard",
  "orchard",
  "plantation",
  "farm",
  "garden",
  "green",
  "house",
  "hydroponic",
  "aquaponic",
  "local",
  "fresh",
  "seasonal",
  "sure",
  "friendly",
  "organic",
  "height",
  "artist",
  "craft",
  "homemade",
  "hand",
  "small",
  "batch",
  "farm",
  "table",
  "community",
  "supported",
  "slow",
  "food",
  "fast",
  "casual",
  "fine",
  "dining",
  "bistro",
  "brasserie",
  "cater",
  "catering",
  "foodie",
  "chef",
  "cook",
  "baker",
  "sous",
  "chef",
  "plastic",
  "meeting",
  "background",
  "server",
  "waiter",
  "host",
  "width",
  "bus",
  "dynamic",
  "food",
  "critic",
  "food",
  "blog",
  "food",
  "photographer",
  "column",
  "cooking",
  "school",
  "category",
  "arts",
  "food",
  "science",
  "food",
  "technology",
  "kitchen",
  "apply",
  "url",
  "target",
  "tool",
  "equipment",
  "finger",
  "grid",
  "stop",
  "oven",
  "microwave",
  "blender",
  "mixer",
  "processor",
  "grater",
  "peeler",
  "slicer",
  "knife",
  "pot",
  "pan",
  "baking",
  "sheet",
  "root",
  "pan",
  "cpu",
  "dish",
  "serving",
  "platter",
  "spatula",
  "whisk",
  "hard disk",
  "function",
  "message",
  "cup",
  "image",
  "spoon",
  "cutting",
  "board",
  "colander",
  "strainer",
  "mortar",
  "pestle",
  "food",
  "processor",
  "salad",
  "spinner",
  "egg",
  "separator",
  "zester",
  "mandoline",
  "julienne",
  "nice",
  "shop",
  "slice",
  "grate",
  "peel",
  "mince",
  "puree",
  "whip",
  "fold",
  "stir",
  "beat",
  "mix",
  "combine",
  "blend",
  "sear",
  "container",
  "glaze",
  "steam",
  "fly",
  "roast",
  "grill",
  "bake",
  "broil",
  "sum",
  "boil",
  "stew",
  "braise",
  "deglaze",
  "saute",
  "poach",
  "steam",
  "pickle",
  "preserve",
  "ferment",
  "cure",
  "smoke",
  "dry",
  "candy",
  "brine",
  "mario",
  "season",
  "sauce",
  "system",
  "spread",
  "dip",
  "pate",
  "relish",
  "analysis",
  "sheet",
  "sauce",
  "stock",
  "broth",
  "gravy",
  "dress",
  "variable",
  "mayonnaise",
  "aioli",
  "hollandaise",
  "pesto",
  "check",
  "tapenade",
  "salsa",
  "sauce",
  "compound",
  "button",
  "coulis",
  "ganache",
  "frosting",
  "input",
  "glaze",
  "caramel",
  "meringue",
  "pavlova",
  "torte",
  "sorbet",
  "gelato",
  "ice cream",
  "sherbet",
  "parfait",
  "crumble",
  "cobbler",
  "tart",
  "pie",
  "cake",
  "brownie",
  "cookie",
  "muffin",
  "scam",
  "danish",
  "croissant",
  "brioche",
  "pudding",
  "clafoutis",
  "flan",
  "cheese",
  "cake",
  "thread",
  "pavlova",
  "torte",
  "baklava",
  "knafeh",
  "crepe",
  "pain",
  "chocolat",
  "babka",
  "pain",
  "stollen",
];
// Prevent zooming in by double-tap and pinch gestures
document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);

document.addEventListener(
  "touchmove",
  function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);

let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  { passive: false }
);

let score = 0;
let timeLeft = 0;
let currentWord;
let timerInterval;

// DOM Elements
const startButton = document.getElementById("start-button");
const exitButton = document.getElementById("exit-button");
const wordDisplay = document.getElementById("word-display");
const wordInput = document.getElementById("word-input");
const scoreValue = document.getElementById("score-value");
const timeLeftDisplay = document.getElementById("time-left");
const timeSelect = document.getElementById("time-select");

// Event Listeners
startButton.addEventListener("click", startGame);
exitButton.addEventListener("click", exitGame);
wordInput.addEventListener("keyup", checkInput);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function startGame() {
  console.log("Game started");
  score = 0;
  timeLeft = 0;
  wordInput.disabled = false;
  wordInput.focus();
  startButton.disabled = true;
  exitButton.disabled = false;
  // Get user-defined time from dropdown
  timeLeft = parseInt(timeSelect.value); // Set time based on user input

  wordInput.disabled = false;
  wordInput.focus();
  startButton.disabled = true;
  exitButton.disabled = false;

  // Display first word
  currentWord = getRandomWord();
  wordDisplay.innerText = `${currentWord}`;
  scoreValue.innerText = score;
  timeLeftDisplay.innerText = timeLeft;
  // Reset score and time display
  scoreValue.innerText = score;
  timeLeftDisplay.innerText = timeLeft;

  // Clear any existing timer
  clearInterval(timerInterval);
  // Clear any existing timer

  // Start timer
  timerInterval = setInterval(updateTimer, 1000);
}

function exitGame() {
  console.log("Game exited");
  wordInput.disabled = true;
  startButton.disabled = false;
  exitButton.disabled = true;
  wordDisplay.innerText = "";
  wordInput.value = "";
  scoreValue.innerText = "0";

  clearInterval(timerInterval);
  timeLeftDisplay.innerText = "00";
}
function showAlert(message) {
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.innerText = message;
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

// Finish game alert with correct words count
function showFinishAlert() {
  showAlert(`Time's up! Your final score is ${score}.`);
}

function updateTimer() {
  timeLeft--;
  timeLeftDisplay.innerText = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showFinishAlert(); // Show custom finish alert
    exitGame(); // End the game
  }
}

function resetGame() {
  clearInterval(timerInterval);
  wordInput.disabled = true; // Disable input
  startButton.disabled = false; // Enable start button
  exitButton.disabled = true; // Disable exit button
  wordDisplay.innerText = ""; // Clear word display
  wordInput.value = ""; // Clear input
  scoreValue.innerText = ""; // Reset score display
  timeLeftDisplay.innerText = " "; // Reset time display
  scoreValue.innerText = "0"; // Reset score display
}

function showAlert(message) {
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.innerText = message;
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
function checkInput(event) {
  if (event.key === "Enter") {
    const userInput = wordInput.value.trim();
    if (userInput === currentWord) {
      score += 1;
      scoreValue.innerText = score;
      wordInput.value = "";
      currentWord = getRandomWord();
      wordDisplay.innerText = currentWord;
    } else if (userInput !== "") {
      showAlert(
        `Game Over!\nYou typed "${userInput}"  and the correct word is "${currentWord}".\nYour score is ${score}.\n Time left ${timeSelect.value}s. \nYour time left is ${timeLeft} seconds.`
      );
      exitGame(); // End the game
    }
  }
}
// Function to create a flying letter
function createFlyingLetter() {
  const container = document.getElementById("flyingLettersContainer");
  const letter = document.createElement("span");
  letter.classList.add("flyingLetter");

  // Set a random letter from A to Z
  letter.innerText = String.fromCharCode(65 + Math.floor(Math.random() * 26));

  // Randomize position and duration
  letter.style.left = Math.random() * 100 + "vw"; // Random horizontal position
  letter.style.animationDuration = 3 + Math.random() * 7 + "s"; // Random duration between 3 and 10 seconds

  // Apply the animation style
  letter.style.animationName = "flyAcrossScreen";

  // Append letter to container
  container.appendChild(letter);

  // Remove letter after animation ends to prevent memory leak
  letter.addEventListener("animationend", () => {
    container.removeChild(letter);
  });
}

// Generate letters at intervals
setInterval(createFlyingLetter, 300); // Adjust interval for the number of letters
// Webpack config to output minified bundles
module.exports = {
  mode: 'production', // Ensures minification
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  }
};


