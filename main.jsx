let parent = document.getElementById("parent");
let child = document.getElementById("child");
let a = document.getElementById("a");

parent.addEventListener("click", function (e) {
  console.log("parent");
});
child.addEventListener("click", function (e) {
  console.log("child");
  e.stopPropagation();
});

a.addEventListener("click", function (event) {
  event.preventDefault();
});
