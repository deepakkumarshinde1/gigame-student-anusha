// let const
// destructuring
let array = [10, 20, 30, 40, 50];
let [n1, n2, ...arr] = array;
console.log(n2, n2, arr);

let student = {
  name: "deepak",
  location: "Nashik",
  age: 35,
  role: "Trainer",
};

let { name: studentName, location } = student;

console.log(studentName);

//  spread => deep copy
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];
arr1[0] = 100;
console.log(arr1);
console.log(arr2);

let studentBasic = {
  name: "deepak",
  age: 35,
};

let studentLocation = {
  location: "Nashik",
};

let studentRole = {
  role: "Trainer",
};

let studentDetails = {
  ...studentBasic,
  ...studentLocation,
  ...studentRole,
};

// string template
let text = `hi, i am ${studentDetails.name} having age ${studentDetails.age}`;

let a = "hello";
let b = "hey";
let c = "hi";

let messages = {
  a,
  b,
  c,
};
console.clear();
console.log(messages);

let stud = {
  name: "deepak",
  location: "Nashik",
  age: 35,
  role: "Trainer",
};
// MAP
let map = new Map(Object.entries(stud));
// map.set("key", "value");
// map.set("key1", "value");
// map.set("key2", "value");
// map.set("key3", "value");

map.get("key");
map.has("key1");
map.delete("key2");
// map.size();
// map.clear();
// map.forEach;

let set = new Set([1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7]);
set.add();
set.has(10);
set.delete();

function add(...values) {}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

let arr4 = [1, 2, 3];

function* loop(array) {
  let i = 0;
  while (i < array.length) {
    if (i === array.length - 1) {
      return array[i];
    }
    yield array[i];
    i++;
  }
}
console.clear();

let genObject = loop(arr4);
console.log(genObject.next());
console.log(genObject.next());
console.log(genObject.next());

async function promise() {
  try {
    await p1();
    await p2();
    await p1();
  } catch (error) {}
}

//Promise.all();
//Promise.race();
//Promise.allSettled();

//Date.now();

// let date = new Date();
// date.getMonth();

// Math.floor();

class Human {
  #fName = "Anusha";

  set fullName(value) {
    this.#fName = value;
  }

  get fullName() {
    return this.#fName;
  }

  static a = 20;
  static b = 20;

  static running() {
    this.a;
  }

  add(c) {
    console.log(Human.a + Human.b + c);
  }
}

let human = new Human();
console.clear();
human.fullName = "deepakkumar";
console.log(human.fullName);

//human.add(10);
