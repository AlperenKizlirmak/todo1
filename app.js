const taxRate = 0.18;
const shippingPirce = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
 localStorage.setItem("taxRate", taxRate)
 localStorage.setItem("shippingPrice", shippingPrice)
 localStorage.setItem("shippingFreePrice", shippingFreePrice)

 sessionStorage.setItem("taxRate", taxRate)
 sessionStorage.setItem("shippingPrice", shippingPrice)
 sessionStorage.setItem("shippingFreePrice", shippingFreePrice)
  
 const productsDiv = document.querySelector(".products");

 productsDiv.addEventListener("click", (event) => {
  if(event.target.className == "fa-solid fa-minus") {
  if(event.target.parentElement.querySelector(".quantiy").innerText > 1)
  event.target.parentElement.querySelector(".quantiy")
  }else if(event.target.className == "fa-solid fa-plus"){
  

  } else if(event.target.className == "remove-product"){

  }


 });




});