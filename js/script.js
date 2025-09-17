document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById("burgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".header__link");

  const toggleMenu = () => {
    navMenu.classList.toggle("active");
    burgerBtn.classList.toggle("active");
  };

  const closeMenu = () => {
    navMenu.classList.remove("active");
    burgerBtn.classList.remove("active");
  };

  // Відкриття/закриття меню
  burgerBtn.addEventListener("click", toggleMenu);

  // Закриття при кліку на посилання
  navLinks.forEach(link => link.addEventListener("click", closeMenu));

  // Закриття при кліку поза меню
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
      closeMenu();
    }
  });

  

  const popup = document.getElementById("popup");
  const form = document.getElementById("ticketForm");

  // відкрити поп-ап
  document.querySelectorAll(".btn-ticket").forEach(btn =>
    btn.addEventListener("click", () => popup.style.display = "flex")
  );

  // закрити поп-ап (хрестик або клік поза вікном)
  popup.addEventListener("click", e => {
    if (e.target.id === "popup" || e.target.id === "popupClose") {
      popup.style.display = "none";
    }
  });

  // валідація форми
  form.addEventListener("submit", e => {
    const { name, email } = form;
    if (!name.value.trim() || !email.value.trim()) {
      e.preventDefault();
      alert("Будь ласка, заповніть усі поля!");
    }
  });
});



