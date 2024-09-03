// Basic game state
let currentScene = 0; // Keeps track of which part of the story you're in
let currentAdventure = '';

// Define the initial scene
const initialScene = {
    "text": "Welcome to the adventure game! Choose your character's journey:",
    "options": [
        { "text": "Cade's Adventure", "nextScene": 'cade' },
        { "text": "Tucker's Adventure", "nextScene": 'tucker' }
    ]
};

// Define the scenes for Tucker
const tuckerScenes = [
    {
        "text": "Tucker jolts awake in a dark, dense forest, the scent of damp earth filling his nostrils. The air is heavy, and the sounds of distant rustling make his heart pound. To his left, a winding path disappears into the shadows, while to his right, he hears the faint, rhythmic rush of a river. What does Tucker do?",
        "options": [
            { "text": "Follow the path", "nextScene": 1 },
            { "text": "Head towards the river", "nextScene": 2 },
            { "text": "Stay put and observe", "nextScene": 3 }
        ]
    },
    {
        "text": "Tucker decides to follow the path, the undergrowth crunching beneath his feet. Suddenly, a figure cloaked in black appears in the middle of the path, their face obscured by a hood. The figure seems to be whispering something inaudible, their hand beckoning Tucker closer. What does he do?",
        "options": [
            { "text": "Approach the figure", "nextScene": 4 },
            { "text": "Hide behind a nearby tree", "nextScene": 5 },
            { "text": "Turn and sprint back to where he started", "nextScene": 0 }
        ]
    },
    {
        "text": "Tucker heads towards the river, finding the water to be cool and refreshing. As he follows the riverbank, he discovers a small, hidden cave behind a waterfall. Inside the cave, he finds a mysterious glowing artifact. What does he do?",
        "options": [
            { "text": "Take the artifact and leave the cave", "nextScene": 6 },
            { "text": "Examine the artifact closely", "nextScene": 7 },
            { "text": "Leave the artifact and explore deeper into the cave", "nextScene": 8 }
        ]
    },
    {
        "text": "Tucker stays put and observes, watching as the shadows shift and the sounds of the forest change. After some time, he sees a group of small, ethereal creatures gathering near the path, seemingly performing a ritual. What does he do?",
        "options": [
            { "text": "Approach the creatures", "nextScene": 9 },
            { "text": "Remain hidden and continue observing", "nextScene": 10 },
            { "text": "Turn back and explore the river", "nextScene": 2 }
        ]
    },
    {
        "text": "Tucker approaches the figure, who suddenly reveals a glowing amulet and says, 'You are destined to find the ancient relic of this land.' The figure then gestures to a large tree with a hollow trunk. What does Tucker do?",
        "options": [
            { "text": "Investigate the hollow tree", "nextScene": 11 },
            { "text": "Ask the figure for more information", "nextScene": 12 },
            { "text": "Ignore the figure and continue down the path", "nextScene": 13 }
        ]
    },
    {
        "text": "Tucker hides behind a nearby tree, trying to stay unnoticed. The figure's murmurs grow louder, and suddenly, the forest goes silent. Tucker notices that the figure is gone, and the path ahead is now clear. What does he do?",
        "options": [
            { "text": "Proceed down the path", "nextScene": 14 },
            { "text": "Return to the starting point", "nextScene": 0 }
        ]
    },
    {
        "text": "Tucker takes the artifact and leaves the cave. As he emerges from the cave, he encounters a band of hostile creatures who demand to know why he has taken the artifact. What does he do?",
        "options": [
            { "text": "Explain his intentions and seek peace", "nextScene": 15 },
            { "text": "Defend himself and fight the creatures", "nextScene": 16 },
            { "text": "Attempt to escape with the artifact", "nextScene": 17 }
        ]
    },
    {
        "text": "Tucker examines the artifact closely and discovers ancient runes inscribed on its surface. As he deciphers the runes, he learns of a hidden entrance to a forgotten temple nearby. What does he do?",
        "options": [
            { "text": "Search for the hidden entrance", "nextScene": 18 },
            { "text": "Keep the artifact and head back to the river", "nextScene": 2 }
        ]
    },
    {
        "text": "Tucker ventures deeper into the cave and finds an underground chamber filled with ancient treasures. At the center of the chamber lies a pedestal with a shimmering relic. What does he do?",
        "options": [
            { "text": "Take the relic and leave the chamber", "nextScene": 19 },
            { "text": "Inspect the treasures in the chamber", "nextScene": 20 },
            { "text": "Return to the cave entrance", "nextScene": 2 }
        ]
    },
    {
        "text": "Tucker approaches the ethereal creatures, who reveal that they are protectors of the forest and offer guidance. They tell him about an impending danger and direct him to a hidden sanctuary. What does he do?",
        "options": [
            { "text": "Follow the creatures to the sanctuary", "nextScene": 21 },
            { "text": "Ask for more details about the danger", "nextScene": 22 },
            { "text": "Thank them and continue on his way", "nextScene": 23 }
        ]
    },
    {
        "text": "Tucker remains hidden and observes the creatures perform their ritual. He learns valuable information about the forest's secrets and the whereabouts of an ancient relic. What does he do?",
        "options": [
            { "text": "Search for the relic based on the information", "nextScene": 24 },
            { "text": "Head back to the river", "nextScene": 2 }
        ]
    },
    {
        "text": "Tucker investigates the hollow tree and finds a map that leads to a hidden relic. The map seems to point towards an old, forgotten ruin. What does he do?",
        "options": [
            { "text": "Follow the map to the ruin", "nextScene": 25 },
            { "text": "Return to the figure for more guidance", "nextScene": 26 }
        ]
    },
    {
        "text": "Tucker asks the figure for more information, but the figure remains cryptic and vanishes into the forest. Tucker is left with the task of discovering the relic on his own. What does he do?",
        "options": [
            { "text": "Search the area for clues", "nextScene": 27 },
            { "text": "Return to the starting point", "nextScene": 0 }
        ]
    },
    {
        "text": "Tucker ignores the figure and continues down the path, eventually finding a hidden glade with a mysterious pedestal. Upon the pedestal rests a glowing orb. What does he do?",
        "options": [
            { "text": "Take the orb", "nextScene": 28 },
            { "text": "Examine the glade for more clues", "nextScene": 29 }
        ]
    },
    {
        "text": "Tucker steps into the portal and finds himself floating in a vast, empty void. Suddenly, he sees a spaceship hovering above, and a voice echoes in his mind: 'You have been chosen.' The spaceship descends, and a door opens. Does he accept the invitation?",
        "options": [
            { "text": "Enter the spaceship", "nextScene": 22 },
            { "text": "Reject the invitation and wait", "nextScene": 23 },
            { "text": "Try to find another way out", "nextScene": 24 }
        ]
    },
    {
        "text": "Tucker fights bravely, but the wolf overpowers him. His vision fades to black as the wolf's growls echo in the distance. Tucker's journey ends here.",
        "options": []
    },
    // Additional scenes to conclude the story...
    {
        "text": "Tucker finds himself at a hidden sanctuary, where he meets an ancient sage who provides him with the knowledge needed to complete his quest. The sage reveals the location of the final relic and its significance. What does Tucker do?",
        "options": [
            { "text": "Seek out the final relic", "nextScene": 30 },
            { "text": "Ask the sage for further guidance", "nextScene": 31 }
        ]
    },
    {
        "text": "Tucker successfully retrieves the final relic and uncovers its powerful secret. He must now decide whether to use the relic for personal gain or to protect it for future generations. What does he do?",
        "options": [
            { "text": "Use the relic's power for himself", "nextScene": 32 },
            { "text": "Protect the relic and safeguard its power", "nextScene": 33 }
        ]
    },
    {
        "text": "Tucker's journey concludes as he returns to his starting point, now wiser and more experienced. The forest seems less menacing, and the path forward is clear. Tucker reflects on his adventure and looks forward to new challenges ahead.",
        "options": []
    }
];


