document.addEventListener("DOMContentLoaded", () => {
  new Typed("#typed", {
    strings: ["Sơn Vũ", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });

  document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("show");
  });

  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("#nav-menu a");
  window.addEventListener("scroll", () => {
    let pos = window.scrollY + window.innerHeight / 3;
    sections.forEach((sec) => {
      if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach((a) => a.classList.remove("active"));
        const cur = document.querySelector(`#nav-menu a[href="#${sec.id}"]`);
        if (cur) cur.classList.add("active");
      }
    });
  });

  document.getElementById("download-cv").addEventListener("click", () => {
    window.open("assets/CV_TenBan.pdf", "_blank");
  });

  const darkBtn = document.getElementById("dark-toggle");
  darkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    darkBtn.textContent = document.documentElement.classList.contains(
      "dark-mode"
    )
      ? "☀️"
      : "🌙";
  });
});
