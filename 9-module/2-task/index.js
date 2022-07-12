import Carousel from "../../6-module/3-task/index.js";
import slides from "../../6-module/3-task/slides.js";

import RibbonMenu from "../../7-module/1-task/index.js";
import categories from "../../7-module/1-task/categories.js";

import StepSlider from "../../7-module/4-task/index.js";
import ProductsGrid from "../../8-module/2-task/index.js";

import CartIcon from "../../8-module/1-task/index.js";
import Cart from "../../8-module/4-task/index.js";

export default class Main {
  constructor() {}

  async render() {
    let carouselHolder = document.querySelector("[data-carousel-holder]");
    let ribbonHolder = document.querySelector("[data-ribbon-holder]");
    let stepHolder = document.querySelector("[data-slider-holder]");
    let cartIconHolder = document.querySelector("[data-cart-icon-holder]");
    let productsGridHolder = document.querySelector(
      "[data-products-grid-holder]"
    );
    let nutsCheckbox = document.getElementById("nuts-checkbox");
    let vegeterianCheckbox = document.getElementById("vegeterian-checkbox");

    const carousel = new Carousel(slides);
    const ribbonMenu = new RibbonMenu(categories);
    const stepSlider = new StepSlider({
      steps: 5,
      value: 3,
    });
    const cartIcon = new CartIcon();
    const cart = new Cart(cartIcon);

    carouselHolder.append(carousel.elem);
    ribbonHolder.append(ribbonMenu.elem);
    stepHolder.append(stepSlider.elem);
    cartIconHolder.append(cartIcon.elem);

    const promise = await fetch("products.json").then((response) =>
      response.json()
    );

    productsGridHolder.innerHTML = "";

    const productsGrid = new ProductsGrid(promise);
    productsGridHolder.append(productsGrid.elem);

    productsGrid.updateFilter({
      noNuts: document.getElementById("nuts-checkbox").checked,
      vegeterianOnly: document.getElementById("vegeterian-checkbox").checked,
      maxSpiciness: stepSlider.value,
      category: categories[0].id,
    });

    let body = document.querySelector("body");

    body.addEventListener("product-add", (event) => {
      let targetProduct = promise.findIndex((item) => item.id === event.detail);
      cart.addProduct(promise[targetProduct]);
    });

    stepHolder.addEventListener("slider-change", (event) => {
      productsGrid.updateFilter({
        maxSpiciness: event.detail,
      });
    });

    ribbonHolder.addEventListener("ribbon-select", (event) => {
      productsGrid.updateFilter({
        category: event.detail,
      });
    });

    nutsCheckbox.addEventListener("change", () => {
      productsGrid.updateFilter({
        noNuts: nutsCheckbox.checked,
      });
    });

    vegeterianCheckbox.addEventListener("change", () => {
      productsGrid.updateFilter({
        vegeterianOnly: vegeterianCheckbox.checked,
      });
    });
  }
}
