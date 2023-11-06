import { scrollHandler } from "./horizontalScroll.js";
import { scrollToForm } from "./scrollToForm.js";
import ScrollAnimation from "./animations.js";
import Popup from "./popup.js";
import Form from "./form.js";

const updateGlobalDimensions = () => {
  let vh = window.innerHeight * 0.01;
  let vw = document.documentElement.clientWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};

window.addEventListener("resize", updateGlobalDimensions);

window.addEventListener("load", () => {
  updateGlobalDimensions();
  document.querySelector(".preloader").classList.add("loaded");
  scrollHandler();
  scrollToForm();
  ScrollAnimation.initialize();
  const messagePopup = new Popup(".popup-message");
  new Form(".form-section__form", messagePopup);
});
