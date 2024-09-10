import { treatmentList } from "./db/treatmentList.js";

////////////////////////////////////////////////////////////////
// scroll banner declaration
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
////////////////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// header-link
const treatmentSection = document.getElementById("treatment-section");
const treatmentNavLink = document.getElementById("treatment-nav-link");

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

// treatment block show and hide
treatmentNavLink.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleSelectVisibility(treatmentSection, "grid");
});

////////////////////////////////////////////////////////////////
// help contact section
const helpContactSection = document.getElementById("help-contact-section");
const helpContactNavLink = document.querySelectorAll(".help-contact");

// toggle show or hide
helpContactNavLink.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSelectVisibility(helpContactSection, "flex");
  });
});
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// appointment section
const bookAppointmentSection = document.getElementById(
  "book-appointment-section"
);
// nav link
const bookAppointmentLink = document.querySelectorAll(".book-appointment-btn");
// form 1
const appointmentForm1 = bookAppointmentSection.querySelector(".form-1");
const form1NextBtn = appointmentForm1.querySelector("#form-next-btn");
// form 2
const appointmentForm2 = bookAppointmentSection.querySelector(".form-2");
const form2SubmitBtn = appointmentForm2.querySelector("#form-submit-btn");
// close appointment from btn
const closeAppointmentFormButtons = document.querySelectorAll(
  ".close-appointment-form-btn"
);
// toggle section show or hide
bookAppointmentLink.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSelectVisibility(bookAppointmentSection, "flex");
    // set form top form1
    appointmentForm1.style.display = "flex";
    appointmentForm2.style.display = "none";
  });
});
// close appointment from onclick
closeAppointmentFormButtons.forEach((element) => {
  element.addEventListener("click", () => {
    bookAppointmentSection.style.display = "none";
  });
});
// appointment form1 btn click navigate to second form
form1NextBtn.addEventListener("click", () => {
  if (bookAppointmentSection.style.display !== "none") {
    appointmentForm1.style.display = "none";
    appointmentForm2.style.display = "flex";
  }
});
// onclick btn close book appointments section
form2SubmitBtn.addEventListener("click", () => {
  if (bookAppointmentSection.style.display !== "none") {
    bookAppointmentSection.style.display = "none";
    // set form top form1
    appointmentForm1.style.display = "flex";
    appointmentForm2.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// menu
const menuContainerWrapper = document.querySelector(".menu-container-wrapper");
const menuContainer = document.querySelector(".menu-container");
const menuBtn = document.querySelector("#menu-icon-btn");
const menuCloseBtn = document.querySelector(".close-menu");

// treatment menu
const treatmentMenu = document.querySelector("#treatment-menu");
const treatmentSubMenuContainer = document.createElement("ul");
treatmentSubMenuContainer.classList.add("sub-menu");
treatmentList.forEach((item) => {
  const itemElement = document.createElement("li");
  itemElement.textContent = item;
  itemElement.classList.add("sub-menu-items", "item");
  treatmentSubMenuContainer.append(itemElement);
});
treatmentMenu.insertAdjacentElement("afterend", treatmentSubMenuContainer);

function showMenu() {
  menuContainerWrapper.style.display = "flex";
}
function hideMenu() {
  menuContainerWrapper.style.display = "none";
}
// toggle menu hide or show
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleSelectVisibility(menuContainerWrapper, "flex");
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

// hide menu on width greater than 960px
window.addEventListener("resize", () => {
  if (window.innerWidth > 960) {
    menuContainerWrapper.style.display = "none";
  }
  if (window.innerWidth < 960) {
    treatmentSection.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
//section outside click close////////////////////////////
// dropdown element
const dropDowns = document.querySelectorAll(".dropdown-container-wrapper");
// detect Outside Click function
function detectOutsideClick(e, element) {
  // console.log(element, element.contains(e.target));

  return element.contains(e.target);
  console.log(element.contains(e.target));
}
// add event listeners on outside click
window.addEventListener("click", (e) => {
  // treatment section
  if (!detectOutsideClick(e, treatmentSection)) {
    treatmentSection.style.display = "none";
  }
  // help contact section
  if (!detectOutsideClick(e, helpContactSection)) {
    helpContactSection.style.display = "none";
  }
  // appointment section
  // if (!detectOutsideClick(e, appointmentForm1)) {
  //   console.log("book1");

  //   bookAppointmentSection.style.display = "none";
  // }
  // if (
  //   // bookAppointmentSection.style.display !== "none" &&
  //   !detectOutsideClick(e, appointmentForm2)
  // ) {
  //   console.log("book2");

  //   bookAppointmentSection.style.display = "none";
  // }
  // menu
  if (!detectOutsideClick(e, menuContainer)) {
    hideMenu();
  }
  //dropdowns
  dropDowns.forEach((dropDown) => {
    if (!detectOutsideClick(e, dropDown)) {
      dropDown.style.display = "none";
    }
  });
});
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// toggle Selected element  Visibility
const toggleSelectVisibility = (selectionToToggleElement, display) => {
  // other element hide
  treatmentSection.style.display = "none";
  helpContactSection.style.display = "none";
  bookAppointmentSection.style.display = "none";
  menuContainerWrapper.style.display = "none";
  //dropdowns hide
  dropDowns.forEach((dropDown) => {
    dropDown.style.display = "none";
  });

  // toggle element
  if (selectionToToggleElement.style.display === "none") {
    selectionToToggleElement.style.display = display;
  } else {
    selectionToToggleElement.style.display = "none";
  }
};
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//navlink btn click navigate
// clinic navLink
const locationSection = document.getElementById("find-location");
const clinicNavLinks = document.querySelectorAll(".clinic-nav-link");
clinicNavLinks.forEach((element) =>
  element.addEventListener("click", () => navigateToElement(locationSection))
);
// doctor navLink
const doctorSection = document.getElementById("service-section");
const doctorNavLinks = document.querySelectorAll(".doctor-nav-link");
doctorNavLinks.forEach((element) =>
  element.addEventListener("click", () => navigateToElement(doctorSection))
);
// career navLink
const careerSection = document.getElementById("career-section");
const careerNavLinks = document.querySelectorAll(".career-nav-link");
careerNavLinks.forEach((element) =>
  element.addEventListener("click", () => navigateToElement(careerSection))
);

// scroll to function
function navigateToElement(element) {
  element.scrollIntoView({ behavior: "smooth" });
  menuContainerWrapper.style.display = "none";
}

////////////////////////////////////////////////////////////////
