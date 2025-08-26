// 🌌 Starfield Background
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0ff";
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function updateStars() {
  for (let star of stars) {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
}

function animateStars() {
  drawStars();
  updateStars();
  requestAnimationFrame(animateStars);
}

animateStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 🌗 Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// 🚀 GSAP + ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Header animation
gsap.from("header", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "header",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// About section
gsap.from("#about .card", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Skills section
gsap.from("#skills .skill", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Projects section
gsap.from(".project-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Contact section
gsap.from("#contact .card", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// 💼 VanillaTilt for project cards
VanillaTilt.init(document.querySelectorAll(".project-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});
