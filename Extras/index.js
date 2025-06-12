let subscription = new WeakMap();

function subscriptionInfo() {
  let details = {
    token: "value",
  };
  let myPrivateKey = "dkjash878687686$#$hgdshadfg6565";
  subscription.set(details, {
    key: myPrivateKey,
  });
  return details;
}

let sub = subscriptionInfo();
subscription.get(sub);

let userSubKey = Symbol("this is key");

let userData = {
  name: "deepak",
  [userSubKey]: "dskjfkhdsf74386578465jhdfjksdhfk",
};

console.log(userData[userSubKey]);
let key = Object.keys(userData);
let array = [10, 20, 30, 40];
let iterator = array[Symbol.iterator]();
iterator.next(); // {value:10, done:false}
iterator.next(); // {value:20, done:false}

let myCarouselObject = {
  list: [
    { name: "", image: "", description: "" },
    { name: "", image: "", description: "" },
    { name: "", image: "", description: "" },
  ],
  [Symbol.iterator]() {
    let _list = this.list;
    let index = 0;
    return {
      next() {
        if (index === _list.length) {
          index = 0;
        }
        next++;
        return { value: _list[index - 1], done: false };
      },
      pre() {
        if (index === -1) {
          index = _list.length;
        }
        next--;
        return { value: _list[index + 1], done: false };
      },
    };
  },
};

let myCarousel = myCarouselObject[Symbol.iterator]();

myCarousel.next;

let object = null;
let list = null;

object = {};

list = [];
