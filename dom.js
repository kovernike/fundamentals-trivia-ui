import { API_CATEGORIES } from "./constants.js";

const categoryInput = document.getElementById("category-input");
export function showCategoriesView() {
  const categoriesGrid = document.getElementById("categoriesContainer");

  API_CATEGORIES.forEach(({ image, title, id }) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.className = "category__container";
    categoryContainer.setAttribute("data-value", id);

    categoryContainer.innerHTML = `
     <div class="category__image">${image}</div>
     <p class="category__text">${title}</p>`;

    categoryContainer.onclick = () => {
      if (categoryInput.value) {
        const prevCategorySelected = document.querySelector(
          `.category__container[data-value="${categoryInput.value}"]`,
        );

        prevCategorySelected.classList.remove("category__container-active");
      }

      categoryContainer.classList.add("category__container-active");
      categoryInput.value = id;
    };

    categoriesGrid.append(categoryContainer);
  });
}

showCategoriesView();
