import "../styles/main.scss";
import "regenerator-runtime/runtime";

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");

  const initialColorTheme = localStorage.getItem("colorTheme");

  console.log(initialColorTheme);

  const toggler = document.getElementById("toggle");
  const header = document.querySelector("header");
  const section = document.querySelector("section");

  toggler.addEventListener("click", () => {
    header.classList.toggle("darkHeader");
    section.classList.toggle("darkSection");

    let colorTheme;
    localStorage.setItem("colorTheme", colorTheme);
  });
});
