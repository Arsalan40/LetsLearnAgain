const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const productInput = document.querySelector("#product");
  const qtyInput = document.querySelector("#qty");
  const product = productInput.value;
  const qty = qtyInput.value;

  if (product && qty) {
    const listItem = document.createElement("li");
    listItem.textContent = `${qty} ${product}`;

    list.appendChild(listItem);

    productInput.value = "";
    qtyInput.value = "";
  }
});
