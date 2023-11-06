import Api from "../../api/index.js";

window.addEventListener("DOMContentLoaded", async (e) => {
  document.querySelector(".preloader").classList.add("loaded");
  const serchString = window.location.search;
  const params = new URLSearchParams(serchString);

  const searchService = params.get("service");

  const service = await Api.getService(searchService);

  if (!service) {
    window.location.href = "/";
  }

  const content = document.querySelector(".service__content");
  content.innerHTML = service.content;
});
