const updateGlobalDimensions = () => {
  let vh = window.innerHeight * 0.01;
  let vw = document.documentElement.clientWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};

window.addEventListener("resize", updateGlobalDimensions);

window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("loaded");
  updateGlobalDimensions();
});
