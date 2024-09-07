const peopleList = [
  {
    id: 1,
    img: "assets/peopleWord/1.svg",
    name: "Shubham",
    treatment: "Braces",
  },
  {
    id: 2,
    img: "assets/peopleWord/2.svg",
    name: "Shubham",
    treatment: "Braces",
  },
  {
    id: 3,
    img: "assets/peopleWord/3.svg",
    name: "Shubham",
    treatment: "Braces",
  },
  {
    id: 4,
    img: "assets/peopleWord/4.svg",
    name: "Shubham",
    treatment: "Braces",
  },
  {
    id: 5,
    img: "assets/peopleWord/5.png",
    name: "Shubham",
    treatment: "Braces",
  },
  {
    id: 6,
    img: "assets/peopleWord/4.svg",
    name: "Shubham",
    treatment: "Braces",
  },
  {
    id: 7,
    img: "assets/peopleWord/1.svg",
    name: "Shubham",
    treatment: "Braces",
  },
  {
    id: 8,
    img: "assets/peopleWord/2.svg",
    name: "Shubham",
    treatment: "Braces",
  },
];

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
