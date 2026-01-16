import { BASE_URL } from "./constants.js";

let category;
const questions = [];

export async function getTriviaQuestions(categoryId) {
  const endpoint = `${BASE_URL}&category=${categoryId}`;

  const response = await fetch(endpoint);

  const json = await response.json();

  return json.results;
}

export async function setTrivalQuestions(categoryId) {
  const results = await getTriviaQuestions(categoryId);

  questions.push(...results);
}
