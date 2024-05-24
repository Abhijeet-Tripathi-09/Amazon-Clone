let productImg = document.querySelector("#productImg");
let btn = document.querySelectorAll(".btn");
let red = document.querySelector(".color-1")
let add_to_cart = document.querySelector("#add-to-cart")

btn[0].onclick = function(){
  productImg.src = "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg";

  for(bt of btn){
    bt.classList.remove("active")
  }
  this.classList.add("active")
}
btn[1].onclick = function(){
  productImg.src = "https://m.media-amazon.com/images/I/712CBkmhLhL._SX679_.jpg";
  for(bt of btn){
    bt.classList.remove("active")
  }
  this.classList.add("active")
}
btn[2].onclick = function(){
  productImg.src = "https://m.media-amazon.com/images/I/613xywt-yvL._SX679_.jpg";
  for(bt of btn){
    bt.classList.remove("active")
  }
  this.classList.add("active")
}


// Add To Cart
add_to_cart.onclick = function(){
  alert("Your Product Added To Cart")
}