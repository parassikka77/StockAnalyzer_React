import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/months";

export function getMonths() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
/*
export function saveproduct(product) {
  return fetch(baseUrl + (product.id || ""), {
    method: product.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteproduct(productId) {
  return fetch(baseUrl + productId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
*/
