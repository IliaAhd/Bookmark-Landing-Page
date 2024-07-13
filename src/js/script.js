// Elements & Variables
const btnHam = document.querySelector("#ham-btn");
const mobileNavMenu = document.querySelector("#mobile-nav");
const logoIcon = document.querySelector("#logo");

const btnTab = document.querySelectorAll("#tabs > li");
const tabsContentEl = document.querySelectorAll(".tabs-container > div");

const accordionEl = document.querySelectorAll("#accordion > li");
const accordionContentEl = document.querySelectorAll("#accordion > li > p");

// Functions

// Show Mobile Nav Menu fn
const btnHamClassList = (index, className) => {
  btnHam.children[index].classList.toggle(className);
};

const showMobileNavMenu = () => {
  mobileNavMenu.classList.toggle("hidden");

  mobileNavMenu.classList.contains("hidden")
    ? logoIcon.setAttribute("src", "./src/images/logo-bookmark.svg")
    : logoIcon.setAttribute("src", "./src/images/logo-bookmark-footer.svg");

  for (let i = 0; i < btnHam.children.length; i++) {
    btnHam.children[i].classList.toggle("bg-black");
    btnHam.children[i].classList.toggle("bg-white");
  }

  btnHamClassList(0, "translate-y-2");
  btnHamClassList(0, "rotate-45");
  btnHamClassList(1, "opacity-0");
  btnHamClassList(2, "-rotate-45");
  btnHamClassList(2, "-translate-y-2");
};

// Event Handlers

// Mobile Nav Icon
btnHam.addEventListener("click", showMobileNavMenu);

// Features Tabs

for (let i = 0; i < btnTab.length; i++) {
  btnTab[i].setAttribute("data-index", i + 1);
  tabsContentEl[i].classList.add(`tab-${i + 1}`);
  btnTab[i].addEventListener("click", () => {
    btnTab.forEach((tab) => {
      tab.children[0].classList.remove("border-b-4", "border-b-softRed");
      tabsContentEl.forEach((tabContent) => {
        tabContent.classList.add(`md:hidden`, "hidden");
      });
    });
    btnTab[i].children[0].classList.add("border-b-4", "border-b-softRed");
    document
      .querySelector(`.tab-${btnTab[i].dataset.index}`)
      .classList.add("md:flex");
    document
      .querySelector(`.tab-${btnTab[i].dataset.index}`)
      .classList.remove("md:hidden", "hidden");
  });
}

accordionEl.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordionEl.forEach((acc) => {
      acc.querySelector("p").classList.add("hidden");
      acc
        .querySelector("img")
        .classList.remove("transition-transform", "rotate-180");
    });
    accordion.querySelector("p").classList.remove("hidden");
    accordion
      .querySelector("img")
      .classList.add("transition-transform", "rotate-180");
  });
});
