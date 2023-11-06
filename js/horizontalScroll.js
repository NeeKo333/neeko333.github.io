export const scrollHandler = () => {
  const scrollContainer = document.querySelector(".nav-conteiner");

  if (scrollContainer) {
    let mouseDown = false;
    let startX;
    let scrollLeftScroll;
    const scrollSpeed = 1.5;

    if (scrollContainer.clientWidth === scrollContainer.scrollWidth) {
      return;
    }

    scrollContainer.addEventListener("mousedown", (e) => {
      mouseDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeftScroll = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mousemove", (e) => {
      if (!mouseDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * scrollSpeed;
      scrollContainer.scrollLeft = scrollLeftScroll - walk;
    });

    scrollContainer.addEventListener("mouseup", () => {
      mouseDown = false;
    });

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;

      // if (
      //   scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      //   scrollContainer.scrollWidth
      // ) {
      //   window.scrollBy({
      //     top: 100,
      //     behavior: "smooth",
      //   });
      // }
    });
  }
};
