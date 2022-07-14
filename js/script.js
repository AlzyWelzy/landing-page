const allLinks = document.querySelectorAll("a:link");

const btnNavEl = document.querySelector(".btn-mobile-nav");
const main = document.querySelector(".main");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  //   main.classList.toggle("none");
});

const yearElement = document.querySelector(".year");
yearElement.textContent = new Date().getFullYear();

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    // Scroll to top
    // Event caused by logo click
    if (href === "#") {
      // const target = this.getAttribute("href");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to link/Section
    // Event caused by link click
    if (href !== "#" && href.startsWith("#")) {
      const sectionlEl = document.querySelector(href);
      // console.log(sectionlEl);
      sectionlEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("nav-link")) {
      //   main.classList.toggle("none");
      headerEl.classList.toggle("nav-open");
    }
  });
});
