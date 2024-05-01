const input = document.querySelector("favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const newLi = document.createElement("li");
const deleteButton = document.createElement("button");

newLi.textContent = input.value;
deleteButton.textContent = "❌";

newLi.append(deleteButton);
list.append(newLi);

button.addEventListener("click", function(); {
    if ()

}