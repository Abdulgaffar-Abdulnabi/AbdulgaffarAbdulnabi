document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".btn");
  
    buttons.forEach(function(button) {
      button.addEventListener("mouseenter", function() {
        button.style.borderColor = "#ff0000"; // Butonun kenarlık rengini kırmızı yap
      });
  
      button.addEventListener("mouseleave", function() {
        button.style.borderColor = "#007bff"; // Butonun kenarlık rengini mavi yap
      });
    });
  });