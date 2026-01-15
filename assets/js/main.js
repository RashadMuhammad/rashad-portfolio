document.querySelectorAll("[data-target]").forEach(el => {
  el.addEventListener("click", () => {
    const targetId = el.getAttribute("data-target");
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile menu
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) navMenu.classList.remove("show");
  });
});
