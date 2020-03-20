import "../styles/main.scss";
import "regenerator-runtime/runtime";

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");

  const toggler = document.getElementById("toggle");
  const header = document.querySelector("header");
  const section = document.querySelector("section");

  // functions:

  const setDarkTheme = () => {
    header.classList.add("darkHeader");
    section.classList.add("darkSection");
  };

  const setLightTheme = () => {
    header.classList.remove("darkHeader");
    section.classList.remove("darkSection");
  };

  const initialColorTheme = localStorage.getItem("colorTheme");
  console.log(localStorage);
  console.log(initialColorTheme);

  // event listener on toggler:
  toggler.addEventListener("click", () => {
    if (initialColorTheme === "dark") {
      setLightTheme();
      localStorage.setItem(initialColorTheme, "light");
    } else {
      setDarkTheme();
      localStorage.setItem(initialColorTheme, "dark");
    }
    console.log(initialColorTheme);
  });
});
