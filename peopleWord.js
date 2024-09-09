import { peopleList } from "./db/peoplelist.js";

document.addEventListener("DOMContentLoaded", () => {
  const peopleListContainer = document.getElementById("people-list");

  const peopleWordTemplate = document.querySelector("#people-word-template");

  peopleList.forEach((person) => {
    const templateClone = peopleWordTemplate.content.cloneNode(true);
    templateClone.querySelector(".people-img").src = person.img;
    templateClone.querySelector(".info-title").textContent = person.name;
    templateClone.querySelector(".info-treatment").textContent =
      person.treatment;

    peopleListContainer.appendChild(templateClone);
  });
});
