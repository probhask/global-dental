const tabs = [
  {
    tabName: "General Dentistry",
    tabId: "general-dentistry-blog-tab",
  },
  {
    tabName: "Cosmetic Dentistry",
    tabId: "cosmetic-dentistry-blog-tab",
  },
];
// blog images
const blogImages = [
  "assets/blog/1.png",
  "assets/blog/2.png",
  "assets/blog/3.png",
];
// blog name
const blogName =
  "Dry Sockets Demystified: Understanding the connection to tooth extraction";
//   blog date
const blogDate = "12th Feb";
const blogDuration = "2 min read";

// blog section
const blogSection = document.getElementById("blog-section");
// blog container
const blogContainer = document.getElementById("blog-container");
// left scroll btn
const leftScrollBtn = blogSection.querySelector(".left-navigate");
// right scroll btn
const rightScrollBtn = blogSection.querySelector(".right-navigate");

// blog tabs
const generalDentistry = document.getElementById("general-dentistry-blog-tab");
const cosmeticDentistry = document.getElementById(
  "cosmetic-dentistry-blog-tab"
);
const crownsDentistry = document.getElementById("crowns-blog-tab");

// array of blog tabs
const blogTabs = [generalDentistry, cosmeticDentistry, crownsDentistry];

// blog Template
const blogTemplate = document.getElementById("blog-template");

// add blog for each tabs
blogTabs.forEach((tabs, tabIndex) => {
  const tabBlogContainer = document.createElement("div");
  tabBlogContainer.classList.add("blog-list-box");
  tabBlogContainer.setAttribute(
    "id",
    `${blogTabs[tabIndex].getAttribute("id")}-blog-list-box`
  );
  //   add 6 blog to each tabs
  for (let i = 0; i < 6; i++) {
    // cloning template
    const blogTemplateClone = blogTemplate.content.cloneNode(true);

    blogTemplateClone.querySelector(".blog-img").querySelector("img").src =
      blogImages[tabIndex];
    blogTemplateClone.querySelector(".blog-name").textContent = blogName;
    blogTemplateClone.querySelector(".blog-date").textContent = blogDate;
    blogTemplateClone.querySelector(".blog-duration").textContent =
      blogDuration;

    //   append blog to its container
    tabBlogContainer.append(blogTemplateClone);
  }
  //   add container to blog main container
  blogContainer.append(tabBlogContainer);
});

///////////////////////////////////////////////////////////////
// scrolling
const blogContainerWidth = blogContainer.scrollWidth / blogTabs.length;
///////////////////////////////////////////////////////////////
// blog tab with scroll position
const blogTabsWithPosition = [
  {
    blogTab: blogTabs[0],
    position: blogContainerWidth * 0,
  },
  {
    blogTab: blogTabs[1],
    position: blogContainerWidth * 1,
  },
  {
    blogTab: blogTabs[2],
    position: blogContainerWidth * 2,
  },
];
// change active tab function
function changeActiveBlogTab(toAddActiveTab) {
  if (toAddActiveTab) {
    // other tab remove active
    blogTabs.forEach((tab) => {
      if (tab.classList.contains("active-blog-tab")) {
        tab.classList.remove("active-blog-tab");
      }
    });
    // add active to tab
    toAddActiveTab.classList.add("active-blog-tab");
  }
}

// add event listener on tab click change tab{
blogTabsWithPosition.forEach(({ blogTab, position }) => {
  blogTab.addEventListener("click", () => {
    blogContainer.scrollLeft = position;
    // changeActiveBlogTab(blogTab);
  });
});

///////////////////////////////////////////////////////////////

// scroll left
leftScrollBtn.addEventListener("click", () => {
  if (blogContainer.scrollLeft !== 0) {
    blogContainer.scrollLeft -= blogContainerWidth;
  }
});
// scroll right
rightScrollBtn.addEventListener("click", () => {
  blogContainer.scrollLeft += blogContainerWidth;
});
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// add event listener on blog container to change Active
blogContainer.addEventListener("scroll", () => {
  const blogContainerWidth = blogContainer.scrollWidth / blogTabs.length;
  if (blogContainer.scrollLeft < blogContainerWidth / 1.5) {
    changeActiveBlogTab(blogTabs[0]);
  } else if (blogContainer.scrollLeft < (blogContainerWidth * 2) / 1.5) {
    changeActiveBlogTab(blogTabs[1]);
  } else {
    changeActiveBlogTab(blogTabs[2]);
  }
});
/////////////////////////////////////////////////////////////
