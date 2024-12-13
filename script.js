document.getElementById("ctaButton").addEventListener("click", function() {
    alert("Thank you for your interest! We'll take you to the shop page soon.");
  });
 
  const buyButtons = document.querySelectorAll(".product-btn");
  buyButtons.forEach(button => {
    button.addEventListener("click", function() {
      alert("Item added to your cart.");
    });
  });
 



