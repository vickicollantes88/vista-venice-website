// Fade-in animation on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.style.opacity = 1;
entry.target.style.transform = "translateY(0)";
}
});
});

cards.forEach(card => {
card.style.opacity = 0;
card.style.transform = "translateY(40px)";
card.style.transition = "0.8s ease";
observer.observe(card);
});

// ================= LIGHTBOX =================
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = item.src;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