// Define the scenes for Cade (copy of Tucker's scenes for this example)
const cadeScenes = [
    {
        "text": "Cade jolts awake in a dark, dense forest, the scent of damp earth filling his nostrils. The air is heavy, and the sounds of distant rustling make his heart pound. To his left, a winding path disappears into the shadows, while to his right, he hears the faint, rhythmic rush of a river. What does Cade do?",
        "options": [
            { "text": "Follow the path", "nextScene": 1 },
            { "text": "Head towards the river", "nextScene": 2 },
            { "text": "Stay put and observe", "nextScene": 3 }
        ]
    },
    {
        "text": "Cade decides to follow the path, pushing through the undergrowth. After a while, he encounters a mysterious figure cloaked in black. The figure is whispering and beckoning Cade closer. What does he do?",
        "options": [
            { "text": "Approach the figure", "nextScene": 4 },
            { "text": "Hide behind a nearby tree", "nextScene": 5 },
            { "text": "Turn and sprint back to where he started", "nextScene": 0 }
        ]
    },
    {
        "text": "Cade makes his way towards the river, the sound growing louder with each step. As he reaches the water’s edge, he spots an old boat tethered to a post. The river seems to flow toward a distant, shadowy destination. What does he do?",
        "options": [
            { "text": "Take the boat and explore the river", "nextScene": 6 },
            { "text": "Follow the riverbank on foot", "nextScene": 7 },
            { "text": "Return to the forest path", "nextScene": 8 }
        ]
    },
    {
        "text": "Cade decides to stay put and observe. As he listens carefully, he notices faint footsteps approaching. A group of travelers emerges from the forest, seemingly lost. They seem wary but could provide useful information. What does he do?",
        "options": [
            { "text": "Approach the travelers and offer help", "nextScene": 9 },
            { "text": "Remain hidden and continue observing", "nextScene": 10 },
            { "text": "Follow them from a distance", "nextScene": 11 }
        ]
    },
    {
        "text": "Cade approaches the cloaked figure. The figure reveals themselves to be a wise old sage who offers Cade a choice: accept a magical artifact that grants immense power or refuse and continue on his journey. What does Cade do?",
        "options": [
            { "text": "Accept the artifact", "nextScene": 12 },
            { "text": "Refuse the artifact", "nextScene": 13 }
        ]
    },
    {
        "text": "Cade hides behind a tree as the cloaked figure continues to whisper. After a while, the figure disappears into the forest, leaving Cade with a sense of unease. He can now choose to follow the path further or explore other options.",
        "options": [
            { "text": "Continue along the path", "nextScene": 14 },
            { "text": "Explore another route", "nextScene": 15 }
        ]
    },
    {
        "text": "Cade takes the boat and begins to navigate the river. The journey is serene until he encounters a series of rapids. The boat is nearly capsized, and he must decide whether to risk it or find another way.",
        "options": [
            { "text": "Brave the rapids", "nextScene": 16 },
            { "text": "Abandon the boat and swim to shore", "nextScene": 17 }
        ]
    },
    {
        "text": "Cade follows the riverbank and discovers a hidden cave entrance. Inside, he finds ancient treasures and forgotten lore. He must decide whether to take the treasures or continue exploring the cave.",
        "options": [
            { "text": "Take the treasures", "nextScene": 18 },
            { "text": "Explore further into the cave", "nextScene": 19 }
        ]
    },
    {
        "text": "Cade returns to the forest path and encounters the same cloaked figure again, who now offers to guide him to a secret location. Cade must decide whether to trust the guide or continue on his own.",
        "options": [
            { "text": "Trust the guide and follow", "nextScene": 20 },
            { "text": "Continue on his own", "nextScene": 21 }
        ]
    },
    {
        "text": "Cade approaches the travelers and offers his help. They reveal that they are searching for a hidden treasure and invite Cade to join them. Together, they find the treasure and forge a lasting alliance.",
        "options": []
    },
    {
        "text": "Cade remains hidden and continues to observe the travelers. He learns valuable information about the forest and its dangers, which helps him navigate safely through the wilderness.",
        "options": []
    },
    {
        "text": "Cade follows the travelers from a distance and uncovers a hidden path leading to an ancient ruin. Inside, he discovers powerful relics and secrets about the forest’s history.",
        "options": []
    },
    {
        "text": "Cade accepts the artifact from the sage, gaining extraordinary powers. He uses these powers to overcome great challenges and ultimately ascends to godhood, ruling over the realms with newfound authority.",
        "options": []
    },
    {
        "text": "Cade refuses the artifact and continues his journey. He faces numerous trials and ultimately finds his way to a hidden sanctuary where he lives out his days in peace.",
        "options": []
    },
    {
        "text": "Cade bravely faces the rapids but is thrown from the boat. He manages to swim to shore and discovers a secret cave where he uncovers ancient lore and treasures.",
        "options": []
    },
    {
        "text": "Cade abandons the boat and swims to shore. He emerges near a hidden settlement where he is welcomed and finds a new purpose among the inhabitants.",
        "options": []
    },
    {
        "text": "Cade takes the treasures from the cave, which grants him great wealth and power. However, he becomes a target for other treasure seekers and must navigate new dangers.",
        "options": []
    },
    {
        "text": "Cade explores further into the cave and finds a hidden portal leading to another realm. He steps through the portal and embarks on a new adventure in an unknown world.",
        "options": []
    },
    {
        "text": "Cade trusts the guide and follows them to a hidden sanctuary where he finds ancient knowledge and wisdom that helps him complete his quest.",
        "options": []
    },
    {
        "text": "Cade continues on his own and encounters numerous obstacles. He manages to overcome them but ends up in a desolate land with few resources.",
        "options": []
    },
    {
        "text": "Cade fights valiantly but is ultimately defeated. His journey ends with his passing, and his legend lives on in the stories told by those who knew him.",
        "options": []
    },
    {
        "text": "Cade accepts the invitation and boards the spaceship. He is transported to a celestial realm, where he is granted godlike powers and becomes a deity overseeing the cosmos.",
        "options": []
    },
    {
        "text": "Cade explores the void and finds a hidden passage to an underground world. He integrates with the mole people society and lives out his days as one of their kind.",
        "options": []
    }
];


// Function to update the game text and choices based on the current scene
function updateGameText() {
    let scene;
    if (currentScene === 0) {
        scene = initialScene; // Initial choice scene
    } else if (currentAdventure === 'tucker') {
        scene = tuckerScenes[currentScene - 1]; // Tucker's scenes start from index 1
    } else if (currentAdventure === 'cade') {
        scene = cadeScenes[currentScene - 1]; // Cade's scenes start from index 1
    }

    document.getElementById("game-text").textContent = scene.text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Clear previous choices

    scene.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => chooseOption(option, index);
        choicesContainer.appendChild(button);
    });
}

// Function to handle user choices
function chooseOption(option, optionIndex) {
    if (currentScene === 0) {
        // Determine the adventure based on the initial choice
        currentAdventure = option.nextScene;
        currentScene = 1; // Start the selected adventure from the first scene
    } else {
        currentScene = option.nextScene;
    }
    updateGameText();
}

// Initialize game on page load
window.onload = () => {
    updateGameText();
};
