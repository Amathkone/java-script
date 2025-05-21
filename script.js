document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  
  document.getElementById("confirmation").style.display = "block";

  this.reset();
});







const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
