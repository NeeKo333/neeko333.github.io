const burgerMenuHandler = (() => {
  window.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger-menu");
    const navMenuBackground = document.querySelector(".header__nav-wrapper");
    const navMenuList = document.querySelector(".header__nav-list");
    const closeBtn = document.querySelector(".header__close-btn");

    const setBurgerMenuActive = () => {
      burger.classList.add("hide");
      navMenuBackground.classList.add("active");
      navMenuList.classList.add("active");
      closeBtn.classList.add("active");
      document.body.classList.add("js-body-no-scroll");
    };

    const setBurgerMenuUnActive = () => {
      if (closeBtn.classList.contains("active")) {
        burger.classList.remove("hide");
        navMenuBackground.classList.remove("active");
        navMenuList.classList.remove("active");
        closeBtn.classList.remove("active");
        document.body.classList.remove("js-body-no-scroll");
      }
    };

    const isDesctopCheck = () =>
      window.matchMedia("(min-width: 1200px)").matches &&
      setBurgerMenuUnActive();

    if (burger && navMenuBackground && navMenuList && closeBtn) {
      window.addEventListener("click", (e) => {
        e.target.classList.contains("header__nav-wrapper") &&
          setBurgerMenuUnActive();
      });

      burger.addEventListener("click", setBurgerMenuActive);
      closeBtn.addEventListener("click", setBurgerMenuUnActive);
    }

    window.addEventListener("resize", isDesctopCheck);
  });
})();
