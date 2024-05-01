const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified;