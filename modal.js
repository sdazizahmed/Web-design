// Modal Elements
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
// Auto-open modal when gallery section comes into view
const gallerySection = document.getElementById("gallery-heading");
let modalOpened = false; // ensure it only happens once

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !modalOpened) {
      modalOpened = true;
      modal.style.display = "flex";
      observer.disconnect(); 
    }
  });
}, { threshold: 0.4 }); 

observer.observe(gallerySection);
