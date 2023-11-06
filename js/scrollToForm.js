export const scrollToForm = () => {
  const orderLinks = document.querySelectorAll(".tab-pane__offer-link");

  orderLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const form = document.querySelector(".form-section__form");
      form.scrollIntoView({ behavior: "smooth" });
    })
  );
};
