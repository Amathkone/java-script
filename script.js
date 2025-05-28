const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});



particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#00ffff" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" }
      },
      "opacity": { "value": 0.5, "random": false },
      "size": { "value": 3, "random": true },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00ffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": { "opacity": 1 }
        },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  }
);

const toggleBtn = document.getElementById("themeToggle");

function setTheme(mode) {
  if (mode === "light") {
    document.documentElement.style.setProperty("--bg-color", "#f0f0f0");
    document.documentElement.style.setProperty("--text-color", "#111");
    document.documentElement.style.setProperty("--accent-color", "#0077ff");
    toggleBtn.textContent = "☀️";
  } else {
    document.documentElement.style.setProperty("--bg-color", "#000");
    document.documentElement.style.setProperty("--text-color", "#fff");
    document.documentElement.style.setProperty("--accent-color", "#00ffff");
    toggleBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

// Appliquer le thème au chargement de la page
setTheme(localStorage.getItem("theme") || "dark");

particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
