const toggle = document.getElementById("toggle");
const circle = document.getElementById("circle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  circle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    circle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    circle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
