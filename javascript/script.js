const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const headerEl = document.querySelector("header");
const xbtn = document.querySelector(".close-button");
xbtn.addEventListener("click", () => {
  // add will add the class, whereas toggle is used for both on and off
  headerEl.classList.remove("nav-open");
});

const navButton = document.querySelector(".mobile-menu-icon");
navButton.addEventListener("click", () => {
  // add will add the class, whereas toggle is used for both on and off
  headerEl.classList.toggle("nav-open");
});

// //////////////////////////////////////////////////////
// Smooth Scrolling Animation for safari

// gets all the anchor tag links in the page
const allLinks = document.querySelectorAll("a:link");

// now to access each links from all links , we use for each function
allLinks.forEach(function (link) {
  // to access the link that we clicked , adding event listener
  link.addEventListener("click", function (e) {
    // to prevent deauflt scrolling
    e.preventDefault();

    // to get each #href attirbute value of the link
    const href = link.getAttribute("href");

    // if  href = # , that is logos  , if clicked on it below function will take it smoothly to top 0
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // // if href is not only # and starts with # and contains a value then this condition will aplly
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      // scrolls into the section
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-links")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// STICKY NAVIGATION

const sectionHero = document.querySelector(".hero-section");

// IntersectionObersver API
// IntersectionObserver(function (arrays){},{});

const obs = new IntersectionObserver(
  function (entries) {
    // instersectonObersver gives an array of values , so to select first array element , which contains the info that we need.
    // console.log(entries);
    const e = entries[0];
    // console.log(e);
    if (!e.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (e.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
    // whatever height given to header navigation , same should be given
  }
);
obs.observe(sectionHero);
