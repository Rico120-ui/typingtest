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
  "sweet potato",
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
  "coriander",
  "garam",
  "curry",
  "spice",
  "salt",
  "pepper",
  "sugar",
  "honey",
  "syrup",
  "vinegar",
  "oil",
  "butter",
  "margarine",
  "cream",
  "cheese",
  "yogurt",
  "milk",
  "almond",
  "hazelnut",
  "walnut",
  "cashew",
  "pecan",
  "peanut",
  "chocolate",
  "candy",
  "cake",
  "cookie",
  "pie",
  "brownie",
  "muffin",
  "donut",
  "pudding",
  "gelato",
  "ice cream",
  "sorbet",
  "pancake",
  "waffle",
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
  "biryani",
  "pasta",
  "noodle",
  "ramen",
  "hamburger",
  "soda",
  "juice",
  "coffee",
  "tea",
  "water",
  "milkshake",
  "smoothie",
  "cocktail",
  "wine",
  "beer",
  "whiskey",
  "vodka",
  "gin",
  "brandy",
  "champagne",
  "tequila",
  "rum",
  "cider",
  "seltzer",
  "lemonade",
  "iced tea",
  "hot",
  "chocolate",
  "chai",
  "matcha",
  "espresso",
  "latte",
  "mocha",
  "capuccino",
  "macchiato",
  "frappuccino",
  "dessert",
  "appetizer",
  "entree",
  "main",
  "buffet",
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
  "tablecloth",
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
  "stir-fry",
  "saute",
  "simmer",
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
  "nutrition",
  "calorie",
  "fiber",
  "protein",
  "carbohydrate",
  "fat",
  "vitamin",
  "mineral",
  "nutrient",
  "meal plan",
  "healthy",
  "unhealthy",
  "organic",
  "vegan",
  "vegetarian",
  "gluten",
  "free",
  "paleo",
  "keto",
  "mediterranean",
  "raw",
  "whole",
  "foods",
  "processed",
  "fast",
  "food",
  "takeout",
  "delivery",
  "dine-in",
  "cooking",
  "baking",
  "grilling",
  "frying",
  "boiling",
  "steaming",
  "roasting",
  "microwaving",
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
  "diner",
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
  "delicatessen",
  "fishmonger",
  "cheesemonger",
  "winery",
  "brewery",
  "distillery",
  "vineyard",
  "orchard",
  "plantation",
  "farm",
  "garden",
  "greenhouse",
  "hydroponic",
  "aquaponic",
  "local",
  "fresh",
  "seasonal",
  "sustainable",
  "friendly",
  "organic",
  "heirloom",
  "artisanal",
  "craft",
  "homemade",
  "handcrafted",
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
  "patissier",
  "mixologist",
  "barista",
  "server",
  "waitstaff",
  "host",
  "hostess",
  "busser",
  "dishwasher",
  "food",
  "critic",
  "food",
  "blogger",
  "food",
  "photographer",
  "culinary",
  "cooking ",
  "school",
  "culinary",
  "arts",
  "food",
  "science",
  "food",
  "technology",
  "kitchen",
  "appliance",
  "utensil",
  "gadget",
  "tool",
  "equipment",
  "fryer",
  "griddle",
  "stovetop",
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
  "roasting",
  "pan",
  "casserole",
  "dish",
  "serving",
  "platter",
  "spatula",
  "whisk",
  "ladle",
  "tongs",
  "measuring",
  "cup",
  "measuring",
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
  "dice",
  "chop",
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
  "caramelize",
  "glaze",
  "steam",
  "fry",
  "roast",
  "grill",
  "bake",
  "broil",
  "simmer",
  "boil",
  "stew",
  "braise",
  "deglaze",
  "sauté",
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
  "marinate",
  "season",
  "sauce",
  "syrup",
  "spread",
  "dip",
  "pate",
  "relish",
  "salsa",
  "chutney",
  "sauce",
  "stock",
  "broth",
  "gravy",
  "dressing",
  "vinaigrette",
  "mayonnaise",
  "aioli",
  "hollandaise",
  "pesto",
  "chimichurri",
  "tapenade",
  "salsa",
  "sauce",
  "compound",
  " butter",
  "coulis",
  "ganache",
  "frosting",
  "icing",
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
  "scone",
  "danish",
  "croissant",
  "brioche",
  "pudding",
  "clafoutis",
  "flan",
  "cheesecake",
  "tiramisu",
  "pavlova",
  "torte",
  "baklava",
  "knafeh",
  "crepe",
  "pain",
  "chocolat",
  "babka",
  "panettone",
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
