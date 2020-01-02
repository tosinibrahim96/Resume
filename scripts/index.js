(() => {
  const execute = () => {
    /* Every time the window is scrolled ... */
    window.addEventListener("scroll", function() {
      const hiddenElements = document.querySelectorAll(".hideme");
      hiddenElements.forEach(elem => {
        const bottom_of_object = elem.offsetTop + elem.offsetHeight;
        const bottom_of_window = window.pageYOffset + window.innerHeight;

        /* If the object is completely visible in the window, increase opacity with transition */
        if (bottom_of_window > bottom_of_object) {
          elem.style.opacity = 1;
          elem.style.transition =
            "opacity 2s cubic-bezier(0.47, 0, 0.745, 0.715)";
        }
      });
    });
  };
  execute();
})();
