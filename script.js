// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});


// Close Hamburger Menu After Click
document.querySelectorAll(".menu-items a").forEach(link => {
  link.addEventListener("click", () => {
    const checkbox = document.getElementById("checkbox");
    if (checkbox) {
      checkbox.checked = false;
    }
  });
});
