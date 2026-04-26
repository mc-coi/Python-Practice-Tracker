// ============================================================
// Videogame Design — Daily Lesson Data
// Units: Game Design Theory, Pygame, Mechanics, Level Design
// ============================================================

const LESSONS_VGD = {

  // ══════════════════════════════════════════════
  // UNIT 1: GAME DESIGN FUNDAMENTALS (Days 1–6)
  // ══════════════════════════════════════════════

  1: {
    day: 1, unit: 1, unitName: "Game Design Fundamentals",
    title: "What Makes a Game?",
    bellRinger: {
      question: "Which of the following BEST defines a game?",
      type: "multiple_choice",
      options: ["A) Any interactive digital experience", "B) An activity with rules, goals, and meaningful player choices", "C) Software that runs on a computer", "D) A story told with animations"],
      correct: "B",
      explanation: "Games are defined by rules, goals, and meaningful choices. Without these, an experience is passive (like watching a movie)."
    },
    practice: [
      { q: "Which element is MOST important for making a game feel 'fun'?", type: "multiple_choice", options: ["A) High-quality graphics", "B) Long gameplay time", "C) Meaningful choices with interesting consequences", "D) A complicated story"], correct: "C", explanation: "Meaningful choices are the heart of games. Players must feel their decisions matter. Graphics help, but can't replace good gameplay.", diff: "beginner" },
      { q: "What is 'game feel' (also called 'juice')?", type: "multiple_choice", options: ["A) The length of a game", "B) The responsive, satisfying sensation of interacting with the game's controls", "C) The visual theme of a game", "D) The number of players supported"], correct: "B", explanation: "Game feel refers to the tactile, moment-to-moment sensation of playing — how responsive and satisfying controls feel.", diff: "intermediate" },
      { q: "All games must have a win condition.", type: "true_false", correct: "False", explanation: "Not all games have win conditions. Sandbox games (Minecraft, The Sims) let players set their own goals. Open-ended play is still valid game design.", diff: "intermediate" },
      { q: "What does 'player agency' mean in game design?", type: "multiple_choice", options: ["A) The speed of the game engine", "B) The player's ability to make meaningful choices that affect the outcome", "C) The number of levels in a game", "D) The game's difficulty setting"], correct: "B", explanation: "Agency is the sense of control and impact. High agency means player choices matter; low agency feels like 'on rails' play.", diff: "intermediate" },
      { q: "Which of the following is an example of INTRINSIC motivation in gaming?", type: "multiple_choice", options: ["A) Earning a trophy/achievement", "B) Playing for the joy of mastering the mechanics", "C) Getting a gift card for reaching level 10", "D) Winning a cash prize in a tournament"], correct: "B", explanation: "Intrinsic motivation comes from within — the fun of the game itself. Extrinsic motivation comes from external rewards.", diff: "challenge" }
    ],
    exitTicket: {
      question: "What are the three core elements that define a game?",
      type: "multiple_choice",
      options: ["A) Graphics, sound, and story", "B) Rules, goals, and meaningful choices", "C) Players, levels, and enemies", "D) Hardware, software, and internet"],
      correct: "B",
      explanation: "Rules constrain what players can do, goals give them direction, and meaningful choices create engagement."
    }
  },

  2: {
    day: 2, unit: 1, unitName: "Game Design Fundamentals",
    title: "Game Genres & Mechanics",
    bellRinger: {
      question: "What is a game 'mechanic'?",
      type: "multiple_choice",
      options: ["A) The graphics engine used to build a game", "B) A rule or system that governs player interaction", "C) The game's soundtrack", "D) The number of buttons on a controller"],
      correct: "B",
      explanation: "Mechanics are the rules and systems players interact with. Jumping, shooting, and collecting items are all mechanics."
    },
    practice: [
      { q: "Which genre focuses primarily on story and player choices that affect the narrative?", type: "multiple_choice", options: ["A) Real-Time Strategy (RTS)", "B) Role-Playing Game (RPG)", "C) Battle Royale", "D) Sports simulation"], correct: "B", explanation: "RPGs emphasize story, character development, and player choices that shape the narrative experience.", diff: "beginner" },
      { q: "What is the difference between 'core mechanics' and 'secondary mechanics'?", type: "multiple_choice", options: ["A) Core mechanics happen in cutscenes; secondary in gameplay", "B) Core mechanics are the primary repeated actions; secondary mechanics add variety", "C) Core mechanics are hard; secondary mechanics are easy", "D) There is no difference"], correct: "B", explanation: "Core mechanics are what you do most (e.g., jumping in a platformer). Secondary mechanics add depth (e.g., wall-jumping).", diff: "intermediate" },
      { q: "Every game genre needs the same core mechanics to be successful.", type: "true_false", correct: "False", explanation: "Different genres have different core mechanics. What works in an FPS (shooting, aiming) differs from a puzzle game (logic, pattern recognition).", diff: "beginner" },
      { q: "What is a 'feedback loop' in game design?", type: "multiple_choice", options: ["A) When the player crashes the game", "B) A cycle where a player action causes a result that influences future actions", "C) The review score of a game", "D) The tutorial section"], correct: "B", explanation: "Feedback loops reinforce player behavior. Positive: winning gives resources to win more. Negative: losing resets progress for balance.", diff: "challenge" },
      { q: "Which of these is an example of a 'platformer' core mechanic?", type: "multiple_choice", options: ["A) Managing a city's budget", "B) Navigating levels by jumping between platforms", "C) Casting spells in real-time combat", "D) Matching colored tiles"], correct: "B", explanation: "Platformers revolve around precise jumping and movement across platforms. Examples: Mario, Celeste, Hollow Knight.", diff: "beginner" }
    ],
    exitTicket: {
      question: "Which type of game mechanic do players interact with MOST frequently?",
      type: "multiple_choice",
      options: ["A) Story mechanics", "B) Tutorial mechanics", "C) Core mechanics", "D) Cutscene mechanics"],
      correct: "C",
      explanation: "Core mechanics are the repeated actions that define the gameplay loop — they're what players do constantly."
    }
  },

  3: {
    day: 3, unit: 1, unitName: "Game Design Fundamentals",
    title: "The Game Design Document (GDD)",
    bellRinger: {
      question: "What is the main purpose of a Game Design Document (GDD)?",
      type: "multiple_choice",
      options: ["A) To pitch the game to investors only", "B) To serve as a blueprint that communicates the game's vision, mechanics, and features to the team", "C) To serve as the final code for the game", "D) To track daily work hours"],
      correct: "B",
      explanation: "A GDD is a living reference document that keeps the whole team aligned on what the game is supposed to be."
    },
    practice: [
      { q: "Which section of a GDD describes the 'core gameplay loop'?", type: "multiple_choice", options: ["A) Marketing section", "B) Legal section", "C) Gameplay/mechanics section", "D) Budget section"], correct: "C", explanation: "The gameplay/mechanics section explains what players do repeatedly — the core loop that keeps them engaged.", diff: "beginner" },
      { q: "A GDD should be written BEFORE any code or art is created.", type: "true_false", correct: "False", explanation: "In practice, GDDs evolve alongside development. Many successful games use rapid prototyping first, then document what works. There's no single 'right' order.", diff: "intermediate" },
      { q: "What is a 'target audience' section in a GDD?", type: "multiple_choice", options: ["A) The price point of the game", "B) Description of the intended players (age, interests, skill level)", "C) The hardware specs the game needs", "D) The launch date"], correct: "B", explanation: "Knowing your audience shapes every design decision — difficulty, art style, content rating, and marketing.", diff: "beginner" },
      { q: "What does 'scope' refer to in game design?", type: "multiple_choice", options: ["A) The camera zoom level", "B) The total set of features planned for the game", "C) The number of programmers", "D) The story length"], correct: "B", explanation: "Scope defines what IS and what ISN'T in the game. 'Scope creep' (adding features late) is a major cause of project delays.", diff: "intermediate" },
      { q: "A small team should aim for a _______ scope on their first game.", type: "multiple_choice", options: ["A) Massive, ambitious", "B) Intentionally limited, achievable", "C) Identical to AAA games", "D) Undefined and flexible"], correct: "B", explanation: "Most successful indie studios started small. Finishing a small game teaches more than never finishing a big one.", diff: "challenge" }
    ],
    exitTicket: {
      question: "Why is it important to define a game's scope early?",
      type: "multiple_choice",
      options: ["A) To maximize the number of features", "B) To prevent scope creep and keep the project achievable", "C) To decide the game's name", "D) To choose the programming language"],
      correct: "B",
      explanation: "A clear scope prevents 'scope creep' — the gradual addition of features that delays or kills projects."
    }
  },

  4: {
    day: 4, unit: 1, unitName: "Game Design Fundamentals",
    title: "Player Experience & Flow",
    bellRinger: {
      question: "What is 'flow state' in the context of game design?",
      type: "multiple_choice",
      options: ["A) The movement speed of game characters", "B) A mental state of full engagement where challenge matches skill", "C) The water effects in a game engine", "D) The speed at which a game loads"],
      correct: "B",
      explanation: "Flow (Csikszentmihalyi) is the 'sweet spot' of engagement — challenge is high enough to be interesting but not so high it's frustrating."
    },
    practice: [
      { q: "What happens when a game is TOO easy for the player?", type: "multiple_choice", options: ["A) Flow state", "B) Anxiety", "C) Boredom", "D) Frustration"], correct: "C", explanation: "When challenge falls below the player's skill level, they become bored. The game must scale challenge appropriately.", diff: "beginner" },
      { q: "What is 'onboarding' in game design?", type: "multiple_choice", options: ["A) The final boss of a game", "B) The process of teaching new players the game's mechanics", "C) Purchasing items in a game", "D) Saving progress"], correct: "B", explanation: "Onboarding is how a game introduces mechanics to new players — tutorials, tooltips, level design that teaches by playing.", diff: "beginner" },
      { q: "The best tutorials tell players everything they need to know upfront.", type: "true_false", correct: "False", explanation: "Research shows players learn best by doing, not reading. Great tutorials introduce mechanics gradually as needed, not all at once.", diff: "intermediate" },
      { q: "What is a 'difficulty curve'?", type: "multiple_choice", options: ["A) The visual style of level obstacles", "B) The progression of challenge over time in a game", "C) The number of enemies per level", "D) The game's frame rate over time"], correct: "B", explanation: "A well-designed difficulty curve starts easy, increases gradually, and provides moments of rest before each challenge spike.", diff: "intermediate" },
      { q: "Which design principle suggests that players should feel mastery, not just luck?", type: "multiple_choice", options: ["A) Random drop systems", "B) Mastery and skill-based progression", "C) Pay-to-win mechanics", "D) Random level generation with no learning"], correct: "B", explanation: "Games feel rewarding when improved skill visibly leads to better outcomes. Pure randomness undermines mastery.", diff: "challenge" }
    ],
    exitTicket: {
      question: "What is the ideal relationship between player skill and game challenge?",
      type: "multiple_choice",
      options: ["A) Challenge should always exceed skill", "B) Skill should always exceed challenge", "C) Challenge should stay slightly above or match current skill to maintain flow", "D) They should be completely random"],
      correct: "C",
      explanation: "The flow channel sits between boredom (too easy) and anxiety (too hard). Good games keep players in this sweet spot."
    }
  },

  5: {
    day: 5, unit: 1, unitName: "Game Design Fundamentals",
    title: "Prototyping & Iteration",
    bellRinger: {
      question: "What is a game prototype?",
      type: "multiple_choice",
      options: ["A) The final, polished version of a game", "B) A quick, rough version used to test a game mechanic or idea", "C) The game's marketing demo", "D) A backup save file"],
      correct: "B",
      explanation: "Prototypes are fast, rough builds that let you test ideas before investing time in polish. 'Fail fast' is the motto."
    },
    practice: [
      { q: "What is the main goal of the prototyping stage?", type: "multiple_choice", options: ["A) To create final art assets", "B) To finalize the story", "C) To test whether a core mechanic is fun before committing resources", "D) To write the final code"], correct: "C", explanation: "Prototyping tests the idea. Is this mechanic fun? Does it feel good? Better to find out early than after months of work.", diff: "beginner" },
      { q: "What does 'iterate' mean in game development?", type: "multiple_choice", options: ["A) To restart from scratch", "B) To test, get feedback, and refine the design repeatedly", "C) To add more levels", "D) To change the art style"], correct: "B", explanation: "Iteration is the design loop: build → playtest → get feedback → improve. Great games go through many iterations.", diff: "beginner" },
      { q: "A playtest is most useful when players watch the designer and get hints.", type: "true_false", correct: "False", explanation: "Playtests are most valuable when players play without help. Watching where they get confused reveals design problems the developer missed.", diff: "intermediate" },
      { q: "Which approach is generally BETTER for small teams?", type: "multiple_choice", options: ["A) Design the entire game on paper for 6 months before building anything", "B) Build a playable prototype within days and test early and often", "C) Copy an existing game exactly", "D) Wait until funding is secured"], correct: "B", explanation: "Rapid prototyping lets teams discover problems early. Paper or digital — get something playable fast and learn from it.", diff: "intermediate" },
      { q: "What is 'feature creep'?", type: "multiple_choice", options: ["A) When enemies move faster each level", "B) Gradually adding more features than originally planned, delaying the project", "C) A type of horror game mechanic", "D) The process of optimizing code"], correct: "B", explanation: "Feature creep is a major project killer. Always ask 'Does this make the game more fun?' before adding anything new.", diff: "challenge" }
    ],
    exitTicket: {
      question: "Why is playtesting with REAL players (not the developer) important?",
      type: "multiple_choice",
      options: ["A) Developers already know their game too well to see its flaws", "B) Players are always right", "C) It saves money on development", "D) Players can write better code"],
      correct: "A",
      explanation: "Developers have 'designer's curse' — they can't experience their own game fresh. Real players reveal UX problems the designer is blind to."
    }
  },

  6: {
    day: 6, unit: 1, unitName: "Game Design Fundamentals",
    title: "Unit 1 Review — Design Principles",
    bellRinger: {
      question: "Which term describes the moment-to-moment, satisfying feeling of interacting with game controls?",
      type: "multiple_choice",
      options: ["A) Narrative arc", "B) Game feel / juice", "C) Scope management", "D) Iteration cycle"],
      correct: "B",
      explanation: "Game feel (or 'juice') is the tactile responsiveness of controls — screen shake, sound effects, animations that make actions feel satisfying."
    },
    practice: [
      { q: "A game with interesting choices but poor graphics is generally better than a game with beautiful graphics but no meaningful choices.", type: "true_false", correct: "True", explanation: "Gameplay is king. Many beloved classic games had simple graphics but deep, engaging mechanics. Graphics enhance; gameplay retains.", diff: "intermediate" },
      { q: "What does 'MDA' stand for in game design theory?", type: "multiple_choice", options: ["A) Mechanics, Dynamics, Aesthetics", "B) Motion, Design, Art", "C) Multiplayer, Difficulty, Adventure", "D) Map, Data, Assets"], correct: "A", explanation: "MDA Framework: Mechanics (rules) → Dynamics (emergent behavior) → Aesthetics (player experience/feelings). Designed from left, experienced from right.", diff: "challenge" },
      { q: "What is the 'core game loop'?", type: "multiple_choice", options: ["A) The tutorial level", "B) The repeated sequence of actions that keeps players engaged", "C) A programming function that loops", "D) The main menu"], correct: "B", explanation: "The core loop is what players do over and over: Act → Feedback → Reward → Repeat. If this isn't fun, nothing else matters.", diff: "beginner" },
      { q: "Why is 'player motivation' important in game design?", type: "multiple_choice", options: ["A) It determines the game's price", "B) Understanding why players play helps design rewards and progression that keep them engaged", "C) It only matters for multiplayer games", "D) It affects loading times"], correct: "B", explanation: "Knowing player motivations (achievement, exploration, social, etc.) helps designers craft experiences that resonate.", diff: "intermediate" },
      { q: "Which of the following best describes 'emergent gameplay'?", type: "multiple_choice", options: ["A) Gameplay scripted by the developer for cutscenes", "B) Unplanned, creative player behavior that arises from combining simple mechanics", "C) The tutorial that appears on first launch", "D) Gameplay that requires an internet connection"], correct: "B", explanation: "Emergent gameplay happens when players combine mechanics in ways designers didn't expect. Simple rules can create complex, creative play.", diff: "challenge" }
    ],
    exitTicket: {
      question: "Which of these is the MOST important first step in designing a new game?",
      type: "multiple_choice",
      options: ["A) Choosing a game engine", "B) Buying art assets", "C) Defining the core mechanic and testing if it's fun", "D) Writing a 100-page GDD"],
      correct: "C",
      explanation: "The core mechanic is the foundation. Until you know it's fun, every other decision is premature. Prototype first."
    }
  },

  7: {
    day: 7, unit: 2, unitName: "Pygame Basics",
    title: "Intro to Pygame — Setup & Window",
    bellRinger: {
      question: "What must you call FIRST before using any Pygame functions?",
      type: "multiple_choice",
      options: ["A) pygame.window()", "B) pygame.start()", "C) pygame.init()", "D) pygame.run()"],
      correct: "C",
      explanation: "pygame.init() initializes all Pygame subsystems (display, sound, events, etc.). Always call it first."
    },
    practice: [
      { q: 'What does pygame.display.set_mode((800, 600)) do?', type: "multiple_choice", options: ["A) Sets the game to fullscreen", "B) Creates a window 800 pixels wide and 600 pixels tall", "C) Sets the frame rate to 800", "D) Loads an image 800x600"], correct: "B", explanation: "set_mode() creates the display surface (window). The argument is a tuple (width, height).", diff: "beginner" },
      { q: "What is the Pygame 'main game loop' responsible for?", type: "multiple_choice", options: ["A) Loading assets from disk", "B) Continuously handling events, updating game state, and drawing each frame", "C) Saving the game", "D) Connecting to the internet"], correct: "B", explanation: "The main loop runs hundreds of times per second: process events → update → draw → repeat. It's the heartbeat of every Pygame game.", diff: "beginner" },
      { q: 'What does pygame.quit() do?', type: "multiple_choice", options: ["A) Crashes the program", "B) Saves and exits", "C) Uninitializes all Pygame subsystems", "D) Closes only the window"], correct: "C", explanation: "pygame.quit() shuts down all Pygame modules. Call it before sys.exit() to clean up properly.", diff: "intermediate" },
      { q: 'Which event type checks if the user clicked the X (close) button on the window?', type: "multiple_choice", options: ["A) pygame.QUIT", "B) pygame.CLOSE", "C) pygame.EXIT", "D) pygame.STOP"], correct: "A", explanation: "pygame.QUIT is posted when the user clicks the window's close button. Without handling it, the window can't be closed.", diff: "intermediate" },
      { q: "In Pygame, the coordinate (0, 0) is at the top-left corner of the window.", type: "true_false", correct: "True", explanation: "Pygame (and most computer graphics) uses a coordinate system where (0,0) is top-left. Y increases downward.", diff: "beginner" }
    ],
    exitTicket: {
      question: "What is the CORRECT order of operations in one frame of the main game loop?",
      type: "multiple_choice",
      options: ["A) Draw → Update → Handle Events", "B) Handle Events → Update → Draw", "C) Update → Draw → Handle Events", "D) Draw → Handle Events → Update"],
      correct: "B",
      explanation: "Standard order: Handle Events (input) → Update (game logic) → Draw (render). This ensures consistent behavior."
    }
  },

  8: {
    day: 8, unit: 2, unitName: "Pygame Basics",
    title: "Drawing Shapes & Colors",
    bellRinger: {
      question: "How are colors represented in Pygame?",
      type: "multiple_choice",
      options: ["A) As hex strings like '#FF0000'", "B) As (R, G, B) tuples with values 0–255", "C) As color names like 'red'", "D) As single integers 0–16777215"],
      correct: "B",
      explanation: "Pygame uses RGB tuples: (red, green, blue) each from 0–255. (255,0,0)=red, (0,255,0)=green, (0,0,255)=blue."
    },
    practice: [
      { q: 'What does pygame.draw.rect(screen, color, (x, y, w, h)) do?', type: "multiple_choice", options: ["A) Creates a new surface", "B) Draws a filled rectangle on the screen surface", "C) Loads a rectangle image", "D) Resizes the window"], correct: "B", explanation: "draw.rect() draws a rectangle. Parameters: surface, color, (x, y, width, height).", diff: "beginner" },
      { q: 'What RGB value creates the color black?', type: "multiple_choice", options: ["A) (255, 255, 255)", "B) (128, 128, 128)", "C) (0, 0, 0)", "D) (255, 0, 0)"], correct: "C", explanation: "(0, 0, 0) has no red, green, or blue — it's black. (255,255,255) is white.", diff: "beginner" },
      { q: 'Why must you call pygame.display.flip() (or update()) at the end of each frame?', type: "multiple_choice", options: ["A) It saves the game", "B) It moves the player character", "C) It updates the visible screen to show what was drawn", "D) It resets the clock"], correct: "C", explanation: "Pygame uses double-buffering. You draw to a hidden buffer, then flip() swaps it to the visible screen. Without it, nothing appears.", diff: "intermediate" },
      { q: 'To clear the screen each frame, you typically:', type: "multiple_choice", options: ["A) Call pygame.clear()", "B) Fill the entire surface with a background color", "C) Delete the surface and recreate it", "D) Restart pygame.init()"], correct: "B", explanation: "screen.fill(color) paints over everything from the previous frame. Without this, old frames 'ghost' on the screen.", diff: "intermediate" },
      { q: 'What does the last parameter (width) in pygame.draw.rect() control when set to 0?', type: "multiple_choice", options: ["A) Makes the rectangle invisible", "B) Draws a filled rectangle", "C) Draws only the outline", "D) Sets the border width to 0 pixels"], correct: "B", explanation: "A width of 0 (default) draws a filled shape. Any positive value draws an outline that many pixels wide.", diff: "challenge" }
    ],
    exitTicket: {
      question: "What is wrong with this drawing code?\n\nscreen.fill((0,0,0))\npygame.draw.circle(screen, (255,0,0), (400,300), 50)\n# flip() is never called",
      type: "multiple_choice",
      options: ["A) The color is wrong", "B) The circle will never appear on the visible screen", "C) fill() will erase the circle", "D) Nothing is wrong"],
      correct: "B",
      explanation: "Without display.flip() or display.update(), the drawing buffer is never swapped to the screen. Nothing visible will change."
    }
  },

  9: {
    day: 9, unit: 2, unitName: "Pygame Basics",
    title: "Images & Sprites",
    bellRinger: {
      question: "What function loads an image file into Pygame?",
      type: "multiple_choice",
      options: ["A) pygame.image.open()", "B) pygame.load()", "C) pygame.image.load()", "D) pygame.surface.load()"],
      correct: "C",
      explanation: "pygame.image.load('filename.png') loads an image and returns a Surface. Use .convert() or .convert_alpha() for performance."
    },
    practice: [
      { q: 'What does screen.blit(image, (x, y)) do?', type: "multiple_choice", options: ["A) Saves image to disk", "B) Draws the image onto the screen surface at position (x,y)", "C) Loads the image", "D) Flips the image horizontally"], correct: "B", explanation: "blit() copies one surface (image) onto another (screen) at the given position. It's how you draw sprites.", diff: "beginner" },
      { q: "Why should you call .convert() or .convert_alpha() after loading an image?", type: "multiple_choice", options: ["A) To change the image's colors", "B) To convert the file to a different format on disk", "C) To convert the surface format to match the display, improving speed", "D) To add transparency"], correct: "C", explanation: ".convert() optimizes the surface format to match the display, making blitting much faster. Use .convert_alpha() if the image has transparency.", diff: "intermediate" },
      { q: 'What is a Pygame "Surface"?', type: "multiple_choice", options: ["A) The physical screen of the computer", "B) A 2D grid of pixels that can be drawn on and blitted", "C) A 3D mesh for rendering", "D) The game window title"], correct: "B", explanation: "A Surface is an object representing a 2D image. The screen is a Surface. Images are Surfaces. You can draw on Surfaces.", diff: "intermediate" },
      { q: "Which image format supports transparency (alpha channel) in Pygame?", type: "multiple_choice", options: ["A) BMP", "B) JPG", "C) PNG", "D) TGA"], correct: "C", explanation: "PNG supports an alpha (transparency) channel. JPG doesn't support transparency. Use PNG for sprites with transparent backgrounds.", diff: "intermediate" },
      { q: 'What does pygame.transform.scale(image, (new_w, new_h)) do?', type: "multiple_choice", options: ["A) Saves a scaled version of the image to disk", "B) Returns a new surface scaled to the specified size", "C) Scales the game window", "D) Rotates the image"], correct: "B", explanation: "transform.scale() creates a resized copy of the surface. The original is unchanged. Use this to resize sprites.", diff: "challenge" }
    ],
    exitTicket: {
      question: "What is the correct order to show a sprite on screen?",
      type: "multiple_choice",
      options: ["A) blit() → load() → display.flip()", "B) load() → blit() → display.flip()", "C) display.flip() → load() → blit()", "D) load() → display.flip() → blit()"],
      correct: "B",
      explanation: "Load the image first, blit it to the screen surface, then flip the display to make it visible."
    }
  },

  10: {
    day: 10, unit: 2, unitName: "Pygame Basics",
    title: "Keyboard & Mouse Input",
    bellRinger: {
      question: "What function returns a dictionary of all currently pressed keys?",
      type: "multiple_choice",
      options: ["A) pygame.key.pressed()", "B) pygame.keyboard.get()", "C) pygame.key.get_pressed()", "D) pygame.input.keys()"],
      correct: "C",
      explanation: "pygame.key.get_pressed() returns a sequence where each key constant index is True if that key is currently held down."
    },
    practice: [
      { q: 'What is the difference between handling a KEYDOWN event and using get_pressed()?', type: "multiple_choice", options: ["A) KEYDOWN is for letters; get_pressed() is for arrows", "B) KEYDOWN fires once when pressed; get_pressed() is True every frame the key is held", "C) They work exactly the same", "D) get_pressed() only works in the event queue"], correct: "B", explanation: "KEYDOWN fires once on press. get_pressed() is checked every frame — better for smooth movement that continues while held.", diff: "intermediate" },
      { q: 'How do you check if the LEFT arrow key is held?\n\nkeys = pygame.key.get_pressed()', type: "multiple_choice", options: ["A) keys[pygame.K_LEFT]", "B) keys.LEFT", 'C) keys == "left"', "D) pygame.K_LEFT in keys"], correct: "A", explanation: "Use the key constant as an index: keys[pygame.K_LEFT] is True if the left arrow is currently pressed.", diff: "beginner" },
      { q: "Mouse position in Pygame is returned as:", type: "multiple_choice", options: ["A) A single integer", "B) A (x, y) tuple", "C) Two separate function calls", "D) A dictionary"], correct: "B", explanation: "pygame.mouse.get_pos() returns (x, y) — the current mouse position relative to the window.", diff: "beginner" },
      { q: 'Which event type is triggered when the mouse button is pressed DOWN?', type: "multiple_choice", options: ["A) pygame.MOUSEPRESS", "B) pygame.MOUSEBUTTONDOWN", "C) pygame.MOUSECLICK", "D) pygame.MOUSEDOWN"], correct: "B", explanation: "MOUSEBUTTONDOWN fires when a button is pressed. Check event.button: 1=left, 2=middle, 3=right.", diff: "intermediate" },
      { q: "Using get_pressed() for movement requires multiplying by a speed value and delta time for smooth motion.", type: "true_false", correct: "True", explanation: "Without a speed multiplier, movement is 1 pixel/frame. Without delta time, movement speed varies with frame rate.", diff: "challenge" }
    ],
    exitTicket: {
      question: "For SMOOTH, continuous player movement while a key is held, which approach is best?",
      type: "multiple_choice",
      options: ["A) Handle KEYDOWN events", "B) Call pygame.key.get_pressed() each frame", "C) Handle KEYUP events", "D) Use pygame.mouse.get_pos()"],
      correct: "B",
      explanation: "get_pressed() reads current key state every frame, perfect for smooth continuous movement while a key is held down."
    }
  },

  11: {
    day: 11, unit: 2, unitName: "Pygame Basics",
    title: "Animation & Frame Rate",
    bellRinger: {
      question: "What is 'frame rate' in a game?",
      type: "multiple_choice",
      options: ["A) The resolution of the game window", "B) How many complete game loop iterations (frames) are rendered per second", "C) The speed of player movement", "D) The file size of each image"],
      correct: "B",
      explanation: "Frame rate (FPS) is how many times per second the game updates and draws. 60 FPS is standard. Higher = smoother."
    },
    practice: [
      { q: 'What does pygame.time.Clock().tick(60) do?', type: "multiple_choice", options: ["A) Waits 60 milliseconds", "B) Limits the game loop to 60 FPS by pausing if running faster", "C) Returns the current time in minutes", "D) Sets the animation speed to 60"], correct: "B", explanation: "clock.tick(fps) caps the frame rate. If the loop runs faster than 60 FPS, tick() adds a small delay. It also returns milliseconds since last call.", diff: "beginner" },
      { q: "What is sprite animation in Pygame?", type: "multiple_choice", options: ["A) Moving a sprite across the screen", "B) Quickly cycling through a series of images to create the illusion of motion", "C) Rotating a sprite", "D) Scaling a sprite up and down"], correct: "B", explanation: "Sprite animation cycles through frames (individual images) at timed intervals — like a flipbook.", diff: "beginner" },
      { q: 'How do you track animation frame timing properly?', type: "multiple_choice", options: ["A) Count game loop iterations", "B) Use a timer that increments by delta time (ms since last frame)", "C) Use pygame.sleep()", "D) Check the system clock each frame"], correct: "B", explanation: "Using delta time makes animation frame-rate independent. If you count loops, animation speed depends on FPS.", diff: "intermediate" },
      { q: "Delta time (dt) is the time in milliseconds since the last frame.", type: "true_false", correct: "True", explanation: "clock.tick() returns delta time. Multiplying movement by dt/1000 makes movement speed consistent regardless of FPS.", diff: "intermediate" },
      { q: 'What is a "sprite sheet"?', type: "multiple_choice", options: ["A) A list of all sprites in a game", "B) A single image containing multiple animation frames arranged in a grid", "C) The code that controls sprite movement", "D) The blueprint for a sprite's hitbox"], correct: "B", explanation: "Sprite sheets pack multiple animation frames into one file. You blit specific sub-regions using pygame.Surface.subsurface() or by slicing coordinates.", diff: "challenge" }
    ],
    exitTicket: {
      question: "Why is it important to multiply movement speed by delta time?",
      type: "multiple_choice",
      options: ["A) To make the game run faster", "B) To ensure movement is the same speed regardless of frame rate", "C) To prevent the player from moving off-screen", "D) To improve image quality"],
      correct: "B",
      explanation: "Frame-rate-independent movement: if the game drops from 60 to 30 FPS, dt doubles so movement stays the same real-world speed."
    }
  },

  12: {
    day: 12, unit: 3, unitName: "Game Mechanics",
    title: "Collision Detection",
    bellRinger: {
      question: "What is collision detection in game development?",
      type: "multiple_choice",
      options: ["A) Detecting when the game crashes", "B) Determining when two game objects occupy the same space", "C) Detecting controller input", "D) Finding bugs in collision-related code"],
      correct: "B",
      explanation: "Collision detection checks if objects (player, enemies, walls, bullets) are overlapping or touching, triggering game responses."
    },
    practice: [
      { q: 'What does pygame.Rect.colliderect(other_rect) return?', type: "multiple_choice", options: ["A) The area of overlap", "B) True if the two rectangles overlap, False if they don't", "C) The distance between rectangles", "D) A new rectangle representing the overlap"], correct: "B", explanation: "colliderect() is the simplest collision check — it returns True/False for rectangle overlap. Great for most 2D games.", diff: "beginner" },
      { q: "What is an AABB collision?", type: "multiple_choice", options: ["A) Advanced AI Battle Box", "B) Axis-Aligned Bounding Box — a simple rectangle collision method", "C) An animated billboard", "D) An audio buffer for sound effects"], correct: "B", explanation: "AABB collisions use axis-aligned rectangles. They're fast and simple — the most common collision method in 2D games.", diff: "intermediate" },
      { q: "Pixel-perfect collision is always the best choice for game collision detection.", type: "true_false", correct: "False", explanation: "Pixel-perfect collision is expensive (checks every pixel). Rectangle/circle collisions are fast and 'good enough' for most games. Perfect is the enemy of good.", diff: "challenge" },
      { q: 'What is a "hitbox"?', type: "multiple_choice", options: ["A) The visual image of a character", "B) The invisible area used for collision detection (often simpler than the visible sprite)", "C) The area where the player can be hit by enemies only", "D) A health bar"], correct: "B", explanation: "Hitboxes are typically simpler shapes (rectangles) than the visual sprite. This avoids unfair collisions from irregular sprite edges.", diff: "intermediate" },
      { q: 'pygame.sprite.spritecollide(sprite, group, dokill) is useful for:', type: "multiple_choice", options: ["A) Detecting collisions between one sprite and all sprites in a group", "B) Drawing sprite collision outlines", "C) Animating sprites when they collide", "D) Sorting sprites by position"], correct: "A", explanation: "spritecollide() checks one sprite against a whole group, returning a list of colliding sprites. dokill=True removes them.", diff: "challenge" }
    ],
    exitTicket: {
      question: "What does it mean when a collision is 'false positive'?",
      type: "multiple_choice",
      options: ["A) The collision detection reports a collision when none actually occurred", "B) The game correctly detects a collision", "C) A collision that helps the player", "D) A collision that doesn't deal damage"],
      correct: "A",
      explanation: "False positives (ghost collisions) happen when the hitbox is larger than the sprite. Players feel cheated by hits that didn't look like they should connect."
    }
  },

  13: {
    day: 13, unit: 3, unitName: "Game Mechanics",
    title: "Gravity & Jumping",
    bellRinger: {
      question: "How is gravity typically simulated in a 2D platformer?",
      type: "multiple_choice",
      options: ["A) By moving the player left and right", "B) By continuously adding a downward velocity each frame", "C) By tilting the entire game world", "D) By making jumps predetermined arcs"],
      correct: "B",
      explanation: "Gravity is a constant downward acceleration applied every frame. velocity_y += gravity each frame pulls everything down."
    },
    practice: [
      { q: "In a platformer, what stops the player from falling through the floor?", type: "multiple_choice", options: ["A) Setting velocity to zero automatically", "B) Collision detection with the floor surface", "C) A hard-coded Y minimum", "D) The pygame.gravity function"], correct: "B", explanation: "When the player collides with the floor, you reset velocity_y to 0 and set the player's y position to sit on top of the floor.", diff: "beginner" },
      { q: 'What is "velocity" in game physics?', type: "multiple_choice", options: ["A) The player's score", "B) The rate of change of position (speed + direction)", "C) The weight of a game object", "D) The acceleration of gravity"], correct: "B", explanation: "Velocity has both magnitude (speed) and direction. In 2D: vel_x = horizontal speed, vel_y = vertical speed.", diff: "beginner" },
      { q: "To make a player jump, you typically:", type: "multiple_choice", options: ["A) Move the player up by a fixed amount each frame", "B) Set the vertical velocity to a large negative number (upward in Pygame)", "C) Disable gravity temporarily", "D) Teleport the player to the jump height"], correct: "B", explanation: "In Pygame (y increases downward), jumping means vel_y = -JUMP_SPEED. Gravity then gradually pulls vel_y back up (positive) causing the arc.", diff: "intermediate" },
      { q: 'What is "coyote time" in platformer design?', type: "multiple_choice", options: ["A) A brief period after walking off a ledge where the player can still jump", "B) The animation of a character falling", "C) A debug tool for testing jumps", "D) The time it takes to respawn after falling"], correct: "A", explanation: "Coyote time (named after Road Runner cartoons) gives players a short grace window to jump even after walking off a platform — it feels fair.", diff: "challenge" },
      { q: "Double jumping is achieved by:", type: "multiple_choice", options: ["A) Pressing jump twice on the ground", "B) Tracking a jump count and allowing another velocity_y reset while airborne", "C) Disabling gravity for 0.5 seconds", "D) Increasing the player's height"], correct: "B", explanation: "Track jumps_remaining (start at 2). Each jump decrements it. When 0, jumps are disallowed. Reset on landing.", diff: "challenge" }
    ],
    exitTicket: {
      question: "Why does gravity feel unrealistic if applied as a fixed position offset instead of velocity?",
      type: "multiple_choice",
      options: ["A) Fixed offsets make the player too fast", "B) Velocity-based gravity accelerates naturally; fixed offsets create instant, robotic movement", "C) Fixed offsets break collision detection", "D) There is no difference"],
      correct: "B",
      explanation: "Real gravity accelerates (gets faster over time). Velocity += gravity accumulates naturally, creating the arc. Fixed offsets feel stiff and unnatural."
    }
  },

  14: {
    day: 14, unit: 3, unitName: "Game Mechanics",
    title: "Score, Lives & Game States",
    bellRinger: {
      question: "What is a 'game state' in game development?",
      type: "multiple_choice",
      options: ["A) The amount of RAM the game uses", "B) A distinct mode of the game (main menu, playing, paused, game over)", "C) The player's current score", "D) The save file on disk"],
      correct: "B",
      explanation: "Game states manage different modes: MENU, PLAYING, PAUSED, GAME_OVER. Each state has different logic and rendering."
    },
    practice: [
      { q: "Which is the cleanest way to manage game states in Pygame?", type: "multiple_choice", options: ["A) Use hundreds of if/else checks throughout the code", "B) Use a variable to track the current state and change behavior accordingly", "C) Create a separate file for each state", "D) Restart the program for each state change"], correct: "B", explanation: "A state variable (e.g., game_state = 'PLAYING') lets you route logic and rendering based on the current mode.", diff: "beginner" },
      { q: 'How do you render text to a Pygame surface?', type: "multiple_choice", options: ["A) pygame.draw.text()", "B) Create a Font, call font.render(), then blit() the result", "C) screen.write()", "D) pygame.text.show()"], correct: "B", explanation: "Font workflow: font = pygame.font.SysFont(...) → text_surf = font.render('text', True, color) → screen.blit(text_surf, pos)", diff: "intermediate" },
      { q: "What should happen to the lives counter when a player dies?", type: "multiple_choice", options: ["A) Reset to max", "B) Decrement by 1, then check if it reaches 0 (game over)", "C) Immediately end the game", "D) Add a bonus life"], correct: "B", explanation: "lives -= 1, then if lives <= 0: game_state = 'GAME_OVER'. If lives > 0, respawn the player.", diff: "beginner" },
      { q: "Score tracking typically uses which data type?", type: "multiple_choice", options: ["A) String", "B) Float", "C) Integer", "D) Boolean"], correct: "C", explanation: "Scores are whole numbers. Use integer variables: score = 0, then score += points_earned.", diff: "beginner" },
      { q: "What is a 'high score table' and how is it typically persisted?", type: "multiple_choice", options: ["A) A variable reset each run; no persistence needed", "B) A list of top scores saved to a file so they survive after the game closes", "C) An online leaderboard requiring internet", "D) Scores displayed only during gameplay"], correct: "B", explanation: "High scores are saved to a file (JSON, pickle, or plain text) so they persist between sessions. Load on start, save when updated.", diff: "challenge" }
    ],
    exitTicket: {
      question: "When should the 'GAME OVER' state be triggered?",
      type: "multiple_choice",
      options: ["A) When the player pauses", "B) When the player's lives reach 0 (or another loss condition is met)", "C) After 5 minutes of gameplay", "D) When the game is minimized"],
      correct: "B",
      explanation: "GAME_OVER triggers on loss conditions: lives == 0, timer expired, health depleted, etc. This separates loss logic from normal gameplay."
    }
  },

  15: {
    day: 15, unit: 3, unitName: "Game Mechanics",
    title: "Sound Effects & Music",
    bellRinger: {
      question: "Which Pygame module handles sound effects and music?",
      type: "multiple_choice",
      options: ["A) pygame.audio", "B) pygame.sound", "C) pygame.mixer", "D) pygame.media"],
      correct: "C",
      explanation: "pygame.mixer handles all audio. Use pygame.mixer.Sound() for short effects and pygame.mixer.music for background music."
    },
    practice: [
      { q: 'What is the difference between pygame.mixer.Sound and pygame.mixer.music?', type: "multiple_choice", options: ["A) Sound is for music; music is for effects", "B) Sound loads fully into memory (short clips); music streams from disk (longer files)", "C) They are identical", "D) Sound requires headphones; music works on speakers"], correct: "B", explanation: "Sound loads entirely into RAM — great for short SFX. Music streams from disk — essential for long background tracks.", diff: "intermediate" },
      { q: 'How do you play a sound effect loaded as "jump_sfx"?', type: "multiple_choice", options: ["A) jump_sfx.start()", "B) jump_sfx.play()", "C) pygame.play(jump_sfx)", "D) jump_sfx.run()"], correct: "B", explanation: "Call .play() on the Sound object. You can also pass loops=-1 to loop forever.", diff: "beginner" },
      { q: "Audio adds significantly to the 'game feel' even when players don't consciously notice it.", type: "true_false", correct: "True", explanation: "Studies show players rate games with sound as more responsive and fun than the same game without sound. Audio is crucial for juice.", diff: "intermediate" },
      { q: 'What does pygame.mixer.music.set_volume(0.5) do?', type: "multiple_choice", options: ["A) Sets the volume to 50% (0.0 = silent, 1.0 = full)", "B) Sets the volume to 50 decibels", "C) Mutes all sound effects", "D) Increases volume by 50%"], correct: "A", explanation: "Volume ranges from 0.0 (silent) to 1.0 (full). 0.5 is 50% volume.", diff: "beginner" },
      { q: "Which audio format is generally preferred for background music in Pygame?", type: "multiple_choice", options: ["A) WAV (always)", "B) MP3 or OGG (compressed formats for long tracks)", "C) MIDI only", "D) PNG"], correct: "B", explanation: "WAV is uncompressed (huge files for music). OGG or MP3 compress well for music. WAV is fine for short sound effects.", diff: "challenge" }
    ],
    exitTicket: {
      question: "Why should you call pygame.mixer.init() separately from pygame.init()?",
      type: "multiple_choice",
      options: ["A) pygame.init() doesn't initialize the mixer", "B) To set specific frequency and buffer settings for better audio quality", "C) You don't need to — pygame.init() handles it", "D) pygame.mixer.init() is required on Windows only"],
      correct: "B",
      explanation: "While pygame.init() does init the mixer with defaults, calling pygame.mixer.init(frequency, size, channels, buffer) lets you customize audio settings for better quality."
    }
  },

  16: {
    day: 16, unit: 4, unitName: "Level Design",
    title: "Level Design Principles",
    bellRinger: {
      question: "What is the primary job of level design?",
      type: "multiple_choice",
      options: ["A) To make levels look as complex as possible", "B) To guide player experience — teaching mechanics, building challenge, and creating memorable moments", "C) To maximize the number of enemies in each level", "D) To fill the world with collectibles"],
      correct: "B",
      explanation: "Great level design teaches through play, creates flow, and produces memorable experiences — all while feeling natural, not scripted."
    },
    practice: [
      { q: "What does 'teach, test, twist, celebrate' mean in level design?", type: "multiple_choice", options: ["A) A scoring formula", "B) A framework: introduce a mechanic, challenge it, add a twist, reward mastery", "C) The four acts of a game story", "D) Enemy behavior pattern names"], correct: "B", explanation: "This framework from Mark Brown: introduce (teach) a mechanic safely, test it in a challenge, add a twist, then let players feel the mastery.", diff: "intermediate" },
      { q: "Which visual technique helps guide players through a level without explicit arrows?", type: "multiple_choice", options: ["A) Making all walls the same color", "B) Environmental storytelling, lighting contrast, and object placement that draws the eye", "C) Adding blinking arrows at every turn", "D) Removing all collectibles"], correct: "B", explanation: "Subtle visual cues (light, color, paths, architecture) naturally guide player attention. Explicit UI arrows break immersion.", diff: "intermediate" },
      { q: "A 'gatekeeper' in level design is an obstacle that prevents progress until the player demonstrates mastery.", type: "true_false", correct: "True", explanation: "Gatekeepers ensure players have learned required skills before advancing. Example: a door that only opens after defeating all enemies in a room.", diff: "challenge" },
      { q: "What is 'pacing' in level design?", type: "multiple_choice", options: ["A) The walking speed of the player", "B) The rhythm of challenge and rest — alternating intense moments with calmer ones", "C) How fast enemies move", "D) The length of loading screens"], correct: "B", explanation: "Good pacing creates tension and release. Constant intensity causes fatigue; constant calm causes boredom. Vary the rhythm.", diff: "intermediate" },
      { q: "What is a 'safe room' or 'rest area' in a level?", type: "multiple_choice", options: ["A) A room with no gameplay value", "B) A low-stress area between challenges where players can recover and prepare", "C) The tutorial section", "D) A room with infinite health packs"], correct: "B", explanation: "Rest areas give players breathing room, let tension dissipate, and prepare them emotionally for the next challenge.", diff: "beginner" }
    ],
    exitTicket: {
      question: "What is 'environmental storytelling' in level design?",
      type: "multiple_choice",
      options: ["A) Text boxes that tell the story", "B) Cutscenes between levels", "C) Using the environment itself (objects, layout, lighting) to convey story and world-building", "D) The narrator describing each room"],
      correct: "C",
      explanation: "Environmental storytelling lets players discover lore through what they see and explore — scattered objects, ruins, lighting — without explicit exposition."
    }
  },

  17: {
    day: 17, unit: 4, unitName: "Level Design",
    title: "Tile Maps & Level Structure",
    bellRinger: {
      question: "What is a tile map?",
      type: "multiple_choice",
      options: ["A) A map of all enemies in a level", "B) A grid of small, reusable tiles used to build game levels", "C) A minimap displayed on the HUD", "D) The code that handles player navigation"],
      correct: "B",
      explanation: "Tile maps use a grid of reusable square/rectangular tiles to efficiently build large levels with a small set of images."
    },
    practice: [
      { q: "What is the main advantage of using tile maps for level design?", type: "multiple_choice", options: ["A) Tile maps look more realistic than hand-drawn art", "B) Levels can be built from a small set of reusable tiles, saving memory and enabling easy editing", "C) Tile maps support physics automatically", "D) They are faster to render than sprites"], correct: "B", explanation: "With tile maps, you build levels by repeating small tiles. One 32x32 tile image can be used thousands of times to fill a large level.", diff: "beginner" },
      { q: "In a tile map represented as a 2D list, what does each number typically represent?", type: "multiple_choice", options: ["A) The player's position", "B) A tile type (e.g., 0=empty, 1=wall, 2=platform, 3=spike)", "C) The enemy's health", "D) The RGB color of that cell"], correct: "B", explanation: "Each cell holds a tile ID. 0 might be empty, 1 a wall, 2 a platform. The renderer draws the matching tile image.", diff: "intermediate" },
      { q: "What tool is commonly used to design tile-based levels outside of code?", type: "multiple_choice", options: ["A) Photoshop", "B) Tiled Map Editor", "C) Excel", "D) Microsoft Paint"], correct: "B", explanation: "Tiled (mapeditor.org) is a popular free level editor. It exports TMX files that game engines can load.", diff: "intermediate" },
      { q: "Tile-based collision detection works by checking which tile the player overlaps and responding based on the tile type.", type: "true_false", correct: "True", explanation: "Convert the player's position to tile coordinates, look up the tile type, and respond: wall tiles block movement, spike tiles deal damage, etc.", diff: "challenge" },
      { q: "What is a 'tileset'?", type: "multiple_choice", options: ["A) A single large image containing all tile graphics arranged in a grid", "B) The 2D array that represents level layout", "C) A folder of individual tile images", "D) The collision data for tiles"], correct: "A", explanation: "A tileset is one image file with all tiles arranged in a grid. You slice out individual tiles by calculating their position: tile_x = (id % cols) * tile_w.", diff: "challenge" }
    ],
    exitTicket: {
      question: "Why is a tile-based level representation memory-efficient?",
      type: "multiple_choice",
      options: ["A) Each tile is a different image", "B) Only one image per tile type is needed, no matter how many times it appears in the level", "C) Tiles are automatically compressed by Pygame", "D) Tile maps don't use RAM"],
      correct: "B",
      explanation: "One 32x32 tile image takes minimal memory. Using it 10,000 times in a level costs no extra memory — just an integer in the 2D array."
    }
  },

  18: {
    day: 18, unit: 4, unitName: "Level Design",
    title: "Enemies & Basic AI",
    bellRinger: {
      question: "What is the simplest form of enemy AI in a platformer?",
      type: "multiple_choice",
      options: ["A) Pathfinding using A* algorithm", "B) Walking back and forth and reversing direction at walls/edges", "C) Following the player using GPS", "D) Randomly teleporting around the level"],
      correct: "B",
      explanation: "The classic patrol: move in one direction, detect a wall or ledge edge, reverse. Simple, readable, and surprisingly effective."
    },
    practice: [
      { q: "What is a 'finite state machine' (FSM) in AI design?", type: "multiple_choice", options: ["A) A machine that limits the number of enemies", "B) A model where an entity is in one state at a time (patrol, chase, attack) and transitions between them based on conditions", "C) A physics simulation for robots", "D) A type of collision system"], correct: "B", explanation: "FSMs are the backbone of simple AI: PATROL → CHASE (if player nearby) → ATTACK (if in range) → PATROL (if player escapes).", diff: "intermediate" },
      { q: "How would you detect if the player is within 'aggro range' of an enemy?", type: "multiple_choice", options: ["A) Check if the player pressed a button", "B) Calculate the distance between player and enemy positions", "C) Wait for a timer", "D) Check if the enemy is touching the player"], correct: "B", explanation: "Distance = sqrt((ex-px)² + (ey-py)²) or simpler: abs(ex-px) < range. If distance < aggro_range, switch to chase state.", diff: "intermediate" },
      { q: "Enemy difficulty can be tuned by adjusting:", type: "multiple_choice", options: ["A) The enemy's texture quality", "B) Speed, aggro range, attack damage, and reaction time", "C) The number of polygons in the enemy model", "D) The enemy's sound effects"], correct: "B", explanation: "These are the key tuning parameters. Increase speed/range/damage for harder enemies; reduce for easier. Small changes have big impact.", diff: "beginner" },
      { q: "What is 'pathfinding' in game AI?", type: "multiple_choice", options: ["A) The player finding their way through a maze", "B) An algorithm that calculates the optimal route from point A to point B, avoiding obstacles", "C) A system for finding lost game files", "D) A debugging tool for AI behavior"], correct: "B", explanation: "Pathfinding (like A* algorithm) lets enemies navigate complex environments intelligently. Much more complex than simple patrol behavior.", diff: "challenge" },
      { q: "A good game enemy should feel challenging but also fair and predictable enough to learn.", type: "true_false", correct: "True", explanation: "Random unpredictable enemies feel unfair. Well-designed enemies have readable tells and patterns players can learn — challenge through skill, not RNG.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "In a simple patrol enemy, what should happen when the enemy reaches a wall?",
      type: "multiple_choice",
      options: ["A) The enemy should stop permanently", "B) The enemy should reverse direction", "C) The enemy should jump over the wall", "D) The enemy should teleport to the other side"],
      correct: "B",
      explanation: "Classic patrol: vel_x *= -1 reverses direction. Also flip the sprite. Check for wall collision or ledge edge to trigger the reversal."
    }
  }

};

const TOTAL_DAYS_VGD = Object.keys(LESSONS_VGD).length;

function getLessonVGD(day) {
  return LESSONS_VGD[day] || null;
}
