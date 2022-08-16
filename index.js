import { pickr } from "./pickr.js";

let slideSettings = document.querySelectorAll(".slidesetting");
let preview = document.querySelector("#preview");
setDefaultSettings(preview);

//A listener for color picker
pickr.on("change", (color) => {
  let colorRGBA = color.toRGBA().toString(2);
  preview.style["backgroundColor"] = colorRGBA;
  document.querySelector(".codeline-backgroundColor").textContent = colorRGBA.substring(5, colorRGBA.length-1) 
});

//A listener for all sliders
slideSettings.forEach((element) => {
  let slider = element.querySelector("input");
  slider.addEventListener("input", function () {
    let property = slider.id;
    let value = slider.value;
    switch (property) {
      case "blur":
        preview.style.backdropFilter = `blur(${value}px)`;
        document.querySelector(".codeline-blur").textContent = `${value}px`;
        break;
        case "contrast":
        preview.style.backdropFilter = `contrast(${value}%)`;
        document.querySelector(".codeline-contrast").textContent = `${value}%`;
        break;
        case "saturate":
        preview.style.backdropFilter = `saturate(${value}%)`;
        document.querySelector(".codeline-saturate").textContent = `${value}%`;
        break;
        case "border-radius":
        preview.style.borderRadius = `${value}%`;
        document.querySelector(".codeline-borderRadius").textContent = `${value}%`;
        break;
        case "size":
        preview.style.width = `${value}px`;
        preview.style.height = `${value}px`;
        document.querySelector(".codeline-width").textContent = `${value}px`;
        document.querySelector(".codeline-heigth").textContent = `${value}px`;
        break;
      default:
        console.log("Undefined property");
        console.log(property);
        break;
    }
  });
});

function setDefaultSettings(container) {
  container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  container.style.backdropFilter = "blur(50px)";
  container.style.backdropFilter = "contrast(50%)";
  container.style.backdropFilter = "saturate(50%)";
  container.style.borderRadius = "25%";
  container.style.width = "300px";
  container.style.height = "300px";
}
console.log(preview.style);

console.log(document.getElementById("code").textContent);