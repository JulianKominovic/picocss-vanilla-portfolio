//navbar options
const navButtons = document.querySelectorAll("a[anchor-type='nav-button']");

//intersection elements
const sections = document.querySelectorAll("*[role='navigation-titles']");

//observer options

const options = {
  rootMargin: "0px",
  threshold: [0.6],
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navButtons.forEach((button) =>
        button.getAttribute("href").slice(1) ===
        entry.target.getAttribute("section-name")
          ? button.setAttribute("class", "primary")
          : button.setAttribute("class", "secondary")
      );
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => observer.observe(section));
