const doctorList = [
  {
    id: 1,
    img: "assets/doctor/1.png",
    name: "Dr. Dan Smith",
    experience: "18+ Years Experience",
  },
  {
    id: 2,
    img: "assets/doctor/2.png",
    name: "Dr. Martha Stewart",
    experience: "10+ Years Experience",
  },
  {
    id: 3,
    img: "assets/doctor/1.png",
    name: "Dr. Dan Smith",
    experience: "18+ Years Experience",
  },
  {
    id: 4,
    img: "assets/doctor/2.png",
    name: "Dr. Martha Stewart",
    experience: "10+ Years Experience",
  },
];

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
