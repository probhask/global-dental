const hideShowAnimateContainers = document.querySelectorAll(
  ".hide-show-animate-container"
);

hideShowAnimateContainers.forEach((container) => {
  const hideShowAnimateItems = container.querySelectorAll(
    ".hide-show-animate-item"
  );
  let currentIndex = 0;

  function showNextItem() {
    //   hide all item
    hideShowAnimateItems.forEach((item) => {
      item.style.display = "none";
    });
    //   show the current item
    hideShowAnimateItems[currentIndex].style.display = "block";

    //   increment the index
    currentIndex++;

    // if at the last item, loop back to first
    if (currentIndex >= hideShowAnimateItems.length) {
      currentIndex = 0;
    }
  }
  setInterval(showNextItem, 2000);
});
