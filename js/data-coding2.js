// ============================================================
// Coding II — Daily Lesson Data
// Units: Lists, Dictionaries/Sets, OOP, File I/O, Exceptions
// ============================================================

const LESSONS_C2 = {

  // ══════════════════════════════════════════════
  // UNIT 1: LISTS & SEQUENCES (Days 1–6)
  // ══════════════════════════════════════════════

  1: {
    day: 1, unit: 1, unitName: "Lists & Sequences",
    title: "List Basics — Creation & Indexing",
    bellRinger: {
      question: "Which of the following correctly creates a list in Python?",
      type: "multiple_choice",
      options: ["A) scores = (90, 85, 77)", "B) scores = [90, 85, 77]", "C) scores = {90, 85, 77}", "D) scores = <90, 85, 77>"],
      correct: "B",
      explanation: "Lists use square brackets [ ]. Parentheses create tuples, curly braces create sets/dicts."
    },
    practice: [
      { q: 'What is the output?\n\nfruits = ["apple", "banana", "cherry"]\nprint(fruits[1])', type: "multiple_choice", options: ["A) apple", "B) banana", "C) cherry", "D) 1"], correct: "B", explanation: "List indexes start at 0. fruits[1] is the second element: 'banana'.", diff: "beginner" },
      { q: "What does negative indexing do in Python?", type: "multiple_choice", options: ["A) Causes an error", "B) Accesses elements from the end of the list", "C) Returns 0", "D) Reverses the list"], correct: "B", explanation: "Negative indexes count from the end. -1 is the last element, -2 is second-to-last, etc.", diff: "beginner" },
      { q: 'What is the output?\n\nnums = [10, 20, 30, 40, 50]\nprint(nums[-1])', type: "multiple_choice", options: ["A) 10", "B) 40", "C) 50", "D) -1"], correct: "C", explanation: "nums[-1] accesses the last element, which is 50.", diff: "beginner" },
      { q: "A list in Python can store items of different data types.", type: "true_false", correct: "True", explanation: "Python lists are heterogeneous — they can hold integers, strings, booleans, other lists, etc. all in one list.", diff: "intermediate" },
      { q: 'What is the output?\n\ndata = [1, "hello", True, 3.14]\nprint(len(data))', type: "multiple_choice", options: ["A) 3", "B) 4", "C) error", "D) 8"], correct: "B", explanation: "len() returns the number of items in the list. There are 4 items here.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is printed?\n\ncolors = ["red", "green", "blue"]\nprint(colors[-2])',
      type: "multiple_choice",
      options: ["A) red", "B) green", "C) blue", "D) error"],
      correct: "B",
      explanation: "colors[-2] is the second-to-last element, which is 'green'."
    }
  },

  2: {
    day: 2, unit: 1, unitName: "Lists & Sequences",
    title: "List Methods — append, insert, remove, pop",
    bellRinger: {
      question: "Which method adds an item to the END of a list?",
      type: "multiple_choice",
      options: ["A) insert()", "B) add()", "C) append()", "D) push()"],
      correct: "C",
      explanation: "append() adds a single item to the end of the list. insert() adds at a specific position."
    },
    practice: [
      { q: 'What does this code output?\n\nmy_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)', type: "multiple_choice", options: ["A) [1, 2, 3]", "B) [4, 1, 2, 3]", "C) [1, 2, 3, 4]", "D) 4"], correct: "C", explanation: "append(4) adds 4 to the end of the list.", diff: "beginner" },
      { q: 'What does pop() return by default?\n\nnums = [10, 20, 30]\nresult = nums.pop()\nprint(result)', type: "multiple_choice", options: ["A) 10", "B) 20", "C) 30", "D) None"], correct: "C", explanation: "pop() with no argument removes and returns the LAST element. The list becomes [10, 20].", diff: "beginner" },
      { q: 'What is the list after this runs?\n\nanimals = ["cat", "dog", "fish"]\nanimals.insert(1, "bird")\nprint(animals)', type: "multiple_choice", options: ['A) ["cat", "dog", "fish", "bird"]', 'B) ["bird", "cat", "dog", "fish"]', 'C) ["cat", "bird", "dog", "fish"]', 'D) ["cat", "dog", "bird", "fish"]'], correct: "C", explanation: "insert(1, 'bird') inserts 'bird' at index 1, shifting the rest right.", diff: "intermediate" },
      { q: 'What happens if you call remove() on an item NOT in the list?', type: "multiple_choice", options: ["A) Nothing happens", "B) It removes the first element", "C) It raises a ValueError", "D) It returns False"], correct: "C", explanation: "remove() raises a ValueError if the item is not found. Use 'in' to check before removing.", diff: "intermediate" },
      { q: 'What is the output?\n\nnums = [5, 3, 8, 1]\nnums.sort()\nprint(nums)', type: "multiple_choice", options: ["A) [5, 3, 8, 1]", "B) [1, 3, 5, 8]", "C) [8, 5, 3, 1]", "D) None"], correct: "B", explanation: "sort() sorts the list in ascending order in-place (modifies the original list).", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the final value of my_list?\n\nmy_list = ["a", "b", "c", "d"]\nmy_list.pop(1)\nprint(my_list)',
      type: "multiple_choice",
      options: ['A) ["a", "b", "c", "d"]', 'B) ["a", "c", "d"]', 'C) ["b", "c", "d"]', 'D) ["a", "b", "d"]'],
      correct: "B",
      explanation: "pop(1) removes and returns the element at index 1 ('b'), leaving ['a', 'c', 'd']."
    }
  },

  3: {
    day: 3, unit: 1, unitName: "Lists & Sequences",
    title: "List Slicing",
    bellRinger: {
      question: "What does list[1:4] return?",
      type: "multiple_choice",
      options: ["A) Elements at indexes 1, 2, 3, 4", "B) Elements at indexes 1, 2, 3", "C) Elements at indexes 0, 1, 2, 3", "D) A copy of the whole list"],
      correct: "B",
      explanation: "Slicing is start:stop where stop is EXCLUSIVE. list[1:4] gives indexes 1, 2, 3."
    },
    practice: [
      { q: 'What is the output?\n\nnums = [0, 1, 2, 3, 4, 5]\nprint(nums[2:5])', type: "multiple_choice", options: ["A) [2, 3, 4, 5]", "B) [2, 3, 4]", "C) [0, 1, 2]", "D) [3, 4, 5]"], correct: "B", explanation: "nums[2:5] returns indexes 2, 3, 4 — which is [2, 3, 4]. Index 5 is not included.", diff: "beginner" },
      { q: 'What does nums[:3] mean?', type: "multiple_choice", options: ["A) Elements from index 3 to the end", "B) The last 3 elements", "C) The first 3 elements (indexes 0, 1, 2)", "D) Every 3rd element"], correct: "C", explanation: "When start is omitted, slicing begins at index 0. nums[:3] = nums[0:3].", diff: "beginner" },
      { q: 'What is the output?\n\nletters = ["a", "b", "c", "d", "e"]\nprint(letters[::2])', type: "multiple_choice", options: ['A) ["a", "c", "e"]', 'B) ["b", "d"]', 'C) ["a", "b", "c"]', 'D) ["c", "d", "e"]'], correct: "A", explanation: "The third slice argument is the step. ::2 takes every 2nd element starting from index 0.", diff: "intermediate" },
      { q: 'What does nums[::-1] do?', type: "multiple_choice", options: ["A) Returns an empty list", "B) Returns the last element only", "C) Returns the list reversed", "D) Raises an error"], correct: "C", explanation: "A step of -1 iterates backwards through the whole list, effectively reversing it.", diff: "intermediate" },
      { q: "Slicing a list creates a new list — the original is NOT modified.", type: "true_false", correct: "True", explanation: "Slicing creates a shallow copy. Changes to the slice do not affect the original list.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is printed?\n\ndata = [10, 20, 30, 40, 50]\nprint(data[-3:])',
      type: "multiple_choice",
      options: ["A) [10, 20, 30]", "B) [20, 30, 40]", "C) [30, 40, 50]", "D) [40, 50]"],
      correct: "C",
      explanation: "data[-3:] starts at the 3rd-from-last index (30) and goes to the end."
    }
  },

  4: {
    day: 4, unit: 1, unitName: "Lists & Sequences",
    title: "List Comprehensions",
    bellRinger: {
      question: "Which is the correct syntax for a list comprehension?",
      type: "multiple_choice",
      options: ["A) [for x in range(5): x*2]", "B) [x*2 for x in range(5)]", "C) {x*2 for x in range(5)}", "D) list(x*2, x in range(5))"],
      correct: "B",
      explanation: "List comprehension syntax: [expression for item in iterable]. The expression comes first."
    },
    practice: [
      { q: 'What does this produce?\n\nresult = [x**2 for x in range(1, 5)]\nprint(result)', type: "multiple_choice", options: ["A) [1, 4, 9, 16]", "B) [1, 4, 9, 16, 25]", "C) [0, 1, 4, 9]", "D) [2, 4, 6, 8]"], correct: "A", explanation: "range(1, 5) gives 1, 2, 3, 4. Squaring each: 1, 4, 9, 16.", diff: "beginner" },
      { q: 'What does this produce?\n\nwords = ["hello", "world", "python"]\nupper = [w.upper() for w in words]\nprint(upper)', type: "multiple_choice", options: ['A) ["HELLO", "WORLD", "PYTHON"]', 'B) ["hello", "world", "python"]', 'C) "HELLO WORLD PYTHON"', 'D) error'], correct: "A", explanation: ".upper() converts a string to uppercase. The comprehension applies it to each word.", diff: "beginner" },
      { q: 'What is the output of this filtered comprehension?\n\nnums = [1, 2, 3, 4, 5, 6]\nevens = [n for n in nums if n % 2 == 0]\nprint(evens)', type: "multiple_choice", options: ["A) [1, 3, 5]", "B) [2, 4, 6]", "C) [1, 2, 3, 4, 5, 6]", "D) [True, False, True, False, True, False]"], correct: "B", explanation: "The 'if' clause filters. n % 2 == 0 is True only for even numbers: 2, 4, 6.", diff: "intermediate" },
      { q: "A list comprehension is always faster and uses less memory than a for loop.", type: "true_false", correct: "False", explanation: "List comprehensions are often more readable and slightly faster, but they still build a full list in memory. Generators are better for large datasets.", diff: "challenge" },
      { q: 'What does this produce?\n\nmatrix = [[1,2,3],[4,5,6],[7,8,9]]\nflat = [n for row in matrix for n in row]\nprint(flat)', type: "multiple_choice", options: ["A) [[1,2,3],[4,5,6],[7,8,9]]", "B) [1, 2, 3, 4, 5, 6, 7, 8, 9]", "C) error", "D) [1, 4, 7, 2, 5, 8, 3, 6, 9]"], correct: "B", explanation: "Nested comprehensions: first loop iterates rows, second iterates items in each row, flattening the 2D list.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nsquares = [x*x for x in range(4)]\nprint(squares)',
      type: "multiple_choice",
      options: ["A) [1, 4, 9, 16]", "B) [0, 1, 4, 9]", "C) [0, 1, 2, 3]", "D) [4, 9, 16, 25]"],
      correct: "B",
      explanation: "range(4) produces 0, 1, 2, 3. Squaring each: 0, 1, 4, 9."
    }
  },

  5: {
    day: 5, unit: 1, unitName: "Lists & Sequences",
    title: "Tuples & Immutability",
    bellRinger: {
      question: "What is the key difference between a list and a tuple?",
      type: "multiple_choice",
      options: ["A) Lists are faster than tuples", "B) Tuples can hold more items", "C) Tuples are immutable — they cannot be changed after creation", "D) Lists use parentheses, tuples use brackets"],
      correct: "C",
      explanation: "Tuples are immutable: once created, their contents cannot be changed. Lists are mutable."
    },
    practice: [
      { q: 'Which creates a tuple?', type: "multiple_choice", options: ['A) t = [1, 2, 3]', 'B) t = (1, 2, 3)', 'C) t = {1, 2, 3}', 'D) t = tuple'], correct: "B", explanation: "Tuples are created with parentheses. Brackets make lists, curly braces make sets.", diff: "beginner" },
      { q: 'What happens when you try to change a tuple element?\n\nt = (10, 20, 30)\nt[0] = 99', type: "multiple_choice", options: ["A) t becomes (99, 20, 30)", "B) The old value is returned", "C) A TypeError is raised", "D) Nothing happens"], correct: "C", explanation: "Tuples are immutable. Attempting to assign to an index raises TypeError: 'tuple' object does not support item assignment.", diff: "beginner" },
      { q: "Tuples can be used as dictionary keys, but lists cannot.", type: "true_false", correct: "True", explanation: "Dictionary keys must be hashable (immutable). Tuples are hashable; lists are not.", diff: "intermediate" },
      { q: 'What is the output?\n\ncoords = (3, 7)\nx, y = coords\nprint(x)', type: "multiple_choice", options: ["A) (3, 7)", "B) 3", "C) 7", "D) error"], correct: "B", explanation: "This is tuple unpacking. x gets 3, y gets 7.", diff: "intermediate" },
      { q: "Which is a use case where a tuple is BETTER than a list?", type: "multiple_choice", options: ["A) When you need to add items frequently", "B) When you want to store an ordered sequence of items that should not change (like GPS coordinates)", "C) When you need to sort the data often", "D) When you need to remove duplicates"], correct: "B", explanation: "Use tuples for data that should never change (coordinates, RGB colors, DB records). Lists are for collections that need modification.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\npoint = (4, 8, 15)\nprint(point[1])',
      type: "multiple_choice",
      options: ["A) 4", "B) 8", "C) 15", "D) error"],
      correct: "B",
      explanation: "Tuples support indexing just like lists. point[1] is the second element: 8."
    }
  },

  6: {
    day: 6, unit: 1, unitName: "Lists & Sequences",
    title: "2D Lists & Unit 1 Review",
    bellRinger: {
      question: "How do you access element 7 in this 2D list?\n\ngrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
      type: "multiple_choice",
      options: ["A) grid[6]", "B) grid[2][0]", "C) grid[3][1]", "D) grid[7]"],
      correct: "B",
      explanation: "7 is in the third row (index 2) and first column (index 0). Access: grid[2][0]."
    },
    practice: [
      { q: 'What is the output?\n\ntable = [[1,2],[3,4],[5,6]]\nprint(table[1][1])', type: "multiple_choice", options: ["A) 3", "B) 4", "C) 2", "D) 5"], correct: "B", explanation: "table[1] = [3, 4]. table[1][1] = 4.", diff: "beginner" },
      { q: 'How do you iterate over all items in a 2D list?', type: "multiple_choice", options: ["A) for item in matrix", "B) for row in matrix: for item in row", "C) for row, item in matrix", "D) for matrix[i][j] in matrix"], correct: "B", explanation: "Use nested loops: the outer loop iterates rows, the inner loop iterates items within each row.", diff: "intermediate" },
      { q: "Which method checks if a value is IN a list?", type: "multiple_choice", options: ["A) list.contains()", "B) list.has()", "C) value in list", "D) list.find()"], correct: "C", explanation: "The 'in' operator checks membership. Returns True if value is in the list.", diff: "beginner" },
      { q: 'What is the output?\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)', type: "multiple_choice", options: ["A) [1, 2, 3]", "B) [1, 2, 3, 4]", "C) [4]", "D) error"], correct: "B", explanation: "b = a does NOT copy the list — both variables point to the SAME list. Modifying b also changes a. Use a[:] or list(a) to copy.", diff: "challenge" },
      { q: "The + operator can be used to concatenate (join) two lists.", type: "true_false", correct: "True", explanation: "[1,2] + [3,4] produces [1, 2, 3, 4]. This creates a new list.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nrows = [[0]*3 for _ in range(2)]\nrows[0][1] = 5\nprint(rows)',
      type: "multiple_choice",
      options: ["A) [[0, 5, 0], [0, 5, 0]]", "B) [[5, 5, 5], [0, 0, 0]]", "C) [[0, 5, 0], [0, 0, 0]]", "D) error"],
      correct: "C",
      explanation: "List comprehension creates independent rows. Only rows[0][1] is set to 5. The second row is unaffected."
    }
  },

  7: {
    day: 7, unit: 2, unitName: "Dictionaries & Sets",
    title: "Dictionary Basics — Keys & Values",
    bellRinger: {
      question: "What is a dictionary in Python?",
      type: "multiple_choice",
      options: ["A) An ordered list of items", "B) A collection of key-value pairs", "C) A set of unique numbers", "D) A tuple with named fields"],
      correct: "B",
      explanation: "A dictionary stores data as key-value pairs. Each key maps to a value, and keys must be unique."
    },
    practice: [
      { q: 'How do you access the value for key "name" in this dict?\n\nperson = {"name": "Alex", "age": 17}', type: "multiple_choice", options: ['A) person[0]', 'B) person.name', 'C) person["name"]', 'D) person.get(0)'], correct: "C", explanation: "Dictionary values are accessed using their key in square brackets: dict[key].", diff: "beginner" },
      { q: 'What is the output?\n\nscores = {"math": 95, "science": 88}\nscores["english"] = 91\nprint(len(scores))', type: "multiple_choice", options: ["A) 2", "B) 3", "C) 95", "D) error"], correct: "B", explanation: "Adding a new key-value pair increases the dictionary size to 3.", diff: "beginner" },
      { q: "Dictionary keys must be unique.", type: "true_false", correct: "True", explanation: "Each key can only appear once. Assigning to an existing key updates its value rather than creating a duplicate.", diff: "beginner" },
      { q: 'What does dict.get("missing_key") return if the key does not exist?', type: "multiple_choice", options: ["A) error", "B) 0", "C) False", "D) None"], correct: "D", explanation: "get() returns None by default if the key is not found. You can provide a default: dict.get('key', 'default').", diff: "intermediate" },
      { q: 'What is the output?\n\ninfo = {"a": 1, "b": 2, "c": 3}\nprint(list(info.keys()))', type: "multiple_choice", options: ['A) [1, 2, 3]', 'B) ["a", "b", "c"]', 'C) [("a",1), ("b",2), ("c",3)]', 'D) {"a", "b", "c"}'], correct: "B", explanation: "dict.keys() returns a view of all keys. Wrapping in list() gives a list of keys.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is printed?\n\ncar = {"brand": "Toyota", "year": 2022}\nprint(car.get("color", "unknown"))',
      type: "multiple_choice",
      options: ["A) None", "B) error", "C) unknown", "D) color"],
      correct: "C",
      explanation: "'color' key doesn't exist. get() returns the default value 'unknown' instead of raising an error."
    }
  },

  8: {
    day: 8, unit: 2, unitName: "Dictionaries & Sets",
    title: "Dictionary Methods & Looping",
    bellRinger: {
      question: "Which method returns all key-value pairs from a dictionary as tuples?",
      type: "multiple_choice",
      options: ["A) dict.pairs()", "B) dict.items()", "C) dict.tuples()", "D) dict.all()"],
      correct: "B",
      explanation: "dict.items() returns key-value pairs as (key, value) tuples, useful for looping."
    },
    practice: [
      { q: 'What does this loop print?\n\nscores = {"Alice": 90, "Bob": 85}\nfor name, score in scores.items():\n    print(name, score)', type: "multiple_choice", options: ["A) Alice Bob", "B) 90 85", "C) Alice 90 then Bob 85", "D) ('Alice', 90) ('Bob', 85)"], correct: "C", explanation: "items() unpacks each pair into name and score variables. It prints each name and score on its own line.", diff: "beginner" },
      { q: 'What does dict.pop("key") do?', type: "multiple_choice", options: ["A) Returns the value and leaves the key", "B) Deletes the entire dictionary", "C) Removes the key-value pair and returns the value", "D) Returns None"], correct: "C", explanation: "pop() removes the specified key and returns its value. Raises KeyError if key not found (unless default given).", diff: "intermediate" },
      { q: 'What is the output?\n\nd = {"x": 10, "y": 20}\nd.update({"y": 99, "z": 30})\nprint(d)', type: "multiple_choice", options: ['A) {"x": 10, "y": 20}', 'B) {"x": 10, "y": 99, "z": 30}', 'C) {"x": 10, "y": 20, "y": 99, "z": 30}', 'D) error'], correct: "B", explanation: "update() merges another dict in. Existing keys are overwritten ('y' becomes 99), new keys are added ('z').", diff: "intermediate" },
      { q: "You can check if a key exists in a dictionary using the 'in' operator.", type: "true_false", correct: "True", explanation: "'key' in dict returns True if the key exists. This checks keys, not values.", diff: "beginner" },
      { q: 'What is the output?\n\ndata = {}\nfor i in range(3):\n    data[i] = i**2\nprint(data)', type: "multiple_choice", options: ["A) {0: 0, 1: 1, 2: 4}", "B) {1: 1, 2: 4, 3: 9}", "C) [0, 1, 4]", "D) error"], correct: "A", explanation: "The loop builds the dict: 0→0, 1→1, 2→4 (each key maps to its square).", diff: "challenge" }
    ],
    exitTicket: {
      question: 'How many key-value pairs are in d after this runs?\n\nd = {"a": 1}\nd["b"] = 2\nd["a"] = 99\nprint(len(d))',
      type: "multiple_choice",
      options: ["A) 1", "B) 2", "C) 3", "D) 4"],
      correct: "B",
      explanation: "Setting 'a' again updates the existing key (no new pair). 'b' is a new key. Total: 2 pairs."
    }
  },

  9: {
    day: 9, unit: 2, unitName: "Dictionaries & Sets",
    title: "Sets — Uniqueness & Operations",
    bellRinger: {
      question: "What makes a set different from a list?",
      type: "multiple_choice",
      options: ["A) Sets are faster to create", "B) Sets only store numbers", "C) Sets store only unique values and are unordered", "D) Sets use parentheses"],
      correct: "C",
      explanation: "Sets automatically remove duplicates and have no guaranteed order. Perfect for uniqueness checks."
    },
    practice: [
      { q: 'What is the output?\n\ns = {1, 2, 3, 2, 1}\nprint(len(s))', type: "multiple_choice", options: ["A) 5", "B) 3", "C) 2", "D) error"], correct: "B", explanation: "Sets remove duplicates. {1, 2, 3, 2, 1} has unique values 1, 2, 3 — length is 3.", diff: "beginner" },
      { q: 'Which set operation returns ONLY elements in both sets?', type: "multiple_choice", options: ["A) union (|)", "B) difference (-)", "C) symmetric difference (^)", "D) intersection (&)"], correct: "D", explanation: "Intersection (&) returns elements found in BOTH sets. Union (|) returns all elements from either set.", diff: "intermediate" },
      { q: 'What is the output?\n\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a - b)', type: "multiple_choice", options: ["A) {1, 2}", "B) {5, 6}", "C) {3, 4}", "D) {1, 2, 5, 6}"], correct: "A", explanation: "Set difference (a - b) returns elements in 'a' that are NOT in 'b': {1, 2}.", diff: "intermediate" },
      { q: "Sets are mutable — you can add and remove elements.", type: "true_false", correct: "True", explanation: "Sets are mutable: use add() to add elements and remove()/discard() to remove them. (Frozen sets are immutable.)", diff: "beginner" },
      { q: 'What is the fastest way to remove duplicates from a list?', type: "multiple_choice", options: ["A) Loop and check each item manually", "B) Convert to a set, then back to a list: list(set(my_list))", "C) Use list.unique()", "D) Sort the list first"], correct: "B", explanation: "Converting to a set removes duplicates instantly. Re-converting to a list gives you a de-duplicated list (order may change).", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\nx = {1, 2, 3}\ny = {2, 3, 4}\nprint(x | y)',
      type: "multiple_choice",
      options: ["A) {2, 3}", "B) {1, 4}", "C) {1, 2, 3, 4}", "D) {1}"],
      correct: "C",
      explanation: "Union (|) combines both sets, keeping all unique elements: {1, 2, 3, 4}."
    }
  },

  10: {
    day: 10, unit: 2, unitName: "Dictionaries & Sets",
    title: "Nested Data Structures",
    bellRinger: {
      question: "What is a nested dictionary?",
      type: "multiple_choice",
      options: ["A) A dictionary stored inside a list", "B) A dictionary where values are also dictionaries", "C) A dictionary with more than 10 keys", "D) A read-only dictionary"],
      correct: "B",
      explanation: "Nested dicts have dicts as values. Great for representing complex structured data like JSON."
    },
    practice: [
      { q: 'What is the output?\n\nstudents = {\n  "Alice": {"grade": "A", "score": 95},\n  "Bob":   {"grade": "B", "score": 83}\n}\nprint(students["Alice"]["score"])', type: "multiple_choice", options: ["A) A", "B) 95", "C) 83", "D) Alice"], correct: "B", explanation: "Chain the keys: students['Alice'] gives Alice's dict, then ['score'] gives 95.", diff: "beginner" },
      { q: 'What is the output?\n\ndata = {"a": [1, 2, 3], "b": [4, 5, 6]}\nprint(data["b"][2])', type: "multiple_choice", options: ["A) 4", "B) 5", "C) 6", "D) error"], correct: "C", explanation: "data['b'] = [4, 5, 6]. data['b'][2] = 6.", diff: "intermediate" },
      { q: 'How do you add a new key "c" with value [7, 8] to data?\n\ndata = {"a": [1], "b": [2]}', type: "multiple_choice", options: ['A) data.append("c", [7, 8])', 'B) data["c"] = [7, 8]', 'C) data.add("c", [7, 8])', 'D) data + {"c": [7, 8]}'], correct: "B", explanation: "Assign the new key-value pair directly: data['c'] = [7, 8].", diff: "beginner" },
      { q: "JSON (JavaScript Object Notation) maps directly to Python dicts and lists.", type: "true_false", correct: "True", explanation: "JSON objects become Python dicts, JSON arrays become Python lists. Python's json module handles this conversion.", diff: "intermediate" },
      { q: 'What does this produce?\n\ncatalog = {}\nfor item in ["apple", "banana", "cherry"]:\n    catalog[item] = len(item)\nprint(catalog)', type: "multiple_choice", options: ['A) {"apple": 5, "banana": 6, "cherry": 6}', 'B) {"apple": 1, "banana": 2, "cherry": 3}', 'C) {5: "apple", 6: "banana", 6: "cherry"}', 'D) error'], correct: "A", explanation: "Each fruit maps to its length: 'apple'→5, 'banana'→6, 'cherry'→6.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is the output?\n\ndb = {"user": {"name": "Sam", "age": 20}}\ndb["user"]["age"] = 21\nprint(db["user"]["age"])',
      type: "multiple_choice",
      options: ["A) 20", "B) 21", "C) {'age': 21}", "D) error"],
      correct: "B",
      explanation: "Nested dict values can be updated by chaining keys. The age is updated to 21."
    }
  },

  11: {
    day: 11, unit: 3, unitName: "Object-Oriented Programming",
    title: "Classes & Objects — Introduction",
    bellRinger: {
      question: "In OOP, what is a class?",
      type: "multiple_choice",
      options: ["A) A single object in memory", "B) A blueprint that defines the attributes and behaviors of objects", "C) A function that returns data", "D) A type of variable"],
      correct: "B",
      explanation: "A class is a blueprint (template) used to create objects. It defines what data (attributes) and actions (methods) objects will have."
    },
    practice: [
      { q: 'What keyword is used to create a class in Python?', type: "multiple_choice", options: ["A) object", "B) def", "C) class", "D) create"], correct: "C", explanation: "The 'class' keyword defines a new class. Example: class Dog:", diff: "beginner" },
      { q: 'What is an "instance" of a class?', type: "multiple_choice", options: ["A) The class definition itself", "B) A specific object created from the class", "C) A method inside the class", "D) A variable at the top of the file"], correct: "B", explanation: "An instance is a specific object created from a class. dog1 = Dog() creates an instance called dog1.", diff: "beginner" },
      { q: "Python classes can have both data (attributes) and behavior (methods).", type: "true_false", correct: "True", explanation: "Attributes store data (like a variable) and methods define behavior (like a function). Both live inside the class.", diff: "beginner" },
      { q: 'Which of the following correctly creates an object from a class called Car?', type: "multiple_choice", options: ["A) my_car = new Car()", "B) my_car = Car.create()", "C) my_car = Car()", "D) Car my_car"], correct: "C", explanation: "In Python, you create an object by calling the class name like a function: Car(). No 'new' keyword needed.", diff: "intermediate" },
      { q: 'What is the purpose of the "self" parameter in a class method?', type: "multiple_choice", options: ["A) It refers to the class itself", "B) It is optional and rarely used", "C) It refers to the specific instance the method is called on", "D) It stores the method's return value"], correct: "C", explanation: "'self' is a reference to the current instance. It lets the method access and modify that instance's attributes.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is printed?\n\nclass Cat:\n    sound = "meow"\n\nc = Cat()\nprint(c.sound)',
      type: "multiple_choice",
      options: ["A) Cat", "B) meow", "C) c", "D) error"],
      correct: "B",
      explanation: "sound is a class attribute. c.sound accesses it from the instance c."
    }
  },

  12: {
    day: 12, unit: 3, unitName: "Object-Oriented Programming",
    title: "__init__ & Instance Methods",
    bellRinger: {
      question: "What is the purpose of the __init__ method?",
      type: "multiple_choice",
      options: ["A) To delete an object", "B) To print the object", "C) To initialize an object's attributes when it is created", "D) To copy an object"],
      correct: "C",
      explanation: "__init__ is the constructor. It runs automatically when a new object is created, setting up its initial attributes."
    },
    practice: [
      { q: 'What is the output?\n\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n\nd = Dog("Rex")\nprint(d.name)', type: "multiple_choice", options: ["A) Dog", "B) name", "C) Rex", "D) error"], correct: "C", explanation: "Dog('Rex') calls __init__ with name='Rex'. self.name = 'Rex' stores it. d.name returns 'Rex'.", diff: "beginner" },
      { q: 'How do you call a method called bark() on an object d?', type: "multiple_choice", options: ["A) Dog.bark()", "B) bark(d)", "C) d.bark()", "D) d->bark()"], correct: "C", explanation: "Methods are called using dot notation: object.method(). d.bark() calls the bark method on instance d.", diff: "beginner" },
      { q: 'What is the output?\n\nclass Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        self.count += 1\n\nc = Counter()\nc.increment()\nc.increment()\nprint(c.count)', type: "multiple_choice", options: ["A) 0", "B) 1", "C) 2", "D) error"], correct: "C", explanation: "increment() adds 1 to count each time. Called twice → count = 2.", diff: "intermediate" },
      { q: "Every method in a class MUST have 'self' as its first parameter.", type: "true_false", correct: "True", explanation: "Instance methods need 'self' to access the instance's data. (Static and class methods are exceptions using different decorators.)", diff: "intermediate" },
      { q: 'What is the output?\n\nclass Box:\n    def __init__(self, w, h):\n        self.width = w\n        self.height = h\n    def area(self):\n        return self.width * self.height\n\nb = Box(5, 3)\nprint(b.area())', type: "multiple_choice", options: ["A) 8", "B) 15", "C) (5, 3)", "D) error"], correct: "B", explanation: "Box(5, 3) sets width=5, height=3. area() returns 5*3=15.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'What is printed?\n\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def greet(self):\n        return f"Hi, I am {self.name}"\n\np = Person("Zoe", 16)\nprint(p.greet())',
      type: "multiple_choice",
      options: ["A) Hi, I am Person", "B) Hi, I am Zoe", "C) Hi, I am 16", "D) error"],
      correct: "B",
      explanation: "greet() uses self.name which is 'Zoe'. The f-string inserts it: 'Hi, I am Zoe'."
    }
  },

  13: {
    day: 13, unit: 3, unitName: "Object-Oriented Programming",
    title: "Inheritance",
    bellRinger: {
      question: "What does inheritance allow in OOP?",
      type: "multiple_choice",
      options: ["A) One class to copy another class's name", "B) A subclass to inherit attributes and methods from a parent class", "C) Two classes to share the same instance", "D) A class to call functions from other files"],
      correct: "B",
      explanation: "Inheritance lets a child (subclass) automatically get all the attributes and methods of its parent class, and add or override its own."
    },
    practice: [
      { q: 'In Python, how do you create a class Animal that is a subclass of LivingThing?', type: "multiple_choice", options: ["A) class Animal extends LivingThing:", "B) class Animal: inherit LivingThing", "C) class Animal(LivingThing):", "D) class Animal < LivingThing:"], correct: "C", explanation: "Python uses parentheses for inheritance: class ChildClass(ParentClass):", diff: "beginner" },
      { q: 'What does super().__init__() do in a subclass?', type: "multiple_choice", options: ["A) Creates a new parent class", "B) Calls the parent class's __init__ method", "C) Copies all methods from the parent", "D) Deletes the parent object"], correct: "B", explanation: "super().__init__() invokes the parent's constructor, ensuring the parent's setup code runs.", diff: "intermediate" },
      { q: "A subclass can have its own methods IN ADDITION to inherited ones.", type: "true_false", correct: "True", explanation: "Subclasses extend the parent. They inherit everything and can also add new methods or override existing ones.", diff: "beginner" },
      { q: 'What is the output?\n\nclass Animal:\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\nd = Dog()\nprint(d.speak())', type: "multiple_choice", options: ["A) ...", "B) Woof!", "C) Dog", "D) error"], correct: "B", explanation: "Dog overrides speak(). When called on a Dog instance, the Dog version is used (method overriding).", diff: "intermediate" },
      { q: "Which built-in function checks if an object is an instance of a specific class?", type: "multiple_choice", options: ["A) type()", "B) isinstance()", "C) isclass()", "D) checktype()"], correct: "B", explanation: "isinstance(obj, ClassName) returns True if obj is an instance of ClassName or any of its subclasses.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'What is printed?\n\nclass Shape:\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\n\ns = Square(4)\nprint(s.area())',
      type: "multiple_choice",
      options: ["A) 0", "B) 4", "C) 8", "D) 16"],
      correct: "D",
      explanation: "Square overrides area(). 4**2 = 16."
    }
  },

  14: {
    day: 14, unit: 4, unitName: "File I/O & Exceptions",
    title: "Reading Files",
    bellRinger: {
      question: "Which built-in function is used to open a file in Python?",
      type: "multiple_choice",
      options: ["A) read()", "B) load()", "C) open()", "D) file()"],
      correct: "C",
      explanation: "open(filename, mode) opens a file and returns a file object. Always close files when done, or use 'with'."
    },
    practice: [
      { q: 'What does the "r" mode mean in open("file.txt", "r")?', type: "multiple_choice", options: ["A) Read — opens for reading (default)", "B) Run the file", "C) Reset the file", "D) Rename the file"], correct: "A", explanation: "'r' mode opens a file for reading only. It raises an error if the file doesn't exist.", diff: "beginner" },
      { q: 'Why should you use "with open(...) as f:" instead of just open()?', type: "multiple_choice", options: ["A) It makes the code run faster", "B) It automatically closes the file when the block ends", "C) It is the only way to read files", "D) It prevents syntax errors"], correct: "B", explanation: "The 'with' statement (context manager) automatically closes the file when done, even if an error occurs.", diff: "intermediate" },
      { q: 'Which method reads all lines of a file into a list?', type: "multiple_choice", options: ["A) file.read()", "B) file.readline()", "C) file.readlines()", "D) file.lines()"], correct: "C", explanation: "readlines() returns a list where each element is one line (including the newline character \\n).", diff: "intermediate" },
      { q: "File reading in Python requires knowing the file's location (path).", type: "true_false", correct: "True", explanation: "If the file is in the same folder as your script, just use the filename. Otherwise, provide the full or relative path.", diff: "beginner" },
      { q: 'What is the best way to remove the newline character from each line when reading?', type: "multiple_choice", options: ["A) line.remove('\\n')", "B) line.strip()", "C) line.split()", "D) line.clean()"], correct: "B", explanation: "strip() removes leading and trailing whitespace including '\\n'. It's commonly used when reading file lines.", diff: "intermediate" }
    ],
    exitTicket: {
      question: 'If a file has 3 lines and you call f.readlines(), what do you get?',
      type: "multiple_choice",
      options: ["A) A single string with all text", "B) A list with 3 strings (one per line)", "C) An integer 3", "D) The first line only"],
      correct: "B",
      explanation: "readlines() returns a list where each element is a line from the file as a string."
    }
  },

  15: {
    day: 15, unit: 4, unitName: "File I/O & Exceptions",
    title: "Writing Files & Exception Handling",
    bellRinger: {
      question: "What mode opens a file for WRITING (and creates it if it doesn't exist)?",
      type: "multiple_choice",
      options: ["A) \"r\"", "B) \"w\"", "C) \"x\"", "D) \"a\""],
      correct: "B",
      explanation: "'w' mode opens for writing. It creates the file if it doesn't exist and OVERWRITES it if it does."
    },
    practice: [
      { q: 'What is the difference between "w" and "a" modes?', type: "multiple_choice", options: ["A) w appends; a overwrites", "B) w overwrites; a appends to the end", "C) They are the same", "D) a is for binary files"], correct: "B", explanation: "'w' overwrites all existing content. 'a' (append) adds to the end without deleting existing content.", diff: "beginner" },
      { q: 'What does a try-except block do?', type: "multiple_choice", options: ["A) Runs code only if a condition is True", "B) Catches and handles errors so the program doesn't crash", "C) Skips a block of code", "D) Runs code repeatedly"], correct: "B", explanation: "try-except handles exceptions gracefully. Code in 'try' is tested; if an error occurs, 'except' handles it.", diff: "beginner" },
      { q: 'What exception is raised when you try to open a file that does not exist?', type: "multiple_choice", options: ["A) ValueError", "B) TypeError", "C) FileNotFoundError", "D) IndexError"], correct: "C", explanation: "FileNotFoundError is raised when open() cannot find the file at the given path.", diff: "intermediate" },
      { q: 'What is the output if no exception occurs?\n\ntry:\n    x = 10 / 2\n    print(x)\nexcept ZeroDivisionError:\n    print("Error!")', type: "multiple_choice", options: ["A) Error!", "B) 5.0", "C) 5", "D) 10"], correct: "B", explanation: "10 / 2 = 5.0 (float division). No error occurs, so the except block is skipped.", diff: "intermediate" },
      { q: 'What does the "finally" block in a try-except do?', type: "multiple_choice", options: ["A) Runs only if an exception occurs", "B) Runs only if no exception occurs", "C) Always runs, whether or not an exception occurred", "D) Re-raises the exception"], correct: "C", explanation: "finally runs no matter what — perfect for cleanup code like closing files or releasing resources.", diff: "challenge" }
    ],
    exitTicket: {
      question: 'Which try-except catches ANY type of exception?',
      type: "multiple_choice",
      options: ["A) except TypeError:", "B) except Error:", "C) except Exception:", "D) except All:"],
      correct: "C",
      explanation: "Exception is the base class for most built-in exceptions. Catching it handles almost any error (use carefully!)."
    }
  }

};

const TOTAL_DAYS_C2 = Object.keys(LESSONS_C2).length;

function getLessonC2(day) {
  return LESSONS_C2[day] || null;
}
