const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;


// const hamButton = document.querySelector("#ham-menu");
// const navigation = document.querySelector("navigation");

// hamButton.addEventListener("click",() => {
//     navigation.classList.toggle("open");
//     hamButton.classList.toggle("open");
// });



