import { treatmentList } from "./db/treatmentList.js";

// scroll banner
const heroBanner = document.getElementById("hero-banner");
const scrollTabContainer = document.querySelector(".banner-scroll-tab");
const firstTab = scrollTabContainer.firstElementChild;
const secondTab = scrollTabContainer.children[1];
const heroBannerFullScrollWidth = heroBanner.scrollWidth;

function scrollTabActivate() {
  if (heroBanner.scrollLeft < heroBannerFullScrollWidth / 2 - 20) {
    firstTab.classList.remove("active-tab");
    secondTab.classList.add("active-tab");
  } else {
    firstTab.classList.add("active-tab");
    secondTab.classList.remove("active-tab");
  }
}
////////////////////////////////////////////////////////////////
// banner scroll
function heroBannerScroll() {
  if (heroBanner.scrollLeft < heroBannerFullScrollWidth / 2 - 20) {
    heroBanner.scrollLeft = heroBannerFullScrollWidth;
    firstTab.classList.remove("active-tab");
    secondTab.classList.add("active-tab");
  } else {
    heroBanner.scrollLeft = 0;
    firstTab.classList.add("active-tab");
    secondTab.classList.remove("active-tab");
  }
}
// banner auto scroll
setInterval(() => {
  heroBannerScroll();
}, 4000);

////////////////////////////////////////////////////////////////
// animate scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".scroll-animation");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    // check if the element is within the viewport
    if (position < windowHeight - 50) {
      // 50px offset for earlier triggering

      element.classList.add("active");
    }
  });
});

////////////////////////////////////////////////////////////////
// header-link outside click element declaration
const treatmentSection = document.getElementById("treatment-section");
const treatmentNavLink = document.getElementById("treatment-nav-link");
// help contact
const helpContactSection = document.getElementById("help-contact-section");
const helpContactNavLink = document.querySelectorAll(".help-contact");
const bookAppointmentSection = document.getElementById(
  "book-appointment-section"
);
// appointment
const bookAppointmentLink = document.querySelectorAll(".book-appointment-btn");
const appointmentForm1 = bookAppointmentSection.querySelector(".form-1");
const form1NextBtn = appointmentForm1.querySelector("#form-next-btn");
const appointmentForm2 = bookAppointmentSection.querySelector(".form-2");
const form2SubmitBtn = appointmentForm2.querySelector("#form-submit-btn");

// menu
const menuContainerWrapper = document.querySelector(".menu-container-wrapper");
const menuContainer = document.querySelector(".menu-container");
const menuBtn = document.querySelector("#menu-icon-btn");
const menuCloseBtn = document.querySelector(".close-menu");
////////////////////////////////////////////////////////////////
// treatment block template add dynamic value
document.addEventListener("DOMContentLoaded", function () {
  const treatmentTemplate = document.getElementById("treatment-template");
  treatmentList.reverse().forEach((treatment) => {
    const tempClone = treatmentTemplate.content.cloneNode(true);
    tempClone.querySelector(".treatment-box").firstElementChild.textContent =
      treatment;

    treatmentSection.prepend(tempClone);
  });
});

////////////////////////////////////////////////////////////////
// treatment block show and hide
treatmentNavLink.addEventListener("click", (e) => {
  e.stopPropagation();
  if (treatmentSection.style.display === "none") {
    treatmentSection.style.display = "block";
  } else {
    treatmentSection.style.display = "none";
  }
  helpContactSection.style.display = "none";
  bookAppointmentSection.style.display = "none";
});

////////////////////////////////////////////////////////////////
// help contact section show or hide
helpContactNavLink.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    if (helpContactSection.style.display === "none") {
      helpContactSection.style.display = "flex";
    } else {
      helpContactSection.style.display = "none";
    }
    treatmentSection.style.display = "none";
    bookAppointmentSection.style.display = "none";
    menuContainerWrapper.style.display = "none";
  });
});
////////////////////////////////////////////////////////////////
// book appointment section show or hide
bookAppointmentLink.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    if (bookAppointmentSection.style.display === "none") {
      bookAppointmentSection.style.display = "block";
    } else {
      bookAppointmentSection.style.display = "none";
    }
    treatmentSection.style.display = "none";
    helpContactSection.style.display = "none";
    menuContainerWrapper.style.display = "none";

    // set form top form1
    appointmentForm1.style.display = "flex";
    appointmentForm2.style.display = "none";
  });
});

// appointment forms transition
form1NextBtn.addEventListener("click", () => {
  if (bookAppointmentSection.style.display !== "none") {
    appointmentForm1.style.display = "none";
    appointmentForm2.style.display = "flex";
  }
});
form2SubmitBtn.addEventListener("click", () => {
  if (bookAppointmentSection.style.display !== "none") {
    bookAppointmentSection.style.display = "none";
    // set form top form1
    appointmentForm1.style.display = "flex";
    appointmentForm2.style.display = "none";
  }
});

////////////////////////////////////////////////////////////////
// menu logic
// menu show or hide

function showMenu() {
  menuContainerWrapper.style.display = "flex";
}
function hideMenu() {
  menuContainerWrapper.style.display = "none";
}
// menu btn click menu hide or show
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (menuContainerWrapper.style.display === "none") {
    showMenu();
  } else {
    hideMenu();
  }
  treatmentSection.style.display = "none";
  helpContactSection.style.display = "none";
  bookAppointmentSection.style.display = "none";
});
// close menu
menuCloseBtn.addEventListener("click", hideMenu);
//submenu show or hide
const moreMenuItems = menuContainer.querySelectorAll(".more-menu-item");

moreMenuItems.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.nextElementSibling.style.display === "none") {
      element.nextElementSibling.style.display = "block";
    } else {
      element.nextElementSibling.style.display = "none";
    }
  });
});

////////////////////////////////////////////////////////////////
// hide on width greater than 960
// const treatmentSection = document.querySelector("#treatment-section");
window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    menuContainerWrapper.style.display = "none";
  }
  if (window.innerWidth < 960) {
    treatmentSection.style.display = "none";
  }
});

////////////////////////////////////////////////////////////////
// detect Outside Click function
function detectOutsideClick(e, element) {
  return element.contains(e.target);
}

// ///////////////////////////////////////////////////////////////
//section outside click close
window.addEventListener("click", (e) => {
  // treatment section
  if (!detectOutsideClick(e, treatmentSection)) {
    treatmentSection.style.display = "none";
  }
  // help contact section
  if (!detectOutsideClick(e, helpContactSection)) {
    helpContactSection.style.display = "none";
  }
  // book appointment section
  if (!detectOutsideClick(e, bookAppointmentSection)) {
    bookAppointmentSection.style.display = "none";
    // set form top form1
    appointmentForm1.style.display = "flex";
    appointmentForm2.style.display = "none";
  }
  if (!detectOutsideClick(e, menuContainer)) {
    hideMenu();
  }
});
