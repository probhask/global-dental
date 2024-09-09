import { doctorList } from "./db/doctorslist.js";

window.addEventListener("DOMContentLoaded", () => {
  const serviceDoctorContainer = document.getElementById(
    "service-doctors-list"
  );
  const doctorTemplate = document.getElementById("service-doctor-template");

  doctorList.forEach((doctor) => {
    const templateClone = doctorTemplate.content.cloneNode(true);

    templateClone.querySelector(".doctor-img").src = doctor.img;
    templateClone.querySelector(".doctor-name").textContent = doctor.name;
    templateClone.querySelector(".doctor-experience").textContent =
      doctor.experience;

    serviceDoctorContainer.appendChild(templateClone);
  });
});
