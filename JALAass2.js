let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
s=fruits.reverse()
let btn = document.createElement("button");
btn.innerHTML = "Save";
btn.addEventListener("click", function () {
  console.log(s);
});
document.body.appendChild(btn);