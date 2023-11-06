const ScrollAnimation = {
  animateElements() {
    const animatedElements = document.querySelectorAll(".animate");
    animatedElements.forEach((el) => {
      const elementPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (elementPosition < screenPosition) {
        el.classList.add("animated");
      }
    });
  },
  initialize() {
    this.animateElements();
    window.addEventListener("scroll", this.animateElements);
  },
};

export default ScrollAnimation;
