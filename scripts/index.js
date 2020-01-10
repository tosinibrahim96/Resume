(() => {
  const execute = () => {
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -250px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
      entries,
      appearOnScroll
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.style.opacity = 1;
          entry.target.style.transition =
            "opacity .9s cubic-bezier(0.47, 0, 0.745, 0.715)";
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    const faders = document.querySelectorAll(".info__box--hide");
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  };

  execute();
})();
