import { bmwCars } from "./bmwCars.js";

document.addEventListener("DOMContentLoaded", () => {
    const source = document.querySelector("#car-template").innerHTML.trim();
    const template = Handlebars.compile(source);

    const carContainer = document.querySelector("#menu-container");
    carContainer.innerHTML = "";

    bmwCars.forEach((car) => {
    const html = template(car);
    carContainer.innerHTML += html;
    });
});
