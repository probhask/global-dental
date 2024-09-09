import { concernList, locationsList } from "./db/Dropdownlist.js";

const dropDownTemplate = document.getElementById("dropdown-template");

////////////////////////////////////////////////////////////////
// locate nearest clinic

// container div
const locationInputDiv = document.querySelector(".location-input");
// input element
const locationInput = locationInputDiv.querySelector("input");

//dropdown btn
const locationDropDownBtn = locationInputDiv.querySelector(".select-angle");

const locationDropDownClone = dropDownTemplate.content.cloneNode(true);
const locationDropDownContainerWrapper = locationDropDownClone.querySelector(
  ".dropdown-container-wrapper"
);
const dropdown = locationDropDownClone.querySelector(".dropdown");
// add location list
locationsList.forEach((location) => {
  const dropdownItem = document.createElement("div");
  dropdownItem.textContent = location;
  dropdownItem.classList.add("dropdown-item");
  dropdown.append(dropdownItem);

  //   select location
  dropdownItem.addEventListener("click", () => {
    locationInput.value = location;
    locationDropDownContainerWrapper.style.display = "flex";
  });
});
locationDropDownContainerWrapper.setAttribute("id", "location-dropdown");
locationInputDiv.append(locationDropDownClone);

// add event listener on btn click toggle show
locationDropDownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (locationDropDownContainerWrapper.style.display === "none") {
    locationDropDownContainerWrapper.style.display = "flex";
  } else {
    locationDropDownContainerWrapper.style.display = "none";
  }
});
////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////
// concern

// drop down div / container
const selectConcernDiv = document.getElementById("select-concern");
// input element
const concernInput = selectConcernDiv.querySelector("input");
// dropdown btn
const concernDropDownBtn = selectConcernDiv.querySelector(".select-angle");

const concernDropDownClone = dropDownTemplate.content.cloneNode(true);
const concernDropDownContainerWrapper = concernDropDownClone.querySelector(
  ".dropdown-container-wrapper"
);
const concernDropdown = concernDropDownClone.querySelector(".dropdown");

// add concern list
concernList.forEach((concern) => {
  const concernDropDownItem = document.createElement("div");
  concernDropDownItem.textContent = concern;
  concernDropDownItem.classList.add("dropdown-item");
  concernDropdown.append(concernDropDownItem);

  //   select location
  concernDropDownItem.addEventListener("click", () => {
    concernInput.value = concern;
    concernDropDownContainerWrapper.style.display = "flex";
  });
});

concernDropDownContainerWrapper.setAttribute("id", "concern-dropdown");
selectConcernDiv.append(concernDropDownClone);
// addeventlistener to toggle
concernDropDownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (concernDropDownContainerWrapper.style.display === "none") {
    concernDropDownContainerWrapper.style.display = "flex";
  } else {
    concernDropDownContainerWrapper.style.display = "none";
  }
});

////////////////////////////////////////////////////////////////////////
// drop close on drop down item select/click
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((dropdownItem) => {
  dropdownItem.addEventListener("click", () => {
    dropdownItem.closest(".dropdown-container-wrapper").style.display = "none";
  });
});
////////////////////////////////////////////////////////////////
