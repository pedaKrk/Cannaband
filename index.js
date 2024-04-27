if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else ready();

function ready() {
  var purchaseButton = document.getElementsByClassName("purchaseButton")[0];
  var quantityInput = document.getElementsByClassName("quantityInput")[0];

  purchaseButton.addEventListener("click", purchaseClicked);
  quantityInput.addEventListener("change", quantityChanged);
}

function purchaseClicked() {
  var quantityInput = document.getElementsByClassName("quantityInput")[0];

  alert(quantityInput.value + " Cannaband added to cart");
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
}
