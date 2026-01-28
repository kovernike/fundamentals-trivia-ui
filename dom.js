import { API_CATEGORIES } from "./constants.js";
import {
  setTrivalQuestions,
  questions,
  setCategory,
  category,
} from "./data.js";

const categoryInput = document.getElementById("category-input");
const sumitCategoryButton = document.getElementById("submit-category");
const mainContainer = document.getElementById("mainContainer");

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

sumitCategoryButton.onclick = async () => {
  const categoryId = categoryInput.value;
  if (!categoryId) return;

  await setTrivalQuestions(categoryId);

  setCategory(categoryId);

  showQuestionView(0);
};

export function showQuestionView(questionIndex) {
  const { correct_answer, question, incorrect_answers } =
    questions[questionIndex];

  const Options = [correct_answer, ...incorrect_answers].sort();

  console.log(Options);

  mainContainer.innerHTML = `
  <h1 class="title">${category.title} #${questionIndex + 1}</h1>
      <span class="category-icon">${category.image}</span>
      <p class="question">
        ${question}
      </p>
      <form id="form-0">
        <fieldset>
          <label class="radio-field">
            <input type="radio" name="name" />
            Option 1
          </label>
          <label class="radio-field">
            <input type="radio" name="name" />
            Option 2
          </label>
          <label class="radio-field">
            <input type="radio" name="name" />
            Option 3
          </label>
          <label class="radio-field">
            <input type="radio" name="name" />
            Option 4
          </label>
        </fieldset>
        <button>Submit</button>
      </form>
  `;
}

showCategoriesView();
