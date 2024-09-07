const equipmentList = [
  {
    id: 1,
    img: "assets/equipment/3.png",
    heading: "Assuring Cleanliness",
    para: "Rigid 4-Step Sterilization process, assuring a safe spotless clinic",
  },
  {
    id: 2,
    img: "assets/equipment/2.png",
    heading: "Experience AIPS",
    para: "Our AI- Powered Sterilization (AIPS) Monitoring system from DORI, USA Exclusively at Clove",
  },
  {
    id: 3,
    img: "assets/equipment/3.png",
    heading: "Uncompromised Safety",
    para: "10x Safety protocol for a secure and worry-free dental experience",
  },
];

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
