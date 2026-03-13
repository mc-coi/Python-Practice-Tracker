// ============================================================
// Coding I - Daily Lesson Data
// All 54 days: Bell Ringer, Practice Problems, Exit Ticket
// ============================================================

const LESSONS = {

  // ══════════════════════════════════════════════
  // UNIT 1: INTRO TO PROGRAMMING (Days 1–6)
  // ══════════════════════════════════════════════

  1: {
    day: 1, unit: 1, unitName: "Intro to Programming",
    title: "What is Computer Science?",
    bellRinger: {
      question: "Which of the following best describes an algorithm?",
      type: "multiple_choice",
      options: ["A) A type of computer hardware", "B) An ordered set of precise steps to solve a problem", "C) A programming language like Python", "D) A math formula"],
      correct: "B",
      explanation: "An algorithm is an ordered, precise, unambiguous, and finite set of steps to solve a problem."
    },
    practice: [
      { q: "What symbol is used at the start of a comment in Python?", type: "multiple_choice", options: ["A) //", "B) /*", "C) #", "D) --"], correct: "C", explanation: "Python uses # to start a single-line comment.", diff: "beginner" },
      { q: "Which shape represents a DECISION in a flowchart?", type: "multiple_choice", options: ["A) Rectangle", "B) Oval", "C) Diamond", "D) Arrow"], correct: "C", explanation: "Diamonds represent decisions (yes/no branches). Rectangles are processes, ovals are start/end.", diff: "beginner" },
      { q: "An algorithm must have a definite end point — it cannot run forever.", type: "true_false", correct: "True", explanation: "Algorithms must be finite — they must eventually stop. An infinite loop is NOT a valid algorithm.", diff: "beginner" },
      { q: "Computer Science is best defined as:", type: "multiple_choice", options: ["A) The study of building computers", "B) Problem-solving using computational thinking", "C) Only writing code", "D) Only using the internet"], correct: "B", explanation: "CS is about computational thinking and problem-solving — hardware building is just one small part.", diff: "intermediate" },
      { q: "Which of the following is NOT a characteristic of a good algorithm?", type: "multiple_choice", options: ["A) Precise", "B) Unambiguous", "C) Runs forever", "D) Effective"], correct: "C", explanation: "Algorithms must be finite (they end). Precise, unambiguous, and effective are all required characteristics.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "A flowchart oval shape represents:",
      type: "multiple_choice",
      options: ["A) A decision point", "B) A process step", "C) Start or End", "D) Data input"],
      correct: "C",
      explanation: "Ovals (also called terminals) represent the start or end of a flowchart."
    }
  },

  2: {
    day: 2, unit: 1, unitName: "Intro to Programming",
    title: "Setting Up Python & First Program",
    bellRinger: {
      question: "What does the print() function do in Python?",
      type: "multiple_choice",
      options: ["A) Stores a value in memory", "B) Gets input from the user", "C) Displays text to the screen", "D) Adds two numbers"],
      correct: "C",
      explanation: "print() outputs/displays text or values to the console (screen)."
    },
    practice: [
      { q: 'What will this code output?\n\nprint("Hello, World!")', type: "multiple_choice", options: ["A) Hello, World!", "B) \"Hello, World!\"", "C) hello, world!", "D) Nothing"], correct: "A", explanation: "print() displays the text inside the quotes. The quotes themselves are NOT printed.", diff: "beginner" },
      { q: 'What will this code output?\n\nprint("Python")\nprint("is")\nprint("fun")', type: "multiple_choice", options: ["A) Python is fun", "B) Python\nis\nfun (on 3 separate lines)", "C) \"Python\" \"is\" \"fun\"", "D) An error"], correct: "B", explanation: "Each print() statement outputs on its own line by default.", diff: "beginner" },
      { q: "Python is case-sensitive. Which of these would cause an error?", type: "multiple_choice", options: ['A) print("hello")', 'B) Print("hello")', 'C) # this is a comment', "D) Both A and B"], correct: "B", explanation: "Print (capital P) is not a valid Python function — Python is case-sensitive. Use lowercase print().", diff: "intermediate" },
      { q: "Comments in Python are executed by the interpreter.", type: "true_false", correct: "False", explanation: "Comments start with # and are completely ignored by Python. They are only for human readers.", diff: "beginner" },
      { q: 'Which print statement correctly uses single quotes?\n\nA) print(\'Hello\')\nB) print(Hello\')\nC) print("Hello\')\nD) print("Hello)', type: "multiple_choice", options: ["A) print('Hello')", "B) print(Hello')", "C) print(\"Hello')", "D) print(\"Hello)"], correct: "A", explanation: "Both single and double quotes work in Python, but they must match (open and close with the same type).", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output of:\n\nprint("My name is")\nprint("Python")',
      type: "multiple_choice",
      options: ["A) My name is Python", "B) My name is\nPython (two lines)", "C) \"My name is\"\n\"Python\"", "D) Error"],
      correct: "B",
      explanation: "Each print() outputs on a new line, so these appear on two separate lines."
    }
  },

  3: {
    day: 3, unit: 1, unitName: "Intro to Programming",
    title: "Variables & Data Types",
    bellRinger: {
      question: "What is a variable in programming?",
      type: "multiple_choice",
      options: ["A) A fixed value that never changes", "B) A named container that stores a value", "C) A type of loop", "D) A math operator"],
      correct: "B",
      explanation: "A variable is a named container (or label) in memory that stores a value which can change."
    },
    practice: [
      { q: "Which of the following is a valid variable name in Python?", type: "multiple_choice", options: ["A) 2score", "B) my score", "C) my_score", "D) class"], correct: "C", explanation: "Variable names can't start with a number, can't have spaces, and can't be reserved keywords like 'class'. Underscores are fine.", diff: "beginner" },
      { q: 'What is the data type of the value in:\n\nname = "Alice"', type: "multiple_choice", options: ["A) int", "B) float", "C) str", "D) bool"], correct: "C", explanation: "Text surrounded by quotes is a string (str) data type.", diff: "beginner" },
      { q: 'What will this code output?\n\nx = 10\nx = 20\nprint(x)', type: "multiple_choice", options: ["A) 10", "B) 20", "C) 10 20", "D) Error"], correct: "B", explanation: "Variables can be reassigned. The second assignment (x = 20) overwrites the first, so x is 20.", diff: "intermediate" },
      { q: "Which data type would you use to store a true/false value?", type: "multiple_choice", options: ["A) str", "B) int", "C) float", "D) bool"], correct: "D", explanation: "The bool (Boolean) data type stores only True or False values.", diff: "beginner" },
      { q: 'What does type(3.14) return?', type: "multiple_choice", options: ["A) int", "B) float", "C) str", "D) bool"], correct: "B", explanation: "3.14 is a decimal number, which is a float (floating-point) data type.", diff: "intermediate" },
      { q: 'What is the output?\n\nis_sunny = True\nprint(type(is_sunny))', type: "multiple_choice", options: ["A) True", "B) <class 'str'>", "C) <class 'bool'>", "D) <class 'int'>"], correct: "C", explanation: "True and False are bool values. type() returns the class name.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nage = 16\nage = 17\nprint(age)',
      type: "multiple_choice",
      options: ["A) 16", "B) 17", "C) 16 17", "D) Error"],
      correct: "B",
      explanation: "age is reassigned to 17, so print(age) outputs 17."
    }
  },

  4: {
    day: 4, unit: 1, unitName: "Intro to Programming",
    title: "User Input & Simple Calculations",
    bellRinger: {
      question: "What data type does the input() function ALWAYS return?",
      type: "multiple_choice",
      options: ["A) int", "B) float", "C) str", "D) bool"],
      correct: "C",
      explanation: "input() ALWAYS returns a string (str), even if the user types a number. You must convert it with int() or float() for math."
    },
    practice: [
      { q: 'What is the output?\n\nnum = input("Enter a number: ")\n# User types: 5\nprint(num + num)', type: "multiple_choice", options: ["A) 10", "B) 55", "C) Error", "D) 5 + 5"], correct: "B", explanation: "input() returns a string. '5' + '5' is string concatenation, which gives '55', not 10.", diff: "intermediate" },
      { q: 'Which code correctly gets a number from the user and doubles it?', type: "multiple_choice", options: ['A) num = input("Enter: ")\nprint(num * 2)', 'B) num = int(input("Enter: "))\nprint(num * 2)', 'C) num = input(int("Enter: "))\nprint(num * 2)', 'D) num = int("Enter: ")\nprint(num * 2)'], correct: "B", explanation: "You must wrap input() with int() to convert the string to an integer before doing math.", diff: "intermediate" },
      { q: "What is the result of 17 // 5 in Python?", type: "multiple_choice", options: ["A) 3.4", "B) 3", "C) 2", "D) 5"], correct: "B", explanation: "// is integer (floor) division. 17 // 5 = 3 (remainder 2 is discarded).", diff: "beginner" },
      { q: "What is the result of 17 % 5 in Python?", type: "multiple_choice", options: ["A) 3.4", "B) 3", "C) 2", "D) 5"], correct: "C", explanation: "% is the modulo operator. 17 % 5 = 2 (the remainder when 17 is divided by 5).", diff: "beginner" },
      { q: "What is the result of 2 ** 8 in Python?", type: "multiple_choice", options: ["A) 16", "B) 256", "C) 16384", "D) 64"], correct: "B", explanation: "** is the exponentiation operator. 2 ** 8 = 2^8 = 256.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nx = 10\ny = 3\nprint(x % y)',
      type: "multiple_choice",
      options: ["A) 3", "B) 1", "C) 3.33", "D) 0"],
      correct: "B",
      explanation: "10 % 3 = 1 (10 divided by 3 is 3 remainder 1)."
    }
  },

  5: {
    day: 5, unit: 1, unitName: "Intro to Programming",
    title: "Problem Solving with Python",
    bellRinger: {
      question: "In the 5-step software development process, what comes BEFORE writing code?",
      type: "multiple_choice",
      options: ["A) Testing", "B) Planning (pseudocode)", "C) Refining", "D) Presenting"],
      correct: "B",
      explanation: "The 5 steps are: Define → Plan → Code → Test → Refine. Planning/pseudocode comes before coding."
    },
    practice: [
      { q: "Pseudocode is written in which language?", type: "multiple_choice", options: ["A) Python", "B) Java", "C) Plain English (your own words)", "D) HTML"], correct: "C", explanation: "Pseudocode is informal, plain-English description of algorithm logic — not real code.", diff: "beginner" },
      { q: 'What does round(3.7) return?', type: "multiple_choice", options: ["A) 3", "B) 3.7", "C) 4", "D) 3.0"], correct: "C", explanation: "round() rounds to the nearest whole number. 3.7 rounds up to 4.", diff: "beginner" },
      { q: "Edge cases are inputs that test extreme or unusual values (like 0 or negative numbers).", type: "true_false", correct: "True", explanation: "Edge cases test boundaries: zero, negatives, very large numbers, empty input, etc. Always test them!", diff: "beginner" },
      { q: 'The formula for Celsius to Fahrenheit is: F = (C × 9/5) + 32\n\nWhat is 0°C in Fahrenheit?', type: "multiple_choice", options: ["A) 0°F", "B) 32°F", "C) 100°F", "D) 273°F"], correct: "B", explanation: "F = (0 × 9/5) + 32 = 0 + 32 = 32°F. Water freezes at 0°C = 32°F.", diff: "intermediate" },
      { q: "During which step do you fix bugs and improve your program?", type: "multiple_choice", options: ["A) Define", "B) Plan", "C) Code", "D) Refine"], correct: "D", explanation: "The Refine step is where you fix issues found during testing and improve the code.", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What does round(4.5) return in Python?',
      type: "multiple_choice",
      options: ["A) 4", "B) 4.5", "C) 5", "D) 4.0"],
      correct: "A",
      explanation: "Python uses 'banker's rounding' — round(4.5) = 4 (rounds to nearest even). This surprises many beginners!"
    }
  },

  6: {
    day: 6, unit: 1, unitName: "Intro to Programming",
    title: "Unit 1 Review & Project",
    bellRinger: {
      question: "Which of the following correctly prints a variable's value along with text?",
      type: "multiple_choice",
      options: ['A) print("Name: " + name)', 'B) print("Name: " name)', 'C) print(Name: name)', 'D) print[name]'],
      correct: "A",
      explanation: "To combine text and a variable with +, the variable must be a string. Use str(var) if it's not."
    },
    practice: [
      { q: 'What is the output?\n\nname = "Alex"\nage = 15\nprint("Name: " + name)\nprint("Age: " + str(age))', type: "multiple_choice", options: ["A) Name: Alex\nAge: 15", "B) name age", "C) Alex 15", "D) Error"], correct: "A", explanation: "str(age) converts the int to a string so it can be concatenated. Output is on two lines.", diff: "beginner" },
      { q: 'What is the output?\n\nresult = 100 / 4\nprint(result)', type: "multiple_choice", options: ["A) 25", "B) 25.0", "C) 100/4", "D) Error"], correct: "B", explanation: "The / operator always returns a float in Python 3. 100 / 4 = 25.0 (not 25).", diff: "intermediate" },
      { q: "A program asks the user for their birth year and calculates their age. What conversion is needed on the input?", type: "multiple_choice", options: ["A) str()", "B) float()", "C) int()", "D) bool()"], correct: "C", explanation: "Birth year is a whole number, so int() is the right conversion for age calculation.", diff: "beginner" },
      { q: 'What is the output?\n\nx = 7\ny = 2\nprint(x // y, x % y)', type: "multiple_choice", options: ["A) 3.5 1", "B) 3 1", "C) 3.5 0", "D) 3 0"], correct: "B", explanation: "7 // 2 = 3 (integer division), 7 % 2 = 1 (remainder). print() with comma separates with a space.", diff: "intermediate" },
      { q: "Which is the correct way to collect two numbers from a user and add them?", type: "multiple_choice", options: ['A) a = input(); b = input(); print(a + b)', 'B) a = int(input()); b = int(input()); print(a + b)', 'C) a = int(); b = int(); print(a + b)', 'D) a = number(); b = number(); print(a + b)'], correct: "B", explanation: "You must convert both inputs to int before adding. Otherwise + will concatenate strings.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "What are the 5 steps of the software development process in order?",
      type: "multiple_choice",
      options: ["A) Code → Test → Plan → Define → Refine", "B) Define → Plan → Code → Test → Refine", "C) Plan → Code → Define → Refine → Test", "D) Test → Code → Plan → Refine → Define"],
      correct: "B",
      explanation: "Define the problem → Plan (pseudocode) → Code → Test → Refine. This order ensures you think before you code!"
    }
  },

  // ══════════════════════════════════════════════
  // UNIT 2: VARIABLES, DATA TYPES & EXPRESSIONS (Days 7–15)
  // ══════════════════════════════════════════════

  7: {
    day: 7, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "Introduction to Variables & Assignment",
    bellRinger: {
      question: 'What is the output?\n\nx = 5\nx += 3\nprint(x)',
      type: "multiple_choice",
      options: ["A) 5", "B) 3", "C) 8", "D) 53"],
      correct: "C",
      explanation: "+= adds to the current value. x += 3 means x = x + 3. So 5 + 3 = 8."
    },
    practice: [
      { q: 'What is the output?\n\na, b, c = 1, 2, 3\nprint(b)', type: "multiple_choice", options: ["A) 1", "B) 2", "C) 3", "D) 1 2 3"], correct: "B", explanation: "Multiple assignment assigns values in order. a=1, b=2, c=3. So b is 2.", diff: "beginner" },
      { q: 'What is the output?\n\nx = 10\nx -= 3\nx *= 2\nprint(x)', type: "multiple_choice", options: ["A) 14", "B) 10", "C) 7", "D) 17"], correct: "A", explanation: "x starts at 10. x -= 3 → 7. x *= 2 → 14.", diff: "intermediate" },
      { q: 'Which code correctly swaps the values of a and b?\n\na = 5\nb = 10', type: "multiple_choice", options: ["A) a = b\n   b = a", "B) a, b = b, a", "C) swap(a, b)", "D) b = a\n   a = b"], correct: "B", explanation: "Python's tuple unpacking (a, b = b, a) swaps values in one line. Options A and D overwrite one value before saving it.", diff: "intermediate" },
      { q: "The = operator in Python tests if two values are equal.", type: "true_false", correct: "False", explanation: "= is the ASSIGNMENT operator (stores a value). == is the EQUALITY operator (tests if equal).", diff: "beginner" },
      { q: 'What is the output?\n\ncount = 0\ncount += 1\ncount += 1\ncount += 1\nprint(count)', type: "multiple_choice", options: ["A) 0", "B) 1", "C) 3", "D) 111"], correct: "C", explanation: "count starts at 0 and is incremented 3 times (+=1 three times), giving 3.", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What is the output?\n\npoints = 100\npoints //= 3\nprint(points)',
      type: "multiple_choice",
      options: ["A) 33", "B) 33.33", "C) 34", "D) 3"],
      correct: "A",
      explanation: "//= is integer division assignment. 100 // 3 = 33 (remainder discarded)."
    }
  },

  8: {
    day: 8, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "Numeric Types: int & float",
    bellRinger: {
      question: "What is the result of 5 / 2 in Python 3?",
      type: "multiple_choice",
      options: ["A) 2", "B) 2.5", "C) 2.0", "D) 3"],
      correct: "B",
      explanation: "In Python 3, / always performs true division and returns a float. 5 / 2 = 2.5."
    },
    practice: [
      { q: "What is the data type of the result of 10 / 2?", type: "multiple_choice", options: ["A) int", "B) float", "C) str", "D) It depends"], correct: "B", explanation: "Even when the result is a whole number, / always returns a float. 10 / 2 = 5.0 (float).", diff: "beginner" },
      { q: 'What is the output?\n\nprint(abs(-42))', type: "multiple_choice", options: ["A) -42", "B) 42", "C) 0", "D) Error"], correct: "B", explanation: "abs() returns the absolute value (distance from zero). abs(-42) = 42.", diff: "beginner" },
      { q: 'What is the output?\n\nprint(round(3.14159, 2))', type: "multiple_choice", options: ["A) 3.1", "B) 3.14", "C) 3.141", "D) 3"], correct: "B", explanation: "round(number, digits) rounds to the specified number of decimal places. round(3.14159, 2) = 3.14.", diff: "intermediate" },
      { q: "What is 3 ** 3 in Python?", type: "multiple_choice", options: ["A) 9", "B) 6", "C) 27", "D) 33"], correct: "C", explanation: "** is the exponentiation operator. 3 ** 3 = 3³ = 27.", diff: "beginner" },
      { q: 'What is the output?\n\nprint(type(5))\nprint(type(5.0))', type: "multiple_choice", options: ["A) int\nfloat", "B) <class 'int'>\n<class 'float'>", "C) int\nint", "D) number\nnumber"], correct: "B", explanation: "type() returns the full class name in angle brackets. 5 is int, 5.0 is float.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "What is the result of pow(2, 10)?",
      type: "multiple_choice",
      options: ["A) 20", "B) 512", "C) 1024", "D) 100"],
      correct: "C",
      explanation: "pow(2, 10) = 2^10 = 1024. Same as 2 ** 10."
    }
  },

  9: {
    day: 9, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "String Data Type & Operations",
    bellRinger: {
      question: 'What is the output?\n\nword = "Python"\nprint(len(word))',
      type: "multiple_choice",
      options: ["A) 5", "B) 6", "C) 7", "D) Error"],
      correct: "B",
      explanation: "len() counts all characters. 'Python' has 6 characters: P-y-t-h-o-n."
    },
    practice: [
      { q: 'What is the output?\n\nword = "Python"\nprint(word[0])', type: "multiple_choice", options: ["A) P", "B) y", "C) n", "D) 0"], correct: "A", explanation: "String indexing starts at 0. word[0] is the first character, 'P'.", diff: "beginner" },
      { q: 'What is the output?\n\nword = "Python"\nprint(word[-1])', type: "multiple_choice", options: ["A) P", "B) o", "C) n", "D) Error"], correct: "C", explanation: "Negative indexing counts from the end. word[-1] is the last character, 'n'.", diff: "beginner" },
      { q: 'What is the output?\n\nword = "Python"\nprint(word[1:4])', type: "multiple_choice", options: ["A) Pyt", "B) yth", "C) ytho", "D) Python"], correct: "B", explanation: "Slicing [1:4] includes index 1, 2, 3 (stops before 4). 'Python'[1:4] = 'yth'.", diff: "intermediate" },
      { q: 'What is the output?\n\nprint("Ha" * 3)', type: "multiple_choice", options: ["A) Ha Ha Ha", "B) HaHaHa", "C) Ha3", "D) Error"], correct: "B", explanation: "String repetition with * repeats the string without spaces. 'Ha' * 3 = 'HaHaHa'.", diff: "beginner" },
      { q: 'What is the output?\n\nword = "coding"\nprint(word[::2])', type: "multiple_choice", options: ["A) cod", "B) cing", "C) cdig", "D) ocig"], correct: "C", explanation: "[::2] slices with a step of 2, taking every other character starting from 0. c(0)o(1)d(2)i(3)n(4)g(5) → c, d, i, g = 'cdig'", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ns = "hello"\nprint(s[2:5])',
      type: "multiple_choice",
      options: ["A) hel", "B) llo", "C) ell", "D) hello"],
      correct: "B",
      explanation: "s[2:5] takes characters at index 2, 3, 4. 'hello': h(0)e(1)l(2)l(3)o(4) → 'llo'."
    }
  },

  10: {
    day: 10, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "String Methods",
    bellRinger: {
      question: 'What is the output?\n\nname = "  alice  "\nprint(name.strip())',
      type: "multiple_choice",
      options: ["A) alice", "B) '  alice  '", "C)   alice  ", "D) ALICE"],
      correct: "A",
      explanation: ".strip() removes leading and trailing whitespace from both ends of the string."
    },
    practice: [
      { q: 'What is the output?\n\nword = "python"\nprint(word.upper())', type: "multiple_choice", options: ["A) python", "B) PYTHON", "C) Python", "D) pYTHON"], correct: "B", explanation: ".upper() converts ALL characters to uppercase.", diff: "beginner" },
      { q: 'What is the output?\n\nsentence = "hello world"\nprint(sentence.title())', type: "multiple_choice", options: ["A) Hello World", "B) HELLO WORLD", "C) hello world", "D) Hello world"], correct: "A", explanation: ".title() capitalizes the first letter of EACH word.", diff: "beginner" },
      { q: 'What is the output?\n\ntext = "banana"\nprint(text.count("a"))', type: "multiple_choice", options: ["A) 1", "B) 2", "C) 3", "D) 0"], correct: "C", explanation: ".count() counts non-overlapping occurrences. 'banana' has 3 a's: b-A-n-A-n-A.", diff: "intermediate" },
      { q: 'What is the output?\n\ntext = "Hello World"\nprint(text.replace("World", "Python"))', type: "multiple_choice", options: ["A) Hello World", "B) Hello Python", "C) Python World", "D) HelloPython"], correct: "B", explanation: ".replace(old, new) replaces ALL occurrences of old with new.", diff: "intermediate" },
      { q: 'What is the output?\n\nwords = "one two three"\nprint(words.split())', type: "multiple_choice", options: ['A) ["one", "two", "three"]', 'B) "one", "two", "three"', "C) one two three", "D) [one two three]"], correct: "A", explanation: ".split() (with no argument) splits on whitespace and returns a list of strings.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nword = "Python"\nprint(word.lower().replace("p", "j"))',
      type: "multiple_choice",
      options: ["A) jython", "B) Python", "C) python", "D) Jython"],
      correct: "A",
      explanation: ".lower() makes it 'python', then .replace('p','j') gives 'jython'. Method chaining applies left to right."
    }
  },

  11: {
    day: 11, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "Boolean Data Type & Comparison Operators",
    bellRinger: {
      question: "What is the output of: print(10 > 5)",
      type: "multiple_choice",
      options: ["A) 10", "B) 5", "C) True", "D) False"],
      correct: "C",
      explanation: "10 > 5 is a Boolean expression. Since 10 IS greater than 5, it evaluates to True."
    },
    practice: [
      { q: 'What is the output?\n\nprint(5 == 5.0)', type: "multiple_choice", options: ["A) True", "B) False", "C) Error", "D) 5"], correct: "A", explanation: "Python compares values, not types. 5 (int) equals 5.0 (float) in value, so == returns True.", diff: "intermediate" },
      { q: 'What is the output?\n\nprint("apple" < "banana")', type: "multiple_choice", options: ["A) True", "B) False", "C) Error", "D) apple"], correct: "A", explanation: "String comparison is alphabetical. 'apple' comes before 'banana' alphabetically, so it is 'less than'.", diff: "intermediate" },
      { q: 'What is the output?\n\nprint(bool(0))', type: "multiple_choice", options: ["A) True", "B) False", "C) 0", "D) Error"], correct: "B", explanation: "bool(0) is False. In Python, 0 is 'falsy'. Any non-zero number is True.", diff: "beginner" },
      { q: 'What is the output?\n\nprint(10 != 10)', type: "multiple_choice", options: ["A) True", "B) False", "C) 10", "D) Error"], correct: "B", explanation: "!= means 'not equal'. 10 is equal to 10, so 10 != 10 is False.", diff: "beginner" },
      { q: 'What is the output?\n\nprint(bool(""))', type: "multiple_choice", options: ["A) True", "B) False", "C) Error", "D) Empty"], correct: "B", explanation: "An empty string is 'falsy' in Python. bool('') = False. Any non-empty string is True.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nage = 16\nprint(age >= 16)',
      type: "multiple_choice",
      options: ["A) True", "B) False", "C) 16", "D) Error"],
      correct: "A",
      explanation: "16 >= 16 is True because >= means 'greater than OR equal to'."
    }
  },

  12: {
    day: 12, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "Type Conversion",
    bellRinger: {
      question: "What is the result of int(3.9)?",
      type: "multiple_choice",
      options: ["A) 4", "B) 3", "C) 3.9", "D) Error"],
      correct: "B",
      explanation: "int() TRUNCATES (chops off) the decimal — it does NOT round. int(3.9) = 3, not 4."
    },
    practice: [
      { q: 'What is the output?\n\nprint(int("42"))', type: "multiple_choice", options: ["A) Error", "B) 42.0", "C) 42", "D) '42'"], correct: "C", explanation: "int('42') converts the string '42' to the integer 42.", diff: "beginner" },
      { q: 'What is the output?\n\nprint(float(5))', type: "multiple_choice", options: ["A) 5", "B) 5.0", "C) '5.0'", "D) Error"], correct: "B", explanation: "float(5) converts the integer 5 to the float 5.0.", diff: "beginner" },
      { q: 'Which code will cause a ValueError?', type: "multiple_choice", options: ['A) int("3")', 'B) float("3.14")', 'C) int("hello")', 'D) str(99)'], correct: "C", explanation: "int('hello') fails because 'hello' cannot be converted to a number — it raises ValueError.", diff: "intermediate" },
      { q: 'What is the output?\n\nnum = "100"\nprint(num * 3)', type: "multiple_choice", options: ["A) 300", "B) 100100100", "C) 300.0", "D) Error"], correct: "B", explanation: "num is still a string. String * 3 = repetition: '100' * 3 = '100100100'.", diff: "intermediate" },
      { q: 'What is the output?\n\nprint(bool(0), bool(1), bool(-5))', type: "multiple_choice", options: ["A) True True True", "B) False True True", "C) False False True", "D) False True False"], correct: "B", explanation: "0 is falsy (False). Any non-zero integer (positive or negative) is truthy (True).", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nval = "3.7"\nprint(int(float(val)))',
      type: "multiple_choice",
      options: ["A) 3.7", "B) 4", "C) 3", "D) Error"],
      correct: "C",
      explanation: "float('3.7') = 3.7, then int(3.7) = 3 (truncates). Converting string to float first, then to int."
    }
  },

  13: {
    day: 13, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "String Formatting with f-strings",
    bellRinger: {
      question: 'What is the output?\n\nname = "Sam"\nage = 14\nprint(f"My name is {name} and I am {age} years old.")',
      type: "multiple_choice",
      options: ["A) My name is {name} and I am {age} years old.", "B) My name is Sam and I am 14 years old.", "C) Error", "D) My name is name and I am age years old."],
      correct: "B",
      explanation: "f-strings evaluate expressions inside {}. {name} is replaced with Sam, {age} with 14."
    },
    practice: [
      { q: 'What is the output?\n\nprice = 9.99\nprint(f"Price: ${price:.2f}")', type: "multiple_choice", options: ["A) Price: $9.99", "B) Price: $10.00", "C) Price: ${price:.2f}", "D) Price: $9.990000"], correct: "A", explanation: ":.2f formats the float to exactly 2 decimal places. 9.99 already has 2 decimals, so it stays 9.99.", diff: "intermediate" },
      { q: 'What is the output?\n\nval = 3.14159\nprint(f"{val:.3f}")', type: "multiple_choice", options: ["A) 3.14159", "B) 3.142", "C) 3.141", "D) 3.14"], correct: "B", explanation: ":.3f rounds to 3 decimal places. 3.14159 → 3.142 (the 4th decimal 5 rounds up the 1 to 2).", diff: "intermediate" },
      { q: 'What does the format specifier :<10 do in an f-string?', type: "multiple_choice", options: ["A) Right-aligns text in a field of width 10", "B) Left-aligns text in a field of width 10", "C) Centers text in a field of width 10", "D) Rounds to 10 decimal places"], correct: "B", explanation: ":< means left-align. :> means right-align. :^ means center. The number is the total field width.", diff: "challenge" },
      { q: 'What is the output?\n\nx = 42\nprint(f"Value: {x:>6}")', type: "multiple_choice", options: ['A) Value: 42', 'B) Value:     42', 'C) Value: 42    ', 'D) Value: 000042'], correct: "B", explanation: ":>6 right-aligns in a field of width 6. '42' is 2 chars, so 4 spaces are added on the left.", diff: "challenge" },
      { q: "f-strings can only contain variable names, not expressions.", type: "true_false", correct: "False", explanation: "f-strings can contain any Python expression inside {}. For example: f'{2 + 2}' gives '4'.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\npi = 3.14159\nprint(f"Pi ≈ {pi:.2f}")',
      type: "multiple_choice",
      options: ["A) Pi ≈ 3.14159", "B) Pi ≈ 3.14", "C) Pi ≈ 3.15", "D) Pi ≈ {pi:.2f}"],
      correct: "B",
      explanation: ":.2f rounds to 2 decimal places. 3.14159 → 3.14 (3rd decimal is 1, so no round-up)."
    }
  },

  14: {
    day: 14, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "Expressions, Constants & math Module",
    bellRinger: {
      question: 'What must you write at the top of your program to use math.sqrt()?',
      type: "multiple_choice",
      options: ["A) include math", "B) use math", "C) import math", "D) from math"],
      correct: "C",
      explanation: "You must write 'import math' to gain access to the math module's functions and constants."
    },
    practice: [
      { q: 'What is the output?\n\nimport math\nprint(math.sqrt(144))', type: "multiple_choice", options: ["A) 12", "B) 12.0", "C) 72", "D) 144.0"], correct: "B", explanation: "math.sqrt() always returns a float. sqrt(144) = 12.0.", diff: "beginner" },
      { q: 'What is the output?\n\nimport math\nprint(math.ceil(4.1))', type: "multiple_choice", options: ["A) 4", "B) 4.1", "C) 5", "D) 5.0"], correct: "C", explanation: "math.ceil() rounds UP to the nearest integer. ceil(4.1) = 5.", diff: "beginner" },
      { q: 'What is the output?\n\nimport math\nprint(math.floor(4.9))', type: "multiple_choice", options: ["A) 4", "B) 4.9", "C) 5", "D) 5.0"], correct: "A", explanation: "math.floor() rounds DOWN to the nearest integer. floor(4.9) = 4.", diff: "beginner" },
      { q: "In Python, constants are typically named using:", type: "multiple_choice", options: ["A) camelCase", "B) ALL_CAPS_WITH_UNDERSCORES", "C) lowercase", "D) PascalCase"], correct: "B", explanation: "By convention, constants (values that shouldn't change) use ALL_CAPS. Example: MAX_SPEED = 120.", diff: "intermediate" },
      { q: 'What is the approximate output?\n\nimport math\nprint(round(math.pi, 4))', type: "multiple_choice", options: ["A) 3.14", "B) 3.1416", "C) 3.14159", "D) 3"], correct: "B", explanation: "math.pi ≈ 3.14159265... Round to 4 decimal places → 3.1416.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "What is the difference between math.ceil() and math.floor()?",
      type: "multiple_choice",
      options: ["A) ceil rounds down, floor rounds up", "B) ceil rounds up, floor rounds down", "C) Both round to the nearest integer", "D) ceil is for integers, floor is for floats"],
      correct: "B",
      explanation: "ceil() always rounds UP (ceiling = top). floor() always rounds DOWN (floor = bottom). ceil(4.1)=5, floor(4.9)=4."
    }
  },

  15: {
    day: 15, unit: 2, unitName: "Variables, Data Types & Expressions",
    title: "Unit 2 Review & Project",
    bellRinger: {
      question: 'What is the output?\n\nimport math\nresult = math.sqrt(25)\nprint(f"Result: {result:.1f}")',
      type: "multiple_choice",
      options: ["A) Result: 5", "B) Result: 5.0", "C) Result: 5.00", "D) Result: 25.0"],
      correct: "B",
      explanation: "sqrt(25) = 5.0 (float). :.1f formats to 1 decimal → 5.0."
    },
    practice: [
      { q: 'What is the output?\n\ntext = "   Python   "\nprint(len(text.strip()))', type: "multiple_choice", options: ["A) 6", "B) 12", "C) 8", "D) 13"], correct: "A", explanation: "strip() removes all leading/trailing spaces: '   Python   ' → 'Python'. len('Python') = 6.", diff: "intermediate" },
      { q: 'What is the output?\n\na = 5\nb = 2\nprint(a ** b, a // b, a % b)', type: "multiple_choice", options: ["A) 25 2 1", "B) 10 2.5 1", "C) 25 2.5 1", "D) 7 2 1"], correct: "A", explanation: "5**2=25, 5//2=2 (integer division), 5%2=1 (remainder). print() separates with spaces.", diff: "intermediate" },
      { q: 'What is the output?\n\nfirstname = "Jane"\nlastname = "Doe"\nprint(f"{lastname}, {firstname}")', type: "multiple_choice", options: ["A) Jane, Doe", "B) Doe, Jane", "C) lastname, firstname", "D) Error"], correct: "B", explanation: "The f-string puts lastname first, then comma, then firstname. Output: 'Doe, Jane'.", diff: "beginner" },
      { q: 'Which of these correctly stores the name entered by a user and converts it to title case?', type: "multiple_choice", options: ['A) name = input("Name: ").title()', 'B) name = title(input("Name: "))', 'C) name = input("Name: ")\nname.title()', 'D) name = input.title("Name: ")'], correct: "A", explanation: "Method chaining: input() returns a string, then .title() is called on it immediately. Clean and correct.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nnum = "7"\nprint(num * 2)',
      type: "multiple_choice",
      options: ["A) 14", "B) 77", "C) 7 7", "D) Error"],
      correct: "B",
      explanation: "num is a string ('7'), not an integer. String * 2 is repetition: '7' * 2 = '77'."
    }
  },

  // ══════════════════════════════════════════════
  // UNIT 3: CONDITIONALS (Days 16–24)
  // ══════════════════════════════════════════════

  16: {
    day: 16, unit: 3, unitName: "Conditionals",
    title: "Boolean Expressions",
    bellRinger: {
      question: 'What is the output?\n\nprint(type(5 > 3))',
      type: "multiple_choice",
      options: ["A) int", "B) str", "C) <class 'bool'>", "D) True"],
      correct: "C",
      explanation: "5 > 3 evaluates to True, which is a bool. type(True) returns <class 'bool'>."
    },
    practice: [
      { q: 'What is the output?\n\nprint(10 == 10.0)', type: "multiple_choice", options: ["A) True", "B) False", "C) Error", "D) 10"], correct: "A", explanation: "Python compares values regardless of type. Integer 10 equals float 10.0.", diff: "beginner" },
      { q: 'What is the output?\n\nprint("apple" == "Apple")', type: "multiple_choice", options: ["A) True", "B) False", "C) Error", "D) apple"], correct: "B", explanation: "String comparison is case-sensitive. 'apple' ≠ 'Apple' because 'a' ≠ 'A'.", diff: "beginner" },
      { q: "What is the output of: print(not True)", type: "multiple_choice", options: ["A) True", "B) False", "C) not True", "D) Error"], correct: "B", explanation: "The 'not' operator reverses a Boolean. not True = False.", diff: "beginner" },
      { q: 'What is the output?\n\nx = 5\nprint(1 < x < 10)', type: "multiple_choice", options: ["A) True", "B) False", "C) Error", "D) 5"], correct: "A", explanation: "Python supports chained comparisons. 1 < 5 < 10 checks both: 1 < 5 (True) AND 5 < 10 (True). Both true → True.", diff: "intermediate" },
      { q: 'What is the output?\n\nprint("z" > "a")', type: "multiple_choice", options: ["A) True", "B) False", "C) Error", "D) 25"], correct: "A", explanation: "String comparison uses ASCII/Unicode values. 'z' has a higher value than 'a', so 'z' > 'a' is True.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nprint(5 != 5)',
      type: "multiple_choice",
      options: ["A) True", "B) False", "C) 0", "D) Error"],
      correct: "B",
      explanation: "!= means 'not equal'. 5 IS equal to 5, so 5 != 5 is False."
    }
  },

  17: {
    day: 17, unit: 3, unitName: "Conditionals",
    title: "if Statements",
    bellRinger: {
      question: "What is required after the condition in an if statement?",
      type: "multiple_choice",
      options: ["A) Parentheses ( )", "B) A colon :", "C) Curly braces { }", "D) Semicolon ;"],
      correct: "B",
      explanation: "Python if statements require a colon at the end: if condition: — and the body must be indented."
    },
    practice: [
      { q: 'What is the output?\n\nx = 8\nif x > 5:\n    print("big")\nprint("done")', type: "multiple_choice", options: ["A) big", "B) done", "C) big\ndone", "D) Nothing"], correct: "C", explanation: "8 > 5 is True, so 'big' is printed. 'done' is outside the if block (not indented), so it always prints.", diff: "beginner" },
      { q: 'What is the output?\n\nx = 3\nif x > 5:\n    print("big")\nprint("done")', type: "multiple_choice", options: ["A) big", "B) done", "C) big\ndone", "D) Nothing"], correct: "B", explanation: "3 > 5 is False, so the if body is skipped. Only 'done' (unindented) prints.", diff: "beginner" },
      { q: 'What is the output?\n\nnum = 4\nif num % 2 == 0:\n    print("even")', type: "multiple_choice", options: ["A) even", "B) odd", "C) Nothing", "D) Error"], correct: "A", explanation: "4 % 2 = 0, so 4 % 2 == 0 is True. 'even' is printed.", diff: "beginner" },
      { q: 'What is the output?\n\nword = "hello"\nif "e" in word:\n    print("found")', type: "multiple_choice", options: ["A) Nothing", "B) True", "C) found", "D) e"], correct: "C", explanation: "The 'in' operator checks if a substring exists. 'e' IS in 'hello', so the condition is True and 'found' prints.", diff: "intermediate" },
      { q: "A block of code inside an if statement must be:", type: "multiple_choice", options: ["A) Surrounded by curly braces", "B) On the same line as if", "C) Indented (4 spaces or 1 tab)", "D) Followed by a semicolon"], correct: "C", explanation: "Python uses indentation to define code blocks. The standard is 4 spaces. Curly braces are used in other languages, not Python.", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What is wrong with this code?\n\nif x > 0\n    print("positive")',
      type: "multiple_choice",
      options: ["A) Wrong variable name", "B) Missing colon after condition", "C) Wrong indentation", "D) Nothing wrong"],
      correct: "B",
      explanation: "The if statement is missing the colon (:). Correct: if x > 0:"
    }
  },

  18: {
    day: 18, unit: 3, unitName: "Conditionals",
    title: "if / else",
    bellRinger: {
      question: 'What is the output?\n\nnum = 7\nif num % 2 == 0:\n    print("even")\nelse:\n    print("odd")',
      type: "multiple_choice",
      options: ["A) even", "B) odd", "C) even\nodd", "D) Nothing"],
      correct: "B",
      explanation: "7 % 2 = 1 (not 0), so the if condition is False. The else block runs, printing 'odd'."
    },
    practice: [
      { q: 'What is the output?\n\ntemp = 75\nif temp > 80:\n    print("hot")\nelse:\n    print("comfortable")', type: "multiple_choice", options: ["A) hot", "B) comfortable", "C) hot\ncomfortable", "D) Error"], correct: "B", explanation: "75 is NOT greater than 80, so the else block runs: 'comfortable'.", diff: "beginner" },
      { q: "In an if/else statement, how many branches can execute?", type: "multiple_choice", options: ["A) 0", "B) 1", "C) 2", "D) Both always run"], correct: "B", explanation: "Exactly ONE branch executes — either the if block OR the else block, never both.", diff: "beginner" },
      { q: 'What is the output?\n\nx = 10\nif x > 10:\n    print("A")\nelse:\n    print("B")', type: "multiple_choice", options: ["A) A", "B) B", "C) A\nB", "D) Nothing"], correct: "B", explanation: "10 > 10 is False (not greater, only equal). The else runs: 'B'.", diff: "intermediate" },
      { q: 'What is the output?\n\npassword = "abc123"\nif len(password) >= 8:\n    print("strong")\nelse:\n    print("weak")', type: "multiple_choice", options: ["A) strong", "B) weak", "C) Error", "D) 6"], correct: "B", explanation: "len('abc123') = 6. 6 >= 8 is False, so 'weak' is printed.", diff: "intermediate" },
      { q: 'What is the output?\n\ngrade = 85\nif grade >= 90:\n    result = "A"\nelse:\n    result = "B or lower"\nprint(result)', type: "multiple_choice", options: ["A) A", "B) B or lower", "C) Error — result undefined", "D) Nothing"], correct: "B", explanation: "85 < 90, so result = 'B or lower'. print(result) outputs 'B or lower'.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nage = 18\nif age < 18:\n    print("minor")\nelse:\n    print("adult")',
      type: "multiple_choice",
      options: ["A) minor", "B) adult", "C) minor\nadult", "D) Error"],
      correct: "B",
      explanation: "18 < 18 is False (not strictly less than). So the else runs: 'adult'."
    }
  },

  19: {
    day: 19, unit: 3, unitName: "Conditionals",
    title: "elif — Multiple Conditions",
    bellRinger: {
      question: "What does elif stand for in Python?",
      type: "multiple_choice",
      options: ["A) else if", "B) else in for", "C) end loop if", "D) evaluate if"],
      correct: "A",
      explanation: "elif is short for 'else if'. It checks another condition only if all previous conditions were False."
    },
    practice: [
      { q: 'What is the output?\n\nscore = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")', type: "multiple_choice", options: ["A) A", "B) B", "C) B\nC", "D) C"], correct: "B", explanation: "85 < 90 (skip A). 85 >= 80 (True!) → print B. No further checks happen.", diff: "beginner" },
      { q: 'What is the output?\n\nnum = 5\nif num > 10:\n    print("big")\nelif num > 3:\n    print("medium")\nelif num > 0:\n    print("small")\nelse:\n    print("zero or negative")', type: "multiple_choice", options: ["A) big", "B) medium", "C) medium\nsmall", "D) small"], correct: "B", explanation: "5 > 10 False. 5 > 3 True → 'medium'. Python stops checking after the first True branch.", diff: "intermediate" },
      { q: "How many elif clauses can an if statement have?", type: "multiple_choice", options: ["A) Only 1", "B) Only 2", "C) As many as needed", "D) Maximum 10"], correct: "C", explanation: "You can have as many elif clauses as you need. Python checks them in order and stops at the first True condition.", diff: "beginner" },
      { q: 'What is the output?\n\nmonth = 3\nif month == 12 or month <= 2:\n    print("Winter")\nelif month <= 5:\n    print("Spring")\nelif month <= 8:\n    print("Summer")\nelse:\n    print("Fall")', type: "multiple_choice", options: ["A) Winter", "B) Spring", "C) Summer", "D) Fall"], correct: "B", explanation: "month=3. Not winter (3 is not 12 or ≤2). 3 <= 5 → True → 'Spring'.", diff: "intermediate" },
      { q: "An else block is required at the end of an if/elif chain.", type: "true_false", correct: "False", explanation: "else is optional. An if/elif chain without else simply does nothing if no condition matches.", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What is the output?\n\npoints = 95\nif points >= 90:\n    print("Gold")\nelif points >= 70:\n    print("Silver")\nelse:\n    print("Bronze")',
      type: "multiple_choice",
      options: ["A) Gold", "B) Silver", "C) Gold\nSilver", "D) Bronze"],
      correct: "A",
      explanation: "95 >= 90 is True → 'Gold'. Python stops at the first True branch."
    }
  },

  20: {
    day: 20, unit: 3, unitName: "Conditionals",
    title: "Logical Operators",
    bellRinger: {
      question: "What is the output of: print(True and False)",
      type: "multiple_choice",
      options: ["A) True", "B) False", "C) TrueFalse", "D) Error"],
      correct: "B",
      explanation: "'and' requires BOTH sides to be True. True and False = False."
    },
    practice: [
      { q: "What is the output of: print(True or False)", type: "multiple_choice", options: ["A) True", "B) False", "C) TrueFalse", "D) Error"], correct: "A", explanation: "'or' requires at least ONE side to be True. True or False = True.", diff: "beginner" },
      { q: 'What is the output?\n\nage = 20\nhas_id = True\nif age >= 18 and has_id:\n    print("Allowed")\nelse:\n    print("Denied")', type: "multiple_choice", options: ["A) Allowed", "B) Denied", "C) Error", "D) Allowed\nDenied"], correct: "A", explanation: "20 >= 18 is True AND has_id is True. Both True → 'Allowed'.", diff: "intermediate" },
      { q: 'What is the output?\n\nx = 5\nif x < 0 or x > 100:\n    print("out of range")\nelse:\n    print("in range")', type: "multiple_choice", options: ["A) out of range", "B) in range", "C) Error", "D) out of range\nin range"], correct: "B", explanation: "5 < 0 is False. 5 > 100 is False. False or False = False → else → 'in range'.", diff: "intermediate" },
      { q: "What is the output of: print(not False)", type: "multiple_choice", options: ["A) True", "B) False", "C) not False", "D) Error"], correct: "A", explanation: "not reverses the Boolean. not False = True.", diff: "beginner" },
      { q: 'What is the output?\n\nnum = 15\nif num % 3 == 0 and num % 5 == 0:\n    print("FizzBuzz")\nelif num % 3 == 0:\n    print("Fizz")\nelse:\n    print("Buzz")', type: "multiple_choice", options: ["A) FizzBuzz", "B) Fizz", "C) Buzz", "D) FizzBuzz\nFizz"], correct: "A", explanation: "15 % 3 = 0 AND 15 % 5 = 0. Both true → 'FizzBuzz'.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nraining = True\nhave_umbrella = False\nif raining and not have_umbrella:\n    print("Get wet!")',
      type: "multiple_choice",
      options: ["A) Nothing", "B) Get wet!", "C) Error", "D) True"],
      correct: "B",
      explanation: "raining is True. not have_umbrella = not False = True. True and True → print 'Get wet!'."
    }
  },

  21: {
    day: 21, unit: 3, unitName: "Conditionals",
    title: "Nested Conditionals",
    bellRinger: {
      question: "What determines whether code belongs to an inner vs. outer if block?",
      type: "multiple_choice",
      options: ["A) The use of parentheses", "B) The level of indentation", "C) The use of braces", "D) The order of conditions"],
      correct: "B",
      explanation: "In Python, indentation level defines code blocks. More indentation = deeper nesting."
    },
    practice: [
      { q: 'What is the output?\n\nx = 10\nif x > 0:\n    if x > 5:\n        print("big positive")\n    else:\n        print("small positive")\nelse:\n    print("negative")', type: "multiple_choice", options: ["A) big positive", "B) small positive", "C) negative", "D) big positive\nsmall positive"], correct: "A", explanation: "x=10. 10>0 True → enters outer if. 10>5 True → 'big positive'.", diff: "intermediate" },
      { q: 'What is the output?\n\nx = 3\nif x > 0:\n    if x > 5:\n        print("big")\n    else:\n        print("small")\nelse:\n    print("negative")', type: "multiple_choice", options: ["A) big", "B) small", "C) negative", "D) Nothing"], correct: "B", explanation: "3>0 True. 3>5 False → else → 'small'.", diff: "intermediate" },
      { q: 'What is the output?\n\nx = -1\nif x > 0:\n    if x > 5:\n        print("big")\n    else:\n        print("small")\nelse:\n    print("negative")', type: "multiple_choice", options: ["A) big", "B) small", "C) negative", "D) Nothing"], correct: "C", explanation: "-1 > 0 is False → outer else → 'negative'. Inner if is never reached.", diff: "beginner" },
      { q: "A nested if/else can ALWAYS be rewritten using logical operators (and/or).", type: "true_false", correct: "True", explanation: "Nested ifs can often be flattened using 'and'. For example: if x > 0: if x > 5 can become if x > 0 and x > 5.", diff: "challenge" },
      { q: 'What is the output?\n\nlogged_in = True\nrole = "admin"\nif logged_in:\n    if role == "admin":\n        print("Welcome, Admin")\n    else:\n        print("Welcome, User")\nelse:\n    print("Please log in")', type: "multiple_choice", options: ["A) Welcome, Admin", "B) Welcome, User", "C) Please log in", "D) Error"], correct: "A", explanation: "logged_in is True. role == 'admin' is True → 'Welcome, Admin'.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nnum = 0\nif num > 0:\n    print("positive")\nelse:\n    if num < 0:\n        print("negative")\n    else:\n        print("zero")',
      type: "multiple_choice",
      options: ["A) positive", "B) negative", "C) zero", "D) Error"],
      correct: "C",
      explanation: "0 > 0 is False → outer else. 0 < 0 is False → inner else → 'zero'."
    }
  },

  22: {
    day: 22, unit: 3, unitName: "Conditionals",
    title: "Conditional Applications & Input Validation",
    bellRinger: {
      question: "Input validation checks that user input meets requirements BEFORE processing it.",
      type: "true_false",
      correct: "True",
      explanation: "Validating input prevents errors and crashes. Always check that inputs are in the expected range/format."
    },
    practice: [
      { q: 'Which code validates that a test score is between 0 and 100?', type: "multiple_choice", options: ['A) if score >= 0 or score <= 100:', 'B) if score >= 0 and score <= 100:', 'C) if 0 >= score <= 100:', 'D) if score between 0 and 100:'], correct: "B", explanation: "Use 'and' to require BOTH conditions. Or more Pythonically: if 0 <= score <= 100:", diff: "intermediate" },
      { q: 'What is the output?\n\nscore = int(input())\n# User enters: 105\nif score < 0 or score > 100:\n    print("Invalid")\nelse:\n    print("Valid")', type: "multiple_choice", options: ["A) Valid", "B) Invalid", "C) Error", "D) 105"], correct: "B", explanation: "105 > 100 is True, so the or condition is True → 'Invalid'.", diff: "intermediate" },
      { q: 'What is the output?\n\nbmi = 22.5\nif bmi < 18.5:\n    print("Underweight")\nelif bmi < 25:\n    print("Normal")\nelif bmi < 30:\n    print("Overweight")\nelse:\n    print("Obese")', type: "multiple_choice", options: ["A) Underweight", "B) Normal", "C) Overweight", "D) Obese"], correct: "B", explanation: "22.5 >= 18.5 (not underweight). 22.5 < 25 → 'Normal'.", diff: "intermediate" },
      { q: "The chained comparison '0 <= x <= 100' is equivalent to:", type: "multiple_choice", options: ["A) x >= 0 or x <= 100", "B) x >= 0 and x <= 100", "C) x > 0 and x < 100", "D) not (x < 0 or x > 100)"], correct: "B", explanation: "Chained comparisons use 'and' behind the scenes. 0 <= x <= 100 means x >= 0 AND x <= 100. (Note: D is also correct but less common!)", diff: "challenge" }
    ],
    exitTicket: {
      question: 'If a user enters -5 for a score, which message should print?\n\nif score >= 0 and score <= 100:\n    print("Valid score")\nelse:\n    print("Score must be 0-100")',
      type: "multiple_choice",
      options: ["A) Valid score", "B) Score must be 0-100", "C) Error", "D) Nothing"],
      correct: "B",
      explanation: "-5 >= 0 is False. Since 'and' requires BOTH to be True, the condition is False → else → error message."
    }
  },

  23: {
    day: 23, unit: 3, unitName: "Conditionals",
    title: "Debugging Conditionals",
    bellRinger: {
      question: 'What is wrong with this code?\n\nif x = 5:\n    print("five")',
      type: "multiple_choice",
      options: ["A) Missing colon", "B) Wrong indentation", "C) Should use == not =", "D) print needs quotes"],
      correct: "C",
      explanation: "= is assignment. == is equality comparison. Conditions need ==. if x == 5: is correct."
    },
    practice: [
      { q: 'What type of error is this?\n\nif score >= 70\n    print("Pass")', type: "multiple_choice", options: ["A) Runtime error", "B) Logic error", "C) Syntax error", "D) Name error"], correct: "C", explanation: "Missing colon after the condition is a Syntax Error — Python can't parse the code.", diff: "beginner" },
      { q: 'What is wrong with this grade checker?\n\ngrade = 85\nif grade >= 60:\n    print("D")\nelif grade >= 70:\n    print("C")\nelif grade >= 80:\n    print("B")\nelif grade >= 90:\n    print("A")', type: "multiple_choice", options: ["A) Missing else", "B) Conditions are in wrong order (should go highest first)", "C) Can't use elif", "D) Nothing wrong"], correct: "B", explanation: "Because 85 >= 60 is True, it prints 'D' and stops. Conditions must go from HIGHEST to LOWEST: >=90, >=80, >=70, >=60.", diff: "intermediate" },
      { q: 'What is the output?\n\nx = 10\nif x > 5:\n    print("A")\nif x > 3:\n    print("B")\nif x > 1:\n    print("C")', type: "multiple_choice", options: ["A) A", "B) A\nB", "C) A\nB\nC", "D) C"], correct: "C", explanation: "These are three SEPARATE if statements, not elif. All three conditions are True, so A, B, and C all print.", diff: "challenge" },
      { q: "A logic error causes a program to:", type: "multiple_choice", options: ["A) Crash with an error message", "B) Not run at all", "C) Run but produce wrong results", "D) Print an error to the screen"], correct: "C", explanation: "Logic errors don't crash Python — the code runs but produces incorrect results. They're the hardest to find!", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What type of error is this?\n\ngrade = 85\nif grade >= 60:\n    print("Pass")\nelse\n    print("Fail")',
      type: "multiple_choice",
      options: ["A) Logic error", "B) Runtime error", "C) Syntax error", "D) No error"],
      correct: "C",
      explanation: "else is missing a colon (:). Correct: else: — This is a syntax error."
    }
  },

  24: {
    day: 24, unit: 3, unitName: "Conditionals",
    title: "Unit 3 Review & Project",
    bellRinger: {
      question: 'What is the output?\n\nnum = 12\nif num % 2 == 0 and num % 3 == 0:\n    print("divisible by 2 and 3")\nelif num % 2 == 0:\n    print("divisible by 2 only")\nelse:\n    print("other")',
      type: "multiple_choice",
      options: ["A) divisible by 2 and 3", "B) divisible by 2 only", "C) other", "D) divisible by 2 and 3\ndivisible by 2 only"],
      correct: "A",
      explanation: "12 % 2 = 0 AND 12 % 3 = 0. Both True → first branch prints."
    },
    practice: [
      { q: 'What is the output?\n\ntemp = 32\nif temp <= 32:\n    print("Freezing")\nelif temp <= 50:\n    print("Cold")\nelif temp <= 70:\n    print("Cool")\nelse:\n    print("Warm")', type: "multiple_choice", options: ["A) Freezing", "B) Cold", "C) Cool", "D) Warm"], correct: "A", explanation: "32 <= 32 is True → 'Freezing'.", diff: "beginner" },
      { q: 'What is the output?\n\nx = 7\nif x > 0:\n    if x % 2 == 0:\n        print("positive even")\n    else:\n        print("positive odd")', type: "multiple_choice", options: ["A) positive even", "B) positive odd", "C) Nothing", "D) Error"], correct: "B", explanation: "7 > 0 True. 7 % 2 = 1 ≠ 0 → else → 'positive odd'.", diff: "intermediate" },
      { q: 'Which logical operator should fill the blank to check if n is NOT between 1 and 10?\n\nif n < 1 ___ n > 10:\n    print("out of range")', type: "multiple_choice", options: ["A) and", "B) or", "C) not", "D) in"], correct: "B", explanation: "Use 'or': n < 1 OR n > 10 catches both ends of being out of range.", diff: "intermediate" },
      { q: "What is the output of: print(not (5 > 3))", type: "multiple_choice", options: ["A) True", "B) False", "C) not True", "D) Error"], correct: "B", explanation: "5 > 3 is True. not True = False.", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nage = 15\nif age >= 18:\n    print("adult")\nelif age >= 13:\n    print("teen")\nelse:\n    print("child")',
      type: "multiple_choice",
      options: ["A) adult", "B) teen", "C) child", "D) teen\nchild"],
      correct: "B",
      explanation: "15 < 18 (not adult). 15 >= 13 → 'teen'."
    }
  },

  // ══════════════════════════════════════════════
  // UNIT 4: LOOPS AND ITERATION (Days 25–33)
  // ══════════════════════════════════════════════

  25: {
    day: 25, unit: 4, unitName: "Loops and Iteration",
    title: "while Loops",
    bellRinger: {
      question: "What happens if the condition in a while loop never becomes False?",
      type: "multiple_choice",
      options: ["A) The loop runs once and stops", "B) The loop skips completely", "C) The loop runs forever (infinite loop)", "D) Python raises an error automatically"],
      correct: "C",
      explanation: "If the condition stays True, the loop never stops — this is an infinite loop. Always ensure the loop variable is updated!"
    },
    practice: [
      { q: 'How many times does this loop print?\n\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1', type: "multiple_choice", options: ["A) 2", "B) 3", "C) 4", "D) Forever"], correct: "B", explanation: "count goes: 0 (print), 1 (print), 2 (print), 3 (3 < 3 is False, stop). Prints 3 times: 0, 1, 2.", diff: "beginner" },
      { q: 'What is the output?\n\nx = 1\nwhile x <= 4:\n    print(x)\n    x += 1', type: "multiple_choice", options: ["A) 1 2 3 4", "B) 1\n2\n3\n4", "C) 1 2 3", "D) 0 1 2 3 4"], correct: "B", explanation: "x starts at 1, prints each on a new line, stops when x=5 (5 <= 4 is False). Prints 1, 2, 3, 4.", diff: "beginner" },
      { q: 'What is the output?\n\ntotal = 0\nn = 1\nwhile n <= 5:\n    total += n\n    n += 1\nprint(total)', type: "multiple_choice", options: ["A) 5", "B) 10", "C) 15", "D) 6"], correct: "C", explanation: "total = 1+2+3+4+5 = 15.", diff: "intermediate" },
      { q: "A sentinel value is used to signal the end of input in a loop.", type: "true_false", correct: "True", explanation: "A sentinel value (like -1 or 'quit') is a special value the user enters to stop the loop.", diff: "beginner" },
      { q: 'What is the output?\n\nn = 10\nwhile n > 0:\n    n -= 3\nprint(n)', type: "multiple_choice", options: ["A) 1", "B) 0", "C) -2", "D) -3"], correct: "C", explanation: "n: 10 → 7 → 4 → 1 → -2. At -2, -2 > 0 is False, loop stops. print(n) = -2.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ni = 0\nwhile i < 5:\n    i += 2\nprint(i)',
      type: "multiple_choice",
      options: ["A) 4", "B) 5", "C) 6", "D) 0"],
      correct: "C",
      explanation: "i: 0→2→4→6. When i=6, 6<5 is False. print(i) = 6."
    }
  },

  26: {
    day: 26, unit: 4, unitName: "Loops and Iteration",
    title: "for Loops & range()",
    bellRinger: {
      question: 'What is the output?\n\nfor i in range(5):\n    print(i)',
      type: "multiple_choice",
      options: ["A) 1 2 3 4 5 (on separate lines)", "B) 0 1 2 3 4 (on separate lines)", "C) 0 1 2 3 4 5 (on separate lines)", "D) 5"],
      correct: "B",
      explanation: "range(5) generates 0, 1, 2, 3, 4. It starts at 0 and stops BEFORE 5."
    },
    practice: [
      { q: 'What does range(2, 8) generate?', type: "multiple_choice", options: ["A) 2 3 4 5 6 7 8", "B) 2 3 4 5 6 7", "C) 1 2 3 4 5 6 7 8", "D) 0 1 2 3 4 5 6 7"], correct: "B", explanation: "range(start, stop) goes from start UP TO BUT NOT INCLUDING stop. range(2, 8) = 2, 3, 4, 5, 6, 7.", diff: "beginner" },
      { q: 'What does range(0, 10, 2) generate?', type: "multiple_choice", options: ["A) 0 2 4 6 8 10", "B) 0 2 4 6 8", "C) 2 4 6 8 10", "D) 1 3 5 7 9"], correct: "B", explanation: "range(0, 10, 2) = 0, 2, 4, 6, 8. The step is 2, stops before 10.", diff: "beginner" },
      { q: 'How many times does this loop run?\n\nfor i in range(3, 10, 2):\n    print(i)', type: "multiple_choice", options: ["A) 3", "B) 4", "C) 7", "D) 5"], correct: "B", explanation: "range(3, 10, 2) = 3, 5, 7, 9 → 4 values. (3, then +2 until we reach or pass 10)", diff: "intermediate" },
      { q: 'What is the output?\n\nfor i in range(5, 0, -1):\n    print(i)', type: "multiple_choice", options: ["A) 5 4 3 2 1 (separate lines)", "B) 5 4 3 2 1 0 (separate lines)", "C) 0 1 2 3 4 5 (separate lines)", "D) 4 3 2 1 0 (separate lines)"], correct: "A", explanation: "range(5, 0, -1) counts down: 5, 4, 3, 2, 1. Stops before 0.", diff: "intermediate" },
      { q: "The variable used in a for loop is accessible after the loop finishes.", type: "true_false", correct: "True", explanation: "The loop variable retains its last value after the loop. After 'for i in range(5):', i equals 4.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'How many times does this loop execute?\n\nfor i in range(1, 10, 3):\n    print(i)',
      type: "multiple_choice",
      options: ["A) 3", "B) 4", "C) 9", "D) 10"],
      correct: "A",
      explanation: "range(1, 10, 3) = 1, 4, 7. (1, then +3: 4, then +3: 7, then +3: 10 which is ≥ 10, stop). 3 values."
    }
  },

  27: {
    day: 27, unit: 4, unitName: "Loops and Iteration",
    title: "Loops with User Input",
    bellRinger: {
      question: 'What does a "sentinel value" do in a while loop?',
      type: "multiple_choice",
      options: ["A) Counts how many times the loop ran", "B) Stores the maximum value entered", "C) Signals the user is done entering data", "D) Restarts the loop from the beginning"],
      correct: "C",
      explanation: "A sentinel value (like -1, 'quit', or 'done') is a special value that tells the loop to stop when the user enters it."
    },
    practice: [
      { q: 'What is the output if the user enters: 5, 3, -1\n\ntotal = 0\nnum = int(input())\nwhile num != -1:\n    total += num\n    num = int(input())\nprint(total)', type: "multiple_choice", options: ["A) 7", "B) 8", "C) 9", "D) -1"], correct: "B", explanation: "5 and 3 are added (5 + 3 = 8). -1 is the sentinel — it triggers the loop to stop but is NOT added.", diff: "intermediate" },
      { q: 'How many times does the input() function get called if the user enters: hello, hello, quit\n\nword = input()\nwhile word != "quit":\n    print(word.upper())\n    word = input()', type: "multiple_choice", options: ["A) 2", "B) 3", "C) 4", "D) 1"], correct: "B", explanation: "input() is called 3 times: once before the loop ('hello'), once in the loop ('hello'), once in the loop ('quit').", diff: "challenge" },
      { q: "It's possible to have a loop that never executes if the condition is False from the start.", type: "true_false", correct: "True", explanation: "A while loop checks the condition BEFORE each iteration. If it's False at the start, the body never runs.", diff: "beginner" },
      { q: 'What is the purpose of the input() call BEFORE the while loop in this pattern?\n\nnum = int(input("Enter: "))\nwhile num != -1:\n    ...process num...\n    num = int(input("Enter: "))', type: "multiple_choice", options: ["A) It's a mistake — it should be inside the loop", "B) It's the 'priming read' that gets the first value to check", "C) It sets up a default value", "D) It validates the input"], correct: "B", explanation: "The first input() is the 'priming read'. You need a value before the condition can be checked for the first time.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "Which is the best sentinel value for a program that collects positive test scores?",
      type: "multiple_choice",
      options: ["A) 0", "B) 100", "C) -1", "D) 999"],
      correct: "C",
      explanation: "-1 is a good sentinel for scores because it can't be a valid score. 0 and 100 are valid scores."
    }
  },

  28: {
    day: 28, unit: 4, unitName: "Loops and Iteration",
    title: "Nested Loops",
    bellRinger: {
      question: "If an outer loop runs 3 times and an inner loop runs 4 times, how many total iterations occur?",
      type: "multiple_choice",
      options: ["A) 3", "B) 4", "C) 7", "D) 12"],
      correct: "D",
      explanation: "Nested loops multiply. The inner loop runs completely for each outer iteration. 3 × 4 = 12 total iterations."
    },
    practice: [
      { q: 'What is the output?\n\nfor i in range(2):\n    for j in range(3):\n        print("*", end="")\n    print()', type: "multiple_choice", options: ["A) ***\n***", "B) **\n**\n**", "C) ******", "D) * * *\n* * *"], correct: "A", explanation: "Outer loop: 2 times. Inner loop: prints 3 stars without newline. print() adds newline. Result: two rows of 3 stars.", diff: "intermediate" },
      { q: 'How many asterisks are printed?\n\nfor i in range(4):\n    for j in range(i + 1):\n        print("*", end="")\n    print()', type: "multiple_choice", options: ["A) 4", "B) 8", "C) 10", "D) 16"], correct: "C", explanation: "i=0: 1 star. i=1: 2 stars. i=2: 3 stars. i=3: 4 stars. Total: 1+2+3+4 = 10.", diff: "challenge" },
      { q: "In nested loops, the inner loop completes ALL its iterations for each iteration of the outer loop.", type: "true_false", correct: "True", explanation: "For every ONE outer loop iteration, the inner loop runs completely from start to finish.", diff: "beginner" },
      { q: 'What does this print?\n\nfor row in range(3):\n    for col in range(3):\n        print(row * col, end=" ")\n    print()', type: "multiple_choice", options: ["A) The first 9 numbers", "B) A 3×3 multiplication table starting at 0", "C) 9 zeros", "D) Error"], correct: "B", explanation: "Row 0: 0*0=0, 0*1=0, 0*2=0. Row 1: 1*0=0, 1*1=1, 1*2=2. Row 2: 2*0=0, 2*1=2, 2*2=4.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nfor i in range(1, 4):\n    print(i * "x")',
      type: "multiple_choice",
      options: ["A) x\nxx\nxxx", "B) xxx\nxx\nx", "C) 1x 2x 3x", "D) x xx xxx"],
      correct: "A",
      explanation: "i=1: 'x'. i=2: 'xx'. i=3: 'xxx'. Each printed on a new line."
    }
  },

  29: {
    day: 29, unit: 4, unitName: "Loops and Iteration",
    title: "break & continue",
    bellRinger: {
      question: "What does the 'break' statement do inside a loop?",
      type: "multiple_choice",
      options: ["A) Skips the current iteration and continues the loop", "B) Exits the loop immediately", "C) Restarts the loop from the beginning", "D) Ends the entire program"],
      correct: "B",
      explanation: "break exits the innermost loop immediately — no more iterations happen."
    },
    practice: [
      { q: 'What is the output?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)', type: "multiple_choice", options: ["A) 0 1 2 3 4", "B) 0 1 2 3", "C) 0 1 2", "D) 1 2 3"], correct: "C", explanation: "When i=3, break exits the loop. So only 0, 1, 2 are printed.", diff: "beginner" },
      { q: 'What is the output?\n\nfor i in range(6):\n    if i % 2 == 0:\n        continue\n    print(i)', type: "multiple_choice", options: ["A) 0 2 4", "B) 1 3 5", "C) 0 1 2 3 4 5", "D) 2 4 6"], correct: "B", explanation: "continue skips even numbers (i%2==0). Only odd numbers (1, 3, 5) are printed.", diff: "intermediate" },
      { q: "What does 'continue' do?", type: "multiple_choice", options: ["A) Exits the loop", "B) Skips the rest of the current iteration and goes to the next one", "C) Continues to the next function", "D) Restarts the entire loop"], correct: "B", explanation: "continue skips the remaining code for the current iteration and immediately starts the next iteration.", diff: "beginner" },
      { q: 'What is the output?\n\nfor i in range(1, 10):\n    if i % 3 == 0:\n        print(i)\n        break', type: "multiple_choice", options: ["A) 3 6 9", "B) 3", "C) 6", "D) 9"], correct: "B", explanation: "The loop finds the first multiple of 3 (which is 3) and breaks. Only 3 is printed.", diff: "intermediate" },
      { q: "break only exits the INNERMOST loop it's inside.", type: "true_false", correct: "True", explanation: "If you have nested loops, break only exits the loop it directly belongs to — outer loops continue.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nfor i in range(10):\n    if i == 5:\n        continue\n    if i == 7:\n        break\n    print(i)',
      type: "multiple_choice",
      options: ["A) 0 1 2 3 4 5 6", "B) 0 1 2 3 4 6", "C) 0 1 2 3 4 6 7", "D) 0 1 2 3 4"],
      correct: "B",
      explanation: "i=5: continue (skip printing 5). i=7: break (stop). Printed: 0,1,2,3,4,6."
    }
  },

  30: {
    day: 30, unit: 4, unitName: "Loops and Iteration",
    title: "Loops with Strings",
    bellRinger: {
      question: 'What is the output?\n\nword = "cat"\nfor letter in word:\n    print(letter)',
      type: "multiple_choice",
      options: ["A) cat", "B) c a t (on one line)", "C) c\na\nt (on three lines)", "D) 3"],
      correct: "C",
      explanation: "Iterating over a string gives one character at a time. Each letter prints on its own line."
    },
    practice: [
      { q: 'What is the output?\n\ncount = 0\nfor char in "banana":\n    if char == "a":\n        count += 1\nprint(count)', type: "multiple_choice", options: ["A) 1", "B) 2", "C) 3", "D) 6"], correct: "C", explanation: "'banana' has 3 a's: b-A-n-A-n-A. count becomes 3.", diff: "intermediate" },
      { q: 'What is the output?\n\nresult = ""\nfor char in "hello":\n    result += char.upper()\nprint(result)', type: "multiple_choice", options: ["A) hello", "B) HELLO", "C) Hello", "D) Error"], correct: "B", explanation: "Each character is converted to uppercase and added to result. 'HELLO'.", diff: "intermediate" },
      { q: 'What is the output?\n\nresult = ""\nfor char in "Python":\n    result = char + result\nprint(result)', type: "multiple_choice", options: ["A) Python", "B) nohtyP", "C) nPyhthoyn", "D) Error"], correct: "B", explanation: "Each character is prepended (added to the front): result goes '', 'P', 'yP', 'tyP', 'htyP', 'ohtyP', 'nohtyP'. This reverses the string.", diff: "challenge" },
      { q: "You can use 'in' to check if a character is in a string.", type: "true_false", correct: "True", explanation: "The 'in' operator works with strings: 'a' in 'banana' → True.", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ntext = "Hello"\ncount = 0\nfor ch in text:\n    if ch.islower():\n        count += 1\nprint(count)',
      type: "multiple_choice",
      options: ["A) 5", "B) 4", "C) 1", "D) 0"],
      correct: "B",
      explanation: "'H' is uppercase. 'e', 'l', 'l', 'o' are lowercase. count = 4."
    }
  },

  31: {
    day: 31, unit: 4, unitName: "Loops and Iteration",
    title: "Accumulator Pattern",
    bellRinger: {
      question: "In the accumulator pattern, you must initialize the accumulator variable BEFORE the loop.",
      type: "true_false",
      correct: "True",
      explanation: "The accumulator (sum=0, count=0, etc.) must be set up before the loop starts, so it exists when the loop tries to update it."
    },
    practice: [
      { q: 'What is the output?\n\ntotal = 0\nfor n in range(1, 6):\n    total += n\nprint(total)', type: "multiple_choice", options: ["A) 10", "B) 15", "C) 5", "D) 20"], correct: "B", explanation: "Sum of 1+2+3+4+5 = 15.", diff: "beginner" },
      { q: 'What is the output?\n\nresult = 1\nfor n in range(1, 6):\n    result *= n\nprint(result)', type: "multiple_choice", options: ["A) 15", "B) 24", "C) 120", "D) 5"], correct: "C", explanation: "This is 5 factorial: 1×2×3×4×5 = 120. Note: must initialize to 1 (not 0!) for product.", diff: "intermediate" },
      { q: 'What is the output?\n\nnums = [3, 7, 2, 9, 1]\nbest = nums[0]\nfor n in nums:\n    if n > best:\n        best = n\nprint(best)', type: "multiple_choice", options: ["A) 3", "B) 7", "C) 9", "D) 1"], correct: "C", explanation: "This finds the maximum. Starts with 3, updates to 7, then to 9. Final best = 9.", diff: "intermediate" },
      { q: "To accumulate a running product, what should the initial value be?", type: "multiple_choice", options: ["A) 0", "B) 1", "C) -1", "D) The first item"], correct: "B", explanation: "For multiplication, start with 1. Multiplying by 1 doesn't change anything. Starting with 0 would give 0 always!", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ncount = 0\nfor i in range(1, 11):\n    if i % 2 != 0:\n        count += 1\nprint(count)',
      type: "multiple_choice",
      options: ["A) 4", "B) 5", "C) 6", "D) 10"],
      correct: "B",
      explanation: "Counts odd numbers from 1 to 10: 1, 3, 5, 7, 9 → 5 odd numbers."
    }
  },

  32: {
    day: 32, unit: 4, unitName: "Loops and Iteration",
    title: "FizzBuzz & Loop Review",
    bellRinger: {
      question: 'In classic FizzBuzz, what is printed for the number 15?',
      type: "multiple_choice",
      options: ["A) Fizz", "B) Buzz", "C) FizzBuzz", "D) 15"],
      correct: "C",
      explanation: "15 is divisible by both 3 (Fizz) and 5 (Buzz), so we print 'FizzBuzz'. The combined check must come FIRST."
    },
    practice: [
      { q: 'What prints for n = 9 in FizzBuzz (div by 3 = Fizz, div by 5 = Buzz)?', type: "multiple_choice", options: ["A) 9", "B) Fizz", "C) Buzz", "D) FizzBuzz"], correct: "B", explanation: "9 % 3 == 0 (divisible by 3) but 9 % 5 != 0 → Fizz.", diff: "beginner" },
      { q: 'Why must the FizzBuzz check for divisible by BOTH 3 and 5 come before the individual checks?', type: "multiple_choice", options: ["A) It doesn't matter, order is arbitrary", "B) If div-by-3 is checked first, 15 would print 'Fizz' instead of 'FizzBuzz'", "C) Python requires this order", "D) The individual checks would never run otherwise"], correct: "B", explanation: "15 is divisible by 3, so if we check % 3 first, it prints Fizz and stops. We must check both FIRST with 'and'.", diff: "intermediate" },
      { q: 'What is the output?\n\nfor i in range(1, 4):\n    for j in range(1, 4):\n        if i == j:\n            print(i, end=" ")', type: "multiple_choice", options: ["A) 1 2 3", "B) 1\n2\n3", "C) 1 1 2 2 3 3", "D) 1 4 9"], correct: "A", explanation: "Only prints when i == j: (1,1), (2,2), (3,3). print with end=\" \" keeps on same line.", diff: "challenge" },
      { q: 'What is the output?\n\ntotal = 0\nfor n in range(1, 11):\n    if n % 2 == 0:\n        total += n\nprint(total)', type: "multiple_choice", options: ["A) 25", "B) 30", "C) 20", "D) 55"], correct: "B", explanation: "Sum of even numbers 1-10: 2+4+6+8+10 = 30.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "For FizzBuzz (1–20), how many numbers print 'FizzBuzz'?",
      type: "multiple_choice",
      options: ["A) 1 (only 15)", "B) 2 (only 15 and 30)", "C) 3", "D) 0"],
      correct: "A",
      explanation: "From 1 to 20, only 15 is divisible by both 3 and 5. (30 is outside the range)"
    }
  },

  33: {
    day: 33, unit: 4, unitName: "Loops and Iteration",
    title: "Unit 4 Review & Project",
    bellRinger: {
      question: 'What is the output?\n\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    print(i)',
      type: "multiple_choice",
      options: ["A) 1 2 3 4 5", "B) 2 4", "C) 1 3 5", "D) 1 3"],
      correct: "C",
      explanation: "continue skips even numbers. Odd numbers in range 1-5: 1, 3, 5."
    },
    practice: [
      { q: 'What is the output?\n\nfor i in range(3):\n    print(i, end=" ")\nprint("done")', type: "multiple_choice", options: ["A) 0 1 2\ndone", "B) 0 1 2 done", "C) 0\n1\n2\ndone", "D) done"], correct: "B", explanation: "end=\" \" prevents newline after each number. print('done') adds the final newline. All on one line.", diff: "beginner" },
      { q: 'What is the output?\n\ncount = 0\nfor i in range(10):\n    if i % 3 == 0:\n        count += 1\nprint(count)', type: "multiple_choice", options: ["A) 3", "B) 4", "C) 10", "D) 9"], correct: "B", explanation: "Multiples of 3 in range(10): 0, 3, 6, 9 → 4 numbers.", diff: "intermediate" },
      { q: 'What is the difference between "for" and "while" loops in terms of best use?', type: "multiple_choice", options: ["A) for is faster; while is slower", "B) for is best when iterations are known; while is best for unknown/conditional loops", "C) while can loop; for cannot", "D) They are identical in all situations"], correct: "B", explanation: "Use for when you know how many times (or iterate over a sequence). Use while when you loop until a condition changes.", diff: "intermediate" },
      { q: 'What is the output?\n\nn = 5\nresult = 0\nfor _ in range(n):\n    result += n\nprint(result)', type: "multiple_choice", options: ["A) 5", "B) 10", "C) 25", "D) Error"], correct: "C", explanation: "Adds 5 to result 5 times: 0+5+5+5+5+5 = 25. _ is a conventional name when the loop variable isn't used.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nnum = 7\nfor i in range(1, 6):\n    print(num * i, end=" ")',
      type: "multiple_choice",
      options: ["A) 7 14 21 28 35", "B) 1 2 3 4 5", "C) 7 14 21 28 35 42", "D) 14 21 28 35 42"],
      correct: "A",
      explanation: "i goes 1-5: 7×1=7, 7×2=14, 7×3=21, 7×4=28, 7×5=35. Output: 7 14 21 28 35"
    }
  },

  // ══════════════════════════════════════════════
  // UNIT 5: FUNCTIONS AND MODULARITY (Days 34–42)
  // ══════════════════════════════════════════════

  34: {
    day: 34, unit: 5, unitName: "Functions and Modularity",
    title: "Defining & Calling Functions",
    bellRinger: {
      question: "What keyword is used to define a function in Python?",
      type: "multiple_choice",
      options: ["A) function", "B) define", "C) def", "D) func"],
      correct: "C",
      explanation: "Python uses 'def' followed by the function name and parentheses: def my_function():"
    },
    practice: [
      { q: 'What is the output?\n\ndef greet():\n    print("Hello!")\n\ngreet()\ngreet()', type: "multiple_choice", options: ["A) Hello!", "B) Hello!\nHello!", "C) greet\ngreet", "D) Nothing"], correct: "B", explanation: "greet() is called twice, so 'Hello!' is printed twice.", diff: "beginner" },
      { q: 'What is the output?\n\ndef greet():\n    print("Hello!")\n\nprint("Before")\ngreet()\nprint("After")', type: "multiple_choice", options: ["A) Hello!\nBefore\nAfter", "B) Before\nHello!\nAfter", "C) Before\nAfter\nHello!", "D) Before\nAfter"], correct: "B", explanation: "Code runs top to bottom. 'Before' prints, then greet() is called (Hello!), then 'After'.", diff: "beginner" },
      { q: "Defining a function causes its body to execute immediately.", type: "true_false", correct: "False", explanation: "Defining a function only stores it for later. The body runs only when you CALL the function with ().", diff: "beginner" },
      { q: 'What is the output?\n\ndef say_hi():\n    print("Hi")\n\nsay_hi\n# Note: no parentheses!', type: "multiple_choice", options: ["A) Hi", "B) Nothing happens", "C) Error", "D) say_hi"], correct: "B", explanation: "Without (), you're just referencing the function object — not calling it. No code executes.", diff: "intermediate" },
      { q: 'How many times is "Start" printed?\n\ndef repeat():\n    print("Start")\n    print("End")\n\nfor i in range(3):\n    repeat()', type: "multiple_choice", options: ["A) 1", "B) 2", "C) 3", "D) 6"], correct: "C", explanation: "repeat() is called 3 times. Each call prints 'Start' once. 'Start' prints 3 times total.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndef double(n):\n    print(n * 2)\n\ndouble(5)',
      type: "multiple_choice",
      options: ["A) 10", "B) double(5)", "C) n * 2", "D) Error — n not defined"],
      correct: "A",
      explanation: "double(5) calls the function with n=5. n * 2 = 10. print(10) outputs 10."
    }
  },

  35: {
    day: 35, unit: 5, unitName: "Functions and Modularity",
    title: "Parameters & Arguments",
    bellRinger: {
      question: "What is the difference between a parameter and an argument?",
      type: "multiple_choice",
      options: ["A) They are identical — same thing", "B) Parameter is in the function definition; argument is the value passed when calling", "C) Argument is in the definition; parameter is at the call", "D) Parameters are for int; arguments are for strings"],
      correct: "B",
      explanation: "Parameter: variable in def (def greet(name) — 'name' is the parameter). Argument: actual value passed (greet('Alice') — 'Alice' is the argument)."
    },
    practice: [
      { q: 'What is the output?\n\ndef add(a, b):\n    print(a + b)\n\nadd(3, 4)', type: "multiple_choice", options: ["A) a + b", "B) 34", "C) 7", "D) Error"], correct: "C", explanation: "a=3, b=4. a + b = 7. print(7) outputs 7.", diff: "beginner" },
      { q: 'What is the output?\n\ndef greet(name, greeting):\n    print(greeting + ", " + name)\n\ngreet("Alice", "Hello")', type: "multiple_choice", options: ["A) Alice, Hello", "B) Hello, Alice", "C) name, greeting", "D) Error"], correct: "B", explanation: "greeting='Hello', name='Alice'. greeting + ', ' + name = 'Hello, Alice'.", diff: "beginner" },
      { q: 'What is the output?\n\ndef greet(name, greeting):\n    print(greeting + ", " + name)\n\ngreet(greeting="Hi", name="Bob")', type: "multiple_choice", options: ["A) name, greeting", "B) Bob, Hi", "C) Hi, Bob", "D) Error"], correct: "C", explanation: "Keyword arguments let you specify by name. greeting='Hi', name='Bob'. 'Hi, Bob'.", diff: "intermediate" },
      { q: "What happens if you call a function with too few arguments?", type: "multiple_choice", options: ["A) Python uses None for missing ones", "B) Python raises a TypeError", "C) Python uses 0 for numeric params", "D) Python skips the function"], correct: "B", explanation: "Too few (or too many) arguments raises a TypeError: function missing required positional argument.", diff: "intermediate" },
      { q: 'What is the output?\n\ndef power(base, exp):\n    return base ** exp\n\nprint(power(2, 3), power(3, 2))', type: "multiple_choice", options: ["A) 8 9", "B) 9 8", "C) 6 6", "D) 23 32"], correct: "A", explanation: "power(2,3)=8, power(3,2)=9. print with comma = space between: '8 9'.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndef area(w, h):\n    print(w * h)\n\narea(h=6, w=4)',
      type: "multiple_choice",
      options: ["A) 10", "B) 24", "C) Error", "D) w * h"],
      correct: "B",
      explanation: "Keyword arguments: w=4, h=6. 4 * 6 = 24."
    }
  },

  36: {
    day: 36, unit: 5, unitName: "Functions and Modularity",
    title: "Return Values",
    bellRinger: {
      question: "What is the key difference between print() and return in a function?",
      type: "multiple_choice",
      options: ["A) print() sends a value back to the caller; return shows it on screen", "B) return sends a value back to the caller; print() only displays it on screen", "C) They are identical", "D) return is only for strings; print() works for all types"],
      correct: "B",
      explanation: "return sends the value back so it can be stored or used. print() only displays — the value can't be used in further calculations."
    },
    practice: [
      { q: 'What is the output?\n\ndef square(n):\n    return n ** 2\n\nresult = square(5)\nprint(result)', type: "multiple_choice", options: ["A) 25", "B) n ** 2", "C) 5", "D) Error"], correct: "A", explanation: "square(5) returns 5**2 = 25. result = 25. print(result) = 25.", diff: "beginner" },
      { q: 'What is the output?\n\ndef add(a, b):\n    print(a + b)\n\nresult = add(3, 4)\nprint(result)', type: "multiple_choice", options: ["A) 7\n7", "B) 7\nNone", "C) None\n7", "D) 7"], correct: "B", explanation: "add() uses print() not return. The function call prints 7, then returns None. print(result) prints None.", diff: "intermediate" },
      { q: 'What is the output?\n\ndef classify(n):\n    if n > 0:\n        return "positive"\n    return "non-positive"\n\nprint(classify(-3))', type: "multiple_choice", options: ["A) positive", "B) non-positive", "C) Error", "D) Nothing"], correct: "B", explanation: "-3 > 0 is False. The first return is skipped. The second return gives 'non-positive'.", diff: "intermediate" },
      { q: "What does a function return if it has no return statement?", type: "multiple_choice", options: ["A) 0", "B) False", "C) None", "D) An error"], correct: "C", explanation: "A function without return (or with bare 'return') returns None by default.", diff: "beginner" },
      { q: 'What is the output?\n\ndef absolute(n):\n    if n < 0:\n        return -n\n    return n\n\nprint(absolute(-7) + absolute(3))', type: "multiple_choice", options: ["A) 4", "B) -4", "C) 10", "D) -10"], correct: "C", explanation: "absolute(-7) = 7. absolute(3) = 3. 7 + 3 = 10.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndef is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))\nprint(is_even(7))',
      type: "multiple_choice",
      options: ["A) True\nTrue", "B) True\nFalse", "C) False\nTrue", "D) 0\n1"],
      correct: "B",
      explanation: "4 % 2 == 0 → True. 7 % 2 == 1, 1 == 0 → False."
    }
  },

  37: {
    day: 37, unit: 5, unitName: "Functions and Modularity",
    title: "Variable Scope",
    bellRinger: {
      question: "A variable created inside a function is called a:",
      type: "multiple_choice",
      options: ["A) Global variable", "B) Local variable", "C) Parameter", "D) Constant"],
      correct: "B",
      explanation: "Variables created inside a function exist only while that function runs — they are local variables."
    },
    practice: [
      { q: 'What is the output?\n\nx = 10\n\ndef show():\n    x = 5\n    print(x)\n\nshow()\nprint(x)', type: "multiple_choice", options: ["A) 5\n5", "B) 10\n10", "C) 5\n10", "D) Error"], correct: "C", explanation: "Inside show(), x = 5 is a LOCAL variable (shadowing global). print(x) inside → 5. Outside → global x = 10.", diff: "intermediate" },
      { q: 'What happens if you try to access a local variable outside its function?', type: "multiple_choice", options: ["A) Python returns 0", "B) Python returns None", "C) Python raises a NameError", "D) Python accesses the global variable instead"], correct: "C", explanation: "Local variables don't exist outside their function. Accessing them raises NameError: name 'x' is not defined.", diff: "intermediate" },
      { q: "What is the output?\n\ndef add_one():\n    global total\n    total += 1\n\ntotal = 0\nadd_one()\nadd_one()\nprint(total)", type: "multiple_choice", options: ["A) 0", "B) 1", "C) 2", "D) Error"], correct: "C", explanation: "The global keyword lets a function modify a global variable. total is incremented twice → 2.", diff: "challenge" },
      { q: "The best practice for sharing data between functions is:", type: "multiple_choice", options: ["A) Use lots of global variables", "B) Pass data via parameters and get it back via return", "C) Use print() to transfer data", "D) Only use local variables"], correct: "B", explanation: "Best practice: pass data in as arguments, get data out as return values. Avoid globals — they make code hard to debug.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nmessage = "global"\n\ndef test():\n    message = "local"\n\ntest()\nprint(message)',
      type: "multiple_choice",
      options: ["A) local", "B) global", "C) Error", "D) None"],
      correct: "B",
      explanation: "test() creates a LOCAL variable named message. The global message is unchanged. print(message) = 'global'."
    }
  },

  38: {
    day: 38, unit: 5, unitName: "Functions and Modularity",
    title: "Modular Design",
    bellRinger: {
      question: "What principle states that each function should do exactly ONE job?",
      type: "multiple_choice",
      options: ["A) DRY principle", "B) Single Responsibility Principle", "C) YAGNI principle", "D) Modular abstraction"],
      correct: "B",
      explanation: "Single Responsibility Principle: each function should have exactly one, well-defined job. This makes code easier to test and debug."
    },
    practice: [
      { q: "What does DRY stand for in programming?", type: "multiple_choice", options: ["A) Do Repeat Yourself", "B) Don't Repeat Yourself", "C) Define Reusable Yield", "D) Debug Review Yield"], correct: "B", explanation: "DRY = Don't Repeat Yourself. If you write the same code twice, extract it into a function.", diff: "beginner" },
      { q: "A modular program is one that:", type: "multiple_choice", options: ["A) Uses only one function", "B) Is split into small, focused functions that each do one job", "C) Has no functions at all", "D) Only uses while loops"], correct: "B", explanation: "Modular design breaks programs into small functions. Each does one job, making the code easier to read, test, and maintain.", diff: "beginner" },
      { q: "Which function name follows the Single Responsibility Principle best?", type: "multiple_choice", options: ["A) do_everything()", "B) calculate_and_display_and_save()", "C) get_user_input()", "D) process()"], correct: "C", explanation: "get_user_input() clearly does one specific thing. The others are vague or do multiple things.", diff: "intermediate" },
      { q: "Bottom-up development means:", type: "multiple_choice", options: ["A) Writing the main() function first", "B) Testing from the top of the file down", "C) Building and testing small helper functions first, then connecting them", "D) Writing the UI before the logic"], correct: "C", explanation: "Bottom-up: build the simplest pieces first, test them individually, then combine into a complete program.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "Which of these is the BEST reason to use functions?",
      type: "multiple_choice",
      options: ["A) To make programs shorter", "B) To avoid using variables", "C) To organize code, enable reuse, and make debugging easier", "D) Because Python requires them"],
      correct: "C",
      explanation: "Functions organize code (readable), enable reuse (DRY), and isolate problems (easier debugging). These are the core benefits."
    }
  },

  39: {
    day: 39, unit: 5, unitName: "Functions and Modularity",
    title: "Functions with Lists",
    bellRinger: {
      question: 'What is the output?\n\ndef count_items(lst):\n    return len(lst)\n\nprint(count_items([1, 2, 3, 4, 5]))',
      type: "multiple_choice",
      options: ["A) 15", "B) 5", "C) [1, 2, 3, 4, 5]", "D) Error"],
      correct: "B",
      explanation: "len([1,2,3,4,5]) = 5. The function returns 5, which is then printed."
    },
    practice: [
      { q: 'What is the output?\n\ndef sum_list(nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total\n\nprint(sum_list([2, 4, 6]))', type: "multiple_choice", options: ["A) 246", "B) 10", "C) 12", "D) 3"], correct: "C", explanation: "Sums 2+4+6 = 12. Returns 12, which is printed.", diff: "beginner" },
      { q: 'What is the output?\n\ndef get_evens(nums):\n    result = []\n    for n in nums:\n        if n % 2 == 0:\n            result.append(n)\n    return result\n\nprint(get_evens([1, 2, 3, 4, 5, 6]))', type: "multiple_choice", options: ["A) [1, 3, 5]", "B) [2, 4, 6]", "C) [1, 2, 3, 4, 5, 6]", "D) 3"], correct: "B", explanation: "Filters out odd numbers and returns [2, 4, 6].", diff: "intermediate" },
      { q: 'What is the output?\n\ndef average(nums):\n    return sum(nums) / len(nums)\n\nscores = [80, 90, 70, 100]\nprint(average(scores))', type: "multiple_choice", options: ["A) 80", "B) 85.0", "C) 340", "D) 84.0"], correct: "B", explanation: "sum([80,90,70,100]) = 340. 340 / 4 = 85.0.", diff: "intermediate" },
      { q: "When you pass a list to a function, the function can modify the ORIGINAL list.", type: "true_false", correct: "True", explanation: "Lists are passed by reference in Python. If you modify the list inside the function (append, pop, etc.), the original changes too.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndef max_val(nums):\n    m = nums[0]\n    for n in nums:\n        if n > m:\n            m = n\n    return m\n\nprint(max_val([5, 2, 9, 1, 7]))',
      type: "multiple_choice",
      options: ["A) 5", "B) 9", "C) 1", "D) 7"],
      correct: "B",
      explanation: "Finds the maximum. Starts at 5, updates to 9 when it finds 9. Returns 9."
    }
  },

  40: {
    day: 40, unit: 5, unitName: "Functions and Modularity",
    title: "Default Parameters & Multiple Returns",
    bellRinger: {
      question: 'What is the output?\n\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(5))',
      type: "multiple_choice",
      options: ["A) 5", "B) 10", "C) 25", "D) Error — exp not provided"],
      correct: "C",
      explanation: "exp has a default value of 2. When called as power(5), exp uses the default: 5 ** 2 = 25."
    },
    practice: [
      { q: 'What is the output?\n\ndef power(base, exp=2):\n    return base ** exp\n\nprint(power(3, 3))', type: "multiple_choice", options: ["A) 9", "B) 27", "C) 6", "D) 8"], correct: "B", explanation: "When exp is provided (3), the default is overridden. 3 ** 3 = 27.", diff: "beginner" },
      { q: 'What is the output?\n\ndef get_info():\n    return "Alice", 25\n\nname, age = get_info()\nprint(f"{name} is {age}")', type: "multiple_choice", options: ["A) Alice, 25", "B) Alice is 25", "C) ('Alice', 25)", "D) Error"], correct: "B", explanation: "Returning multiple values returns a tuple. Unpacking: name='Alice', age=25. f-string: 'Alice is 25'.", diff: "intermediate" },
      { q: "Default parameters must come AFTER required parameters in the function definition.", type: "true_false", correct: "True", explanation: "def func(required, default=value) is correct. def func(default=value, required) causes a SyntaxError.", diff: "intermediate" },
      { q: 'What is the output?\n\ndef describe(name, grade="A", year=12):\n    print(f"{name}: Grade {grade}, Year {year}")\n\ndescribe("Sam", year=10)', type: "multiple_choice", options: ["A) Sam: Grade A, Year 12", "B) Sam: Grade A, Year 10", "C) Sam: Grade year, Year 10", "D) Error"], correct: "B", explanation: "name='Sam', grade uses default 'A', year is overridden to 10. Output: 'Sam: Grade A, Year 10'.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndef minmax(nums):\n    return min(nums), max(nums)\n\nlo, hi = minmax([4, 1, 8, 2, 6])\nprint(lo, hi)',
      type: "multiple_choice",
      options: ["A) 1 8", "B) 4 6", "C) 8 1", "D) (1, 8)"],
      correct: "A",
      explanation: "min([4,1,8,2,6])=1, max=8. Returns (1,8). Unpacked: lo=1, hi=8. print(1, 8) = '1 8'."
    }
  },

  41: {
    day: 41, unit: 5, unitName: "Functions and Modularity",
    title: "Debugging Functions",
    bellRinger: {
      question: 'What is wrong with this code?\n\nresult = double(4)\n\ndef double(n):\n    return n * 2',
      type: "multiple_choice",
      options: ["A) Wrong function name", "B) Function called before it is defined", "C) Return is incorrect", "D) Nothing wrong"],
      correct: "B",
      explanation: "In Python, you must define a function BEFORE calling it. Calling double(4) before the def causes a NameError."
    },
    practice: [
      { q: 'What is the bug?\n\ndef add(a, b):\n    total = a + b\n\nresult = add(3, 4)\nprint(result)', type: "multiple_choice", options: ["A) Wrong variable names", "B) Missing return statement — function returns None", "C) Wrong indentation", "D) print() should be inside function"], correct: "B", explanation: "add() calculates total but never returns it. Without return, functions return None. result = None.", diff: "intermediate" },
      { q: "What is the error type when you call a function that doesn't exist?", type: "multiple_choice", options: ["A) SyntaxError", "B) TypeError", "C) NameError", "D) ValueError"], correct: "C", explanation: "Calling an undefined function raises NameError: name 'function_name' is not defined.", diff: "beginner" },
      { q: 'What is the bug and the output?\n\ndef greet(name):\n    print("Hello, " + name)\n\nresult = greet("Alice")\nprint(result.upper())', type: "multiple_choice", options: ["A) Hello, Alice\nHELLO, ALICE", "B) Hello, Alice\nError — AttributeError", "C) Error — name not defined", "D) HELLO, ALICE"], correct: "B", explanation: "greet() uses print, not return. result = None. Calling None.upper() raises AttributeError: 'NoneType' has no attribute 'upper'.", diff: "challenge" },
      { q: "Adding temporary print() statements to trace variable values is a valid debugging technique.", type: "true_false", correct: "True", explanation: "Print-tracing (adding print(x) to see values) is a standard and effective debugging technique.", diff: "beginner" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndef mystery(x):\n    x = x * 2\n    return x\n\nnum = 5\nmystery(num)\nprint(num)',
      type: "multiple_choice",
      options: ["A) 10", "B) 5", "C) None", "D) Error"],
      correct: "B",
      explanation: "Inside mystery(), x is a LOCAL copy. Changing it doesn't affect num. num is still 5."
    }
  },

  42: {
    day: 42, unit: 5, unitName: "Functions and Modularity",
    title: "Unit 5 Review & Project",
    bellRinger: {
      question: 'What is the output?\n\ndef factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\nprint(factorial(4))',
      type: "multiple_choice",
      options: ["A) 4", "B) 10", "C) 24", "D) 120"],
      correct: "C",
      explanation: "4! = 1×2×3×4 = 24."
    },
    practice: [
      { q: 'What is the output?\n\ndef repeat(text, times=3):\n    return text * times\n\nprint(repeat("ha"))\nprint(repeat("ha", 2))', type: "multiple_choice", options: ["A) hahaha\nhaha", "B) hahaha\nhahahaha", "C) ha ha ha\nha ha", "D) Error"], correct: "A", explanation: "repeat('ha') uses default times=3: 'hahaha'. repeat('ha', 2): 'haha'.", diff: "intermediate" },
      { q: 'What is the output?\n\ndef swap(a, b):\n    return b, a\n\nx, y = swap(1, 2)\nprint(x, y)', type: "multiple_choice", options: ["A) 1 2", "B) 2 1", "C) (2, 1)", "D) Error"], correct: "B", explanation: "swap returns (b, a) = (2, 1). Unpacking: x=2, y=1. print(x, y) = '2 1'.", diff: "intermediate" },
      { q: 'What is the scope of a variable declared inside a function?', type: "multiple_choice", options: ["A) Global — accessible everywhere", "B) Local — accessible only inside that function", "C) Module — accessible only in that file", "D) Class — accessible to all methods"], correct: "B", explanation: "Variables inside a function are local — they only exist while the function runs.", diff: "beginner" },
      { q: 'What is the output?\n\ndef double(n):\n    return n * 2\n\ndef triple(n):\n    return n * 3\n\nprint(double(triple(2)))', type: "multiple_choice", options: ["A) 12", "B) 10", "C) 6", "D) 8"], correct: "A", explanation: "Inner first: triple(2) = 6. Outer: double(6) = 12.", diff: "challenge" }
    ],
    exitTicket: {
      question: "What is the output of a function that has 'return' with no value?",
      type: "multiple_choice",
      options: ["A) 0", "B) False", "C) None", "D) Error"],
      correct: "C",
      explanation: "A bare 'return' (or no return) returns None. This is Python's null/nothing value."
    }
  },

  // ══════════════════════════════════════════════
  // UNIT 6: DEBUGGING AND DOCUMENTATION (Days 43–48)
  // ══════════════════════════════════════════════

  43: {
    day: 43, unit: 6, unitName: "Debugging and Documentation",
    title: "Types of Errors & Debugging Strategies",
    bellRinger: {
      question: "Which type of error is detected BEFORE the program runs?",
      type: "multiple_choice",
      options: ["A) Runtime error", "B) Logic error", "C) Syntax error", "D) Name error"],
      correct: "C",
      explanation: "Syntax errors are detected at parse time (before execution). Python can't even start running the program."
    },
    practice: [
      { q: 'What type of error is caused by dividing by zero?', type: "multiple_choice", options: ["A) SyntaxError", "B) ZeroDivisionError", "C) LogicError", "D) ValueError"], correct: "B", explanation: "ZeroDivisionError is a runtime error that occurs when you try to divide by 0.", diff: "beginner" },
      { q: 'What type of error occurs when code runs but produces the wrong answer?', type: "multiple_choice", options: ["A) SyntaxError", "B) RuntimeError", "C) LogicError", "D) TypeError"], correct: "C", explanation: "Logic errors: the program runs without crashing but gives wrong results. The algorithm is flawed.", diff: "beginner" },
      { q: "What error occurs here?\n\nname = input('Enter name: ')\nprint(naem)", type: "multiple_choice", options: ["A) SyntaxError", "B) NameError", "C) TypeError", "D) LogicError"], correct: "B", explanation: "'naem' is a typo — that variable doesn't exist. Python raises NameError: name 'naem' is not defined.", diff: "intermediate" },
      { q: 'What error occurs here?\n\nnum = int("hello")', type: "multiple_choice", options: ["A) TypeError", "B) SyntaxError", "C) ValueError", "D) NameError"], correct: "C", explanation: "int('hello') raises ValueError because 'hello' is not a valid integer string.", diff: "intermediate" },
      { q: "What is the 'rubber duck debugging' technique?", type: "multiple_choice", options: ["A) Testing code in a sandbox", "B) Explaining your code line-by-line to someone (or an object) to spot the error", "C) Running the code backwards", "D) Deleting code until it works"], correct: "B", explanation: "Rubber duck debugging: explain each line out loud. Often you'll spot the bug while explaining it — even to an inanimate object!", diff: "beginner" }
    ],
    exitTicket: {
      question: 'Which error type is this?\n\nfor i range(5):\n    print(i)',
      type: "multiple_choice",
      options: ["A) RuntimeError", "B) SyntaxError", "C) LogicError", "D) NameError"],
      correct: "B",
      explanation: "Missing 'in' keyword: should be 'for i in range(5):'. Python can't parse this → SyntaxError."
    }
  },

  44: {
    day: 44, unit: 6, unitName: "Debugging and Documentation",
    title: "Writing to Files",
    bellRinger: {
      question: 'What file mode opens a file for WRITING (creating new or overwriting)?',
      type: "multiple_choice",
      options: ['A) "r"', 'B) "w"', 'C) "a"', 'D) "x"'],
      correct: "B",
      explanation: '"w" opens for writing. Creates file if it doesn\'t exist, overwrites if it does. "a" appends, "r" reads, "x" creates new only.'
    },
    practice: [
      { q: 'What does mode "a" do when opening a file?', type: "multiple_choice", options: ["A) Overwrites the file", "B) Creates a new file only", "C) Appends to the end without deleting existing content", "D) Opens for reading"], correct: "C", explanation: '"a" (append) opens the file and adds new content at the END. Existing content is preserved.', diff: "beginner" },
      { q: 'What is the correct way to write to a file?\n\nwith open("data.txt", "w") as f:\n    f.write("Hello")', type: "multiple_choice", options: ["A) This is correct", 'B) Should use write("data.txt")', 'C) with block is wrong syntax', "D) f.write needs a newline first"], correct: "A", explanation: "This is correct file writing syntax. open() creates/opens the file, 'w' is write mode, f.write() writes the content.", diff: "beginner" },
      { q: "What happens if you use mode 'w' on a file that already has data?", type: "multiple_choice", options: ["A) Python raises an error", "B) The existing data is preserved", "C) The existing data is deleted (overwritten)", "D) A new file with a different name is created"], correct: "C", explanation: "'w' mode OVERWRITES. The existing file is truncated (deleted) and a new file is created. Use 'a' to preserve data.", diff: "intermediate" },
      { q: "The 'with' statement automatically closes the file when the block ends.", type: "true_false", correct: "True", explanation: "The 'with' statement acts as a context manager. The file is automatically closed when you exit the with block.", diff: "beginner" },
      { q: 'If you call f.write("Line1") and then f.write("Line2"), what is in the file?', type: "multiple_choice", options: ["A) Line1\nLine2", "B) Line1Line2", "C) Line2 (second overwrites first)", "D) Line1 Line2"], correct: "B", explanation: "f.write() does not add newlines automatically. You must add '\\n' yourself: f.write('Line1\\n').", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'Which code correctly APPENDS a new line to an existing file?',
      type: "multiple_choice",
      options: ['A) with open("log.txt", "w") as f:\n    f.write("new entry\\n")', 'B) with open("log.txt", "a") as f:\n    f.write("new entry\\n")', 'C) with open("log.txt", "r") as f:\n    f.write("new entry\\n")', 'D) append("log.txt", "new entry")'],
      correct: "B",
      explanation: '"a" mode appends to the end. "w" would overwrite. "r" is read-only.'
    }
  },

  45: {
    day: 45, unit: 6, unitName: "Debugging and Documentation",
    title: "Reading from Files",
    bellRinger: {
      question: 'What does f.read() return?',
      type: "multiple_choice",
      options: ["A) A list of lines", "B) The entire file as a single string", "C) One line at a time", "D) A dictionary"],
      correct: "B",
      explanation: "f.read() reads the ENTIRE file content as one big string. f.readlines() returns a list, f.readline() reads one line."
    },
    practice: [
      { q: 'What does f.readlines() return?', type: "multiple_choice", options: ["A) The entire file as a string", "B) A list of all lines (each including \\n)", "C) The first line only", "D) A dictionary"], correct: "B", explanation: "f.readlines() returns a list where each item is one line of the file (including the '\\n' newline character).", diff: "beginner" },
      { q: 'What method removes the newline character from the end of a line read from a file?', type: "multiple_choice", options: ["A) .chomp()", "B) .remove()", "C) .strip()", "D) .clean()"], correct: "C", explanation: ".strip() removes leading and trailing whitespace, including '\\n'. Use line.strip() after reading.", diff: "beginner" },
      { q: "What error occurs if you try to open a file that doesn't exist for reading?", type: "multiple_choice", options: ["A) ValueError", "B) NameError", "C) FileNotFoundError", "D) IOError"], correct: "C", explanation: "FileNotFoundError is raised when Python can't find the file you're trying to open for reading.", diff: "intermediate" },
      { q: 'What is the most memory-efficient way to read a large file line by line?', type: "multiple_choice", options: ['A) content = f.read()\nfor line in content.split("\\n"):', "B) lines = f.readlines()\nfor line in lines:", "C) for line in f:", "D) f.readline() in a while loop manually"], correct: "C", explanation: "'for line in f:' is the most efficient — it reads one line at a time without loading the whole file into memory.", diff: "challenge" }
    ],
    exitTicket: {
      question: "What is the best practice for opening files in Python?",
      type: "multiple_choice",
      options: ["A) f = open('file.txt'); ... ; f.close()", "B) with open('file.txt') as f: ...", "C) file.open('file.txt') as f: ...", "D) Both A and B are equally good"],
      correct: "B",
      explanation: "The 'with' statement is preferred — it automatically closes the file even if an error occurs."
    }
  },

  46: {
    day: 46, unit: 6, unitName: "Debugging and Documentation",
    title: "try / except / finally",
    bellRinger: {
      question: "What does the 'try' block contain?",
      type: "multiple_choice",
      options: ["A) The error-handling code", "B) Code that might cause an error", "C) Code that always runs", "D) The function definition"],
      correct: "B",
      explanation: "The 'try' block contains code that MIGHT raise an exception. The 'except' block handles it if it does."
    },
    practice: [
      { q: 'What is the output?\n\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")', type: "multiple_choice", options: ["A) 0", "B) Error", "C) Cannot divide by zero", "D) Nothing"], correct: "C", explanation: "10/0 raises ZeroDivisionError. The except block catches it and prints the message. Program doesn't crash.", diff: "beginner" },
      { q: 'What is the output?\n\ntry:\n    num = int("hello")\nexcept ValueError:\n    print("Invalid number")\nprint("Program continues")', type: "multiple_choice", options: ["A) Invalid number", "B) Invalid number\nProgram continues", "C) Program continues", "D) Error"], correct: "B", explanation: "int('hello') raises ValueError → caught by except → 'Invalid number'. Code after try/except continues: 'Program continues'.", diff: "intermediate" },
      { q: "What does the 'finally' block do?", type: "multiple_choice", options: ["A) Runs only if an exception occurs", "B) Runs only if no exception occurs", "C) Always runs, whether or not an exception occurred", "D) Defines the final value to return"], correct: "C", explanation: "finally ALWAYS runs. It's used for cleanup (closing files, connections) that must happen regardless.", diff: "intermediate" },
      { q: 'What is the output?\n\ntry:\n    print("A")\nexcept:\n    print("B")\nelse:\n    print("C")\nfinally:\n    print("D")', type: "multiple_choice", options: ["A) A B C D", "B) A C D", "C) A D", "D) B D"], correct: "B", explanation: "No error → try runs (A), else runs (C because no exception), finally always runs (D). B is skipped.", diff: "challenge" },
      { q: "You should wrap ALL code in try/except blocks to catch every possible error.", type: "true_false", correct: "False", explanation: "Over-using try/except hides bugs. Only wrap code that might legitimately fail (user input, file I/O, network calls).", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ntry:\n    print(5 / 0)\nexcept ZeroDivisionError:\n    print("Caught!")\nfinally:\n    print("Done")',
      type: "multiple_choice",
      options: ["A) Caught!", "B) Done", "C) Caught!\nDone", "D) Error"],
      correct: "C",
      explanation: "ZeroDivisionError → except → 'Caught!'. finally ALWAYS runs → 'Done'."
    }
  },

  47: {
    day: 47, unit: 6, unitName: "Debugging and Documentation",
    title: "Documentation — Comments & Docstrings",
    bellRinger: {
      question: "Where does a docstring go in a function?",
      type: "multiple_choice",
      options: ["A) Before the def keyword", "B) After the def line, as the first statement (triple quotes)", "C) At the bottom of the function", "D) In a separate documentation file"],
      correct: "B",
      explanation: 'A docstring is the first statement inside a function, using triple quotes: """description"""'
    },
    practice: [
      { q: "Which is the correct format for a function docstring?", type: "multiple_choice", options: ['A) # Brief description', 'B) """ Brief description """', 'C) /* Brief description */', 'D) // Brief description'], correct: "B", explanation: "Python docstrings use triple quotes. Single-line: one line. Multi-line: uses Args:, Returns:, etc.", diff: "beginner" },
      { q: "What does a good inline comment explain?", type: "multiple_choice", options: ["A) What the code does (can be read from code)", "B) WHY the code does something (reasoning, context)", "C) The programmer's name", "D) Every single line"], correct: "B", explanation: "Good comments explain WHY, not WHAT. The code already shows what. Comments add context, explain business rules, etc.", diff: "intermediate" },
      { q: "Which is a BAD comment?", type: "multiple_choice", options: ['A) # Using sentinel -1 to handle no-data case\nvalue = -1', "B) # Multiply tax rate by price\ntax = price * 0.08", "C) # User must be 18+ per Tennessee law\nif age >= 18:", "D) # Workaround for edge case where input is empty\nif not data:"], correct: "B", explanation: "# Multiply tax rate by price just restates the code. A better comment: # 8% Tennessee sales tax. Don't repeat what the code already says.", diff: "intermediate" },
      { q: "You can access a function's docstring at runtime using:", type: "multiple_choice", options: ["A) doc(function_name)", "B) function_name.__doc__", "C) help.function_name", "D) getdoc(function_name)"], correct: "B", explanation: "The __doc__ attribute stores the docstring. You can also use help(function_name) to see it.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What section of a docstring describes what a function RETURNS?',
      type: "multiple_choice",
      options: ["A) Args:", "B) Example:", "C) Returns:", "D) Output:"],
      correct: "C",
      explanation: 'Standard docstring sections: Args: (parameters), Returns: (return value), Raises: (exceptions), Examples: (usage).'
    }
  },

  48: {
    day: 48, unit: 6, unitName: "Debugging and Documentation",
    title: "Unit 6 Review & Project",
    bellRinger: {
      question: "What are the three types of Python errors?",
      type: "multiple_choice",
      options: ["A) Input, Process, Output", "B) Syntax, Runtime, Logic", "C) Minor, Major, Critical", "D) Compile, Link, Execute"],
      correct: "B",
      explanation: "Syntax: can't parse code. Runtime: crashes during execution. Logic: runs but gives wrong answer."
    },
    practice: [
      { q: 'What is the output?\n\ntry:\n    nums = [1, 2, 3]\n    print(nums[5])\nexcept IndexError:\n    print("Index out of range")\nexcept:\n    print("Other error")', type: "multiple_choice", options: ["A) Index out of range", "B) Other error", "C) None", "D) Error"], correct: "A", explanation: "nums[5] accesses an index that doesn't exist → IndexError → first except catches it.", diff: "intermediate" },
      { q: 'Which file mode would you use to safely create a NEW file and fail if it already exists?', type: "multiple_choice", options: ['"r"', '"w"', '"a"', '"x"'], correct: '"x"', explanation: '"x" (exclusive creation) creates a new file and raises FileExistsError if the file already exists. Safe for new files.', diff: "challenge" },
      { q: "What is the purpose of the 'else' block in try/except/else/finally?", type: "multiple_choice", options: ["A) Runs if an exception occurred", "B) Runs if NO exception occurred", "C) Always runs last", "D) Catches all remaining exceptions"], correct: "B", explanation: "else runs only when NO exception was raised in the try block. It's for code that depends on try succeeding.", diff: "intermediate" },
      { q: "What does __doc__ return if a function has no docstring?", type: "multiple_choice", options: ["A) An empty string ''", "B) None", "C) 'No documentation'", "D) An error"], correct: "B", explanation: "If no docstring exists, __doc__ returns None.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndef greet(name):\n    """Says hello to name."""\n    print(f"Hello, {name}!")\n\nprint(greet.__doc__)',
      type: "multiple_choice",
      options: ["A) Hello, name!", "B) Says hello to name.", "C) None", "D) Error"],
      correct: "B",
      explanation: "__doc__ returns the docstring of the function: 'Says hello to name.'"
    }
  },

  // ══════════════════════════════════════════════
  // UNIT 7: PROJECT DEVELOPMENT (Days 49–54)
  // ══════════════════════════════════════════════

  49: {
    day: 49, unit: 7, unitName: "Project Development",
    title: "Project Planning & Design",
    bellRinger: {
      question: "What is the purpose of writing pseudocode BEFORE writing actual code?",
      type: "multiple_choice",
      options: ["A) It is required by Python", "B) To plan the logic in plain English before worrying about syntax", "C) To generate code automatically", "D) To test the program without running it"],
      correct: "B",
      explanation: "Pseudocode lets you plan the algorithm's logic in plain English. Fix the thinking first, then translate to code."
    },
    practice: [
      { q: "What should a project proposal include?", type: "multiple_choice", options: ["A) Only the title", "B) Problem statement, inputs, outputs, function list, test cases", "C) The final Python code", "D) A presentation slide"], correct: "B", explanation: "A good proposal covers: what it does (problem), what it needs (inputs), what it produces (outputs), how it's organized (functions), and how to verify it (test cases).", diff: "beginner" },
      { q: "What is bottom-up development?", type: "multiple_choice", options: ["A) Starting with main() and adding details", "B) Writing UI first, then logic", "C) Building and testing small functions first, then combining them", "D) Writing the most complex part first"], correct: "C", explanation: "Bottom-up: build the simplest helper functions first, test each one, then integrate into the full program.", diff: "intermediate" },
      { q: "Why are test cases important to plan BEFORE writing code?", type: "multiple_choice", options: ["A) They're not important — just test when done", "B) They clarify exactly what the program should do and help verify it works", "C) Python requires test files", "D) They generate the code automatically"], correct: "B", explanation: "Defining test cases first (input → expected output) gives you a clear target and makes verification systematic.", diff: "intermediate" },
      { q: "What does 'refactoring' mean?", type: "multiple_choice", options: ["A) Deleting unused code", "B) Restructuring existing code to improve clarity/design without changing behavior", "C) Adding new features", "D) Fixing bugs"], correct: "B", explanation: "Refactoring improves code structure (naming, organization, removing duplication) without changing what it does.", diff: "intermediate" }
    ],
    exitTicket: {
      question: "The first step in the software development process is:",
      type: "multiple_choice",
      options: ["A) Code", "B) Test", "C) Define (understand the problem)", "D) Refine"],
      correct: "C",
      explanation: "Define → Plan → Code → Test → Refine. You must understand the problem before you can solve it!"
    }
  },

  50: {
    day: 50, unit: 7, unitName: "Project Development",
    title: "Development Session 1 — Foundation",
    bellRinger: {
      question: "What does 'unit testing' mean in programming?",
      type: "multiple_choice",
      options: ["A) Testing the entire program at once", "B) Testing individual functions in isolation", "C) A test you take in Unit 7", "D) Testing with real users"],
      correct: "B",
      explanation: "Unit testing means testing each function individually before combining them. Find bugs early, in smaller, easier-to-fix pieces."
    },
    practice: [
      { q: 'What does assert do in Python?\n\nassert add(2, 3) == 5', type: "multiple_choice", options: ["A) Prints the result", "B) Raises AssertionError if the condition is False", "C) Assigns 5 to the result", "D) Nothing"], correct: "B", explanation: "assert condition raises AssertionError if the condition is False. Used for testing: assert function(input) == expected_output.", diff: "intermediate" },
      { q: "Why should you test each function BEFORE connecting them?", type: "multiple_choice", options: ["A) Python requires it", "B) Bugs found in isolation are easier to fix than bugs in connected systems", "C) Functions won't work otherwise", "D) It makes the code run faster"], correct: "B", explanation: "Testing in isolation means smaller scope → easier to pinpoint the bug. Integration bugs are much harder to diagnose.", diff: "intermediate" },
      { q: "What are edge cases in testing?", type: "multiple_choice", options: ["A) Only normal, typical inputs", "B) Inputs at the boundaries or extremes: 0, negatives, empty, maximum", "C) Typos in the code", "D) Test cases from the textbook"], correct: "B", explanation: "Edge cases: zero values, negative numbers, empty strings/lists, maximum values, minimum values. These often reveal hidden bugs.", diff: "beginner" },
      { q: "What is the benefit of using descriptive function and variable names?", type: "multiple_choice", options: ["A) Code runs faster", "B) Reduces the need for excessive comments and makes code self-documenting", "C) Required by Python", "D) Makes functions private"], correct: "B", explanation: "get_user_score() is self-explanatory. x12() is not. Good names reduce the need for comments and make intent clear.", diff: "beginner" }
    ],
    exitTicket: {
      question: "In bottom-up development, what do you build first?",
      type: "multiple_choice",
      options: ["A) The main function that controls everything", "B) The user interface", "C) The simplest helper functions", "D) The data storage system"],
      correct: "C",
      explanation: "Bottom-up: start with the smallest building blocks (helper functions), test them, then combine into larger pieces."
    }
  },

  51: {
    day: 51, unit: 7, unitName: "Project Development",
    title: "Development Session 2 — Integration",
    bellRinger: {
      question: "What is integration testing?",
      type: "multiple_choice",
      options: ["A) Testing individual functions alone", "B) Testing how functions work together as a system", "C) Testing with the customer", "D) Final testing before launch"],
      correct: "B",
      explanation: "Integration testing checks that functions/modules work correctly when connected together. Different from unit testing individual pieces."
    },
    practice: [
      { q: "A common integration bug is when functions pass data in the wrong:", type: "multiple_choice", options: ["A) Order", "B) Type (e.g., str where int expected)", "C) File", "D) Comment"], correct: "B", explanation: "Type mismatches are common integration bugs. Function A might return a string, but Function B expects an integer.", diff: "intermediate" },
      { q: "What is a 'pipeline' in the context of function integration?", type: "multiple_choice", options: ["A) A plumbing reference", "B) The flow of data through connected functions", "C) A type of loop", "D) The main() function"], correct: "B", explanation: "Data pipeline: input() → validate() → process() → format() → output(). Data flows through connected functions.", diff: "intermediate" },
      { q: "When integrating functions, what should you test first?", type: "multiple_choice", options: ["A) The most complex combination last", "B) Start with two functions, verify, then add more", "C) All functions at once", "D) Only the main() function"], correct: "B", explanation: "Incremental integration: test A+B, verify it works, add C, verify A+B+C, etc. This makes bugs easier to locate.", diff: "challenge" },
      { q: "What is the main() function typically responsible for?", type: "multiple_choice", options: ["A) All data processing", "B) Orchestrating the overall program flow by calling helper functions", "C) Handling all user input", "D) Only printing output"], correct: "B", explanation: "main() is the conductor — it calls helper functions in the right order. It shouldn't do heavy work itself.", diff: "beginner" }
    ],
    exitTicket: {
      question: "If function A returns a float but function B expects an int, what is this called?",
      type: "multiple_choice",
      options: ["A) A logic error", "B) A syntax error", "C) A type mismatch", "D) A naming error"],
      correct: "C",
      explanation: "Type mismatches are common integration bugs. You'd need to convert: int(function_a()) before passing to function_b."
    }
  },

  52: {
    day: 52, unit: 7, unitName: "Project Development",
    title: "Polish, Documentation & Refactoring",
    bellRinger: {
      question: "What does the DRY principle mean when refactoring?",
      type: "multiple_choice",
      options: ["A) Delete all comments", "B) Don't Repeat Yourself — extract repeated code into a function", "C) Don't Run Yet", "D) Data Requires Yielding"],
      correct: "B",
      explanation: "DRY: Don't Repeat Yourself. If you see the same code in 3 places, extract it into a function and call it 3 times."
    },
    practice: [
      { q: "What is the recommended maximum length for a single function?", type: "multiple_choice", options: ["A) 5 lines", "B) 20 lines", "C) 100 lines", "D) No limit"], correct: "B", explanation: "A function should fit on one screen (~20 lines). Longer = probably doing too much. Extract into smaller functions.", diff: "intermediate" },
      { q: "What is 'dead code'?", type: "multiple_choice", options: ["A) Code that raises errors", "B) Code that is never executed (commented out or unreachable)", "C) Old Python 2 code", "D) Code without comments"], correct: "B", explanation: "Dead code: code that can never run (unreachable after return, or permanently commented out). Remove it — it confuses readers.", diff: "beginner" },
      { q: "Which of these BEST applies the Single Responsibility Principle?", type: "multiple_choice", options: ["A) def process_all_data(): # reads, calculates, saves, displays", "B) def calculate_average(scores): # only calculates average", "C) def main(): # does everything", "D) def do_stuff(): # unclear purpose"], correct: "B", explanation: "calculate_average() does ONE thing: calculates the average. The others clearly do (or might do) multiple things.", diff: "intermediate" },
      { q: "Code style (consistent naming, spacing, indentation) only matters for large teams.", type: "true_false", correct: "False", explanation: "Good style matters even solo — your future self will read your code. Consistent style makes debugging and reading much easier.", diff: "beginner" }
    ],
    exitTicket: {
      question: "What is the goal of refactoring?",
      type: "multiple_choice",
      options: ["A) Add new features quickly", "B) Make code faster", "C) Improve code structure/clarity without changing behavior", "D) Remove all comments"],
      correct: "C",
      explanation: "Refactoring = restructuring existing code. The program does the same thing, but the code is cleaner, clearer, and easier to maintain."
    }
  },

  53: {
    day: 53, unit: 7, unitName: "Project Development",
    title: "Presentations & Demos",
    bellRinger: {
      question: "When presenting a program, which input should you show FIRST?",
      type: "multiple_choice",
      options: ["A) An unusual edge case", "B) A normal, typical input that shows the core feature working", "C) An input that causes an error", "D) The largest possible input"],
      correct: "B",
      explanation: "Start with a normal case to show the program works. Then demonstrate edge cases to show robustness."
    },
    practice: [
      { q: "A 5-minute project presentation should spend the most time on:", type: "multiple_choice", options: ["A) Introducing yourself", "B) Demonstrating the program and explaining key functions", "C) Listing all lines of code", "D) Explaining every variable name"], correct: "B", explanation: "Demo + code walkthrough = most valuable. Show it working (2 min) and explain how key parts work (1.5 min). That's 70% of time.", diff: "beginner" },
      { q: "What should you prepare BEFORE presenting?", type: "multiple_choice", options: ["A) Nothing — be spontaneous", "B) Ready demo inputs, know 2 key functions to explain, practice once", "C) Memorize every line of code", "D) Write a script for every word"], correct: "B", explanation: "Preparation: have test inputs ready, know which functions to highlight, practice the demo. You don't need to memorize everything.", diff: "intermediate" },
      { q: "When explaining your code to others, you should:", type: "multiple_choice", options: ["A) Read every line literally", "B) Explain the high-level logic and reasoning, not every syntax detail", "C) Skip the explanation and just run it", "D) Explain only the errors"], correct: "B", explanation: "Explain the WHY and HOW at a high level. Audience understands concepts better than line-by-line syntax readings.", diff: "intermediate" },
      { q: "It is acceptable to say 'I don't know' when asked a question about your project.", type: "true_false", correct: "True", explanation: "Honest answers are better than guessing. 'I don't know, but I'd research...' shows intellectual honesty and problem-solving attitude.", diff: "beginner" }
    ],
    exitTicket: {
      question: "What is the purpose of showing an edge case during a presentation?",
      type: "multiple_choice",
      options: ["A) To confuse the audience", "B) To show that your program handles unusual inputs gracefully and is robust", "C) It has no purpose", "D) To make the presentation longer"],
      correct: "B",
      explanation: "Showing edge cases (like empty input or zero) demonstrates robustness — your program doesn't crash unexpectedly."
    }
  },

  54: {
    day: 54, unit: 7, unitName: "Project Development",
    title: "Wrap-Up & Course Reflection",
    bellRinger: {
      question: "Which Python concept lets you avoid repeating code by defining reusable blocks?",
      type: "multiple_choice",
      options: ["A) Variables", "B) Comments", "C) Functions", "D) Imports"],
      correct: "C",
      explanation: "Functions are reusable code blocks. Define once, call many times. They are the core of DRY (Don't Repeat Yourself)."
    },
    practice: [
      { q: "In what order did we learn these Python concepts?", type: "multiple_choice", options: ["A) Functions → Variables → Loops → Conditionals", "B) Variables → Conditionals → Loops → Functions", "C) Loops → Variables → Functions → Conditionals", "D) Conditionals → Functions → Loops → Variables"], correct: "B", explanation: "Course order: Variables/basics → Conditionals (decisions) → Loops (repetition) → Functions (organization). Each builds on the previous.", diff: "beginner" },
      { q: "Which of these is the correct way to handle a potential division by zero?", type: "multiple_choice", options: ["A) Use if/else to check before dividing", "B) Use try/except ZeroDivisionError", "C) Both A and B are valid", "D) Neither — Python handles it automatically"], correct: "C", explanation: "Both approaches work. if/else is preventive; try/except is reactive. Both are valid in different contexts.", diff: "intermediate" },
      { q: "What does this program do?\n\ndef process(data):\n    clean = [x for x in data if x > 0]\n    return sum(clean) / len(clean)\n\nscores = [85, -1, 90, 70, -1, 95]\nprint(process(scores))", type: "multiple_choice", options: ["A) Averages all scores including -1", "B) Averages only the positive (valid) scores", "C) Returns the maximum score", "D) Raises an error"], correct: "B", explanation: "The list comprehension [x for x in data if x > 0] filters out -1 (sentinels). Then averages: (85+90+70+95)/4 = 85.0.", diff: "challenge" },
      { q: "The best description of a complete Python programmer after this course is:", type: "multiple_choice", options: ["A) Someone who has memorized all Python syntax", "B) Someone who can decompose problems and write organized, tested, documented code", "C) Someone who can build websites", "D) Someone who uses the most advanced features"], correct: "B", explanation: "Programming is about problem decomposition, organized code (functions), testing, and documentation — not memorizing syntax.", diff: "beginner" }
    ],
    exitTicket: {
      question: "Which of the following represents the FULL software development process?",
      type: "multiple_choice",
      options: ["A) Write code → Ship", "B) Define → Plan → Code → Test → Refine", "C) Test → Code → Plan", "D) Code → Fix bugs → Code more"],
      correct: "B",
      explanation: "Define (understand) → Plan (pseudocode) → Code → Test (edge cases) → Refine (improve). This is the professional approach."
    }
  }

};

// ============================================================
// Helper: Get lesson by day number
// ============================================================
function getLesson(day) {
  return LESSONS[day] || null;
}

// ============================================================
// Unit color mapping
// ============================================================
const UNIT_COLORS = {
  1: { bg: '#fef3c7', color: '#92400e', badge: 'badge-unit1', name: 'Intro to Programming' },
  2: { bg: '#fce7f3', color: '#9d174d', badge: 'badge-unit2', name: 'Variables, Data Types & Expressions' },
  3: { bg: '#ede9fe', color: '#5b21b6', badge: 'badge-unit3', name: 'Conditionals' },
  4: { bg: '#dbeafe', color: '#1e40af', badge: 'badge-unit4', name: 'Loops and Iteration' },
  5: { bg: '#dcfce7', color: '#14532d', badge: 'badge-unit5', name: 'Functions and Modularity' },
  6: { bg: '#fff7ed', color: '#9a3412', badge: 'badge-unit6', name: 'Debugging and Documentation' },
  7: { bg: '#f1f5f9', color: '#334155', badge: 'badge-unit7', name: 'Project Development' }
};

const TOTAL_DAYS = 54;
