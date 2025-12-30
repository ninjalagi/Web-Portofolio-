// LOADING
window.onload = () => {
  document.getElementById("loading").style.display = "none";
}

// HAMBURGER
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// DARK MODE
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
}

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
    alert("Pesanan berhasil dikirim!");
    this.reset();
  }, () => {
    alert("Gagal mengirim pesan.");
  });
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
gsap.from(".hero h1", {
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  delay: 0.3
});
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8
  });
});
emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
  from_name: name.value,
  service: service.value,
  email: email.value,
  message: message.value
});