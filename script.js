// script.js avanzado con interactividad profesional estilo Maybelline

// Slider automático con controles
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlideFunc() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn?.addEventListener("click", nextSlide);
prevBtn?.addEventListener("click", prevSlideFunc);

let slideInterval = setInterval(nextSlide, 5000);

// Pausar al interactuar
const slider = document.querySelector(".slider");
slider?.addEventListener("mouseenter", () => clearInterval(slideInterval));
slider?.addEventListener("mouseleave", () => slideInterval = setInterval(nextSlide, 5000));

// Filtrar productos por categoría
function filtrar(categoria) {
  const productos = document.querySelectorAll(".producto");
  productos.forEach(producto => {
    if (categoria === "todos") {
      producto.style.display = "block";
    } else {
      producto.style.display = producto.classList.contains(categoria) ? "block" : "none";
    }
  });
}

// Formulario de contacto con validación
const formulario = document.getElementById("formulario-contacto");
const mensajeExito = document.getElementById("mensaje-exito");

formulario?.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = formulario.querySelector("input[type='text']").value.trim();
  const correo = formulario.querySelector("input[type='email']").value.trim();
  const mensaje = formulario.querySelector("textarea").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor completa todos los campos correctamente.");
    return;
  }

  mensajeExito.style.display = "block";
  formulario.reset();
  setTimeout(() => mensajeExito.style.display = "none", 5000);
});

// Scroll suave
const links = document.querySelectorAll("nav a");
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});
