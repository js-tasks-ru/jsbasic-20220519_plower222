import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = this.create();
  }

  create() {
    let newCards = this.cards();
    let productGridInner = this.tempalate();

    newCards.map((element) => {
      productGridInner.append(element.elem);
    });

    let productGrid = createElement(`<div class="products-grid"></div>`);

    productGrid.append(productGridInner);

    return productGrid;
  }

  tempalate() {
    let element = createElement(`
    <div class="products-grid__inner">
    </div>`);
    return element;
  }

  cards() {
    let cards = this.products.map((element) => {
      return new ProductCard(element);
    });
    return cards;
  }

  updateFilter(filters) {
    let filteredMenu = this.tempalate();
    let arrayTemp = this.cards();

    this.filters = Object.assign(this.filters, filters);

    if (this.filters.category) {
      console.log("зашел в фильтр Категории");
      arrayTemp = arrayTemp.filter(
        (item) => item.product.category === this.filters.category
      );
    }

    if (this.filters.noNuts === true) {
      console.log("зашел в фильтр Без орехов");
      arrayTemp = arrayTemp.filter(
        (item) =>
          !item.product.hasOwnProperty("nuts") || item.product.nuts === false
      );
    }

    if (this.filters.vegeterianOnly === true) {
      console.log("зашел в фильтр Вег");
      arrayTemp = arrayTemp.filter(
        (item) => item.product.vegeterian === this.filters.vegeterianOnly
      );
    }

    if (this.filters.hasOwnProperty("maxSpiciness")) {
      console.log("зашел в фильтр Остроты");
      arrayTemp = arrayTemp.filter(
        (item) => item.product.spiciness <= this.filters.maxSpiciness
      );
    }

    arrayTemp.map((element) => {
      filteredMenu.append(element.elem);
    });

    let tempFilteredMenu = this.tempalate();
    tempFilteredMenu.append(filteredMenu);

    this.elem.innerHTML = tempFilteredMenu.innerHTML;
  }
}
