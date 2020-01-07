(() => {
  const execute = () => {
    /* Every time the window is scrolled ... */
    // window.addEventListener("scroll", function() {
    //   const hiddenElements = document.querySelectorAll(".info__box--hide");
    //   hiddenElements.forEach(elem => {
    //     const bottom_of_object = elem.offsetTop + elem.offsetHeight;
    //     const bottom_of_window = window.pageYOffset + window.innerHeight;

    //     console.log(bottom_of_window, bottom_of_object);
    //     /* If the object is completely visible in the window, increase opacity with transition */
    //     if (bottom_of_window > bottom_of_object) {
    //       elem.style.opacity = 1;
    //       elem.style.transition =
    //         "opacity 2s cubic-bezier(0.47, 0, 0.745, 0.715)";
    //     }
    //   });
    // });

    const skillsModal = document.getElementById("skillsModal");
    const skillsmodalTrigger = document.getElementById("skills-modal__trigger");
    const span = document.querySelector(".modal__content__close");

    skillsmodalTrigger.onclick = function(event) {
      event.preventDefault();
      skillsModal.style.display = "block";
    };
    span.addEventListener("click", function() {
      skillsModal.style.display = "none";
    });
    window.addEventListener("click", function(event) {
      if (event.target == skillsModal) {
        skillsModal.style.display = "none";
      }
    });
  };

  execute();
})();
