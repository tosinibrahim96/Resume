const infoSections = document.querySelectorAll(".info__box");

const sectionOneOptions = {};
const sectionsObserver = new IntersectionObserver(
  (entries, sectionObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("info__box--show");
      sectionObserver.unobserve(entry.target);
    });
  },
  sectionOneOptions
);

infoSections.forEach(section => {
  sectionsObserver.observe(section);
});
