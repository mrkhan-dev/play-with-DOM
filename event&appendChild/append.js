// 1 where to add
const mainContainer = document.getElementById("main-container");

// how to add
const section = document.createElement(`section`);
const heading = document.createElement(`h1`);
heading.innerText = "My Food List";
section.appendChild(heading);

const ul = document.createElement(`ul`);
const li1 = document.createElement(`li`);
li1.innerText = "banana";
ul.appendChild(li1);

const li2 = document.createElement(`li`);
li2.innerText = "apple";
ul.appendChild(li2);

const li3 = document.createElement(`li`);
li3.innerText = "mango";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);
