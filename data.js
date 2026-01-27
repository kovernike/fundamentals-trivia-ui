import { BASE_URL } from "./constants.js";
import { API_CATEGORIES } from "./constants.js";

export let category;
export let questions = [];

export async function getTriviaQuestions(categoryId) {
  const endpoint = `${BASE_URL}&category=${categoryId}`;

  const response = await fetch(endpoint);

  const json = await response.json();

  return json.results;
}

export async function setTrivalQuestions(categoryId) {
  const results = await getTriviaQuestions(categoryId);

  questions = results;
}

export function setCategory(categoryId) {
  const selecCategorry = API_CATEGORIES.find(
    (category) => category.id.toString() === categoryId,
  );
  category = selecCategorry;
}
