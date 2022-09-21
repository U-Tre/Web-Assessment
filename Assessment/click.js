// test javascript
// document.querySelector(".myButton").addEventListener("click",myFunction)

// function myFunction() {
//     alert("Hi");
//   };

// get the modal
var modal = document.getElementById("myModal");
// click icon opens the modal
document.querySelector(".shopping-cart-icon").addEventListener("click",modalFunction);

function modalFunction() {
    modal.style.display = "block";

};

// click close modal and reduce write function
document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
});

// click anywhere outside of the modal then close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// test click order
var numberOfOrderButton = document.querySelectorAll(".myButton").length;

for (let i = 0; i < numberOfOrderButton; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {

        alert("Hello");
    });

    // var object = document.getElementsByClassName("myButton");
    // console.log(object);

    // var productData = document.getElementById("product-06-order");
    // console.log(productData.value);
    
};