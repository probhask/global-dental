import { equipmentList } from "./db/equipmentlist.js";

window.addEventListener("DOMContentLoaded", () => {
  const equipmentSection = document.getElementById("equipment-section");
  const equipmentTemplate = document.getElementById("equipment-block-template");

  equipmentList.forEach((equip) => {
    const equipmentClone = equipmentTemplate.content.cloneNode(true);

    equipmentClone.querySelector(".equip-img").src = equip.img;
    equipmentClone.querySelector(".equip-heading").textContent = equip.heading;
    equipmentClone.querySelector(".equip-para").textContent = equip.para;

    equipmentSection.appendChild(equipmentClone);
  });
});
