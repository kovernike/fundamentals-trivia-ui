import { API_CATEGORIES } from "./constants.js";

export function showCategoriesView() {
  const categoriesGrid = document.getElementById("categoriesContainer");

  API_CATEGORIES.forEach(({ image, title, id }) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.className = "category__container";
    categoryContainer.setAttribute("data-value", id);

    categoryContainer.innerHTML = `
     <div class="category__image">${image}</div>
     <p class="category__text">${title}</p>`;

    categoriesGrid.append(categoryContainer);
  });
}

showCategoriesView();
