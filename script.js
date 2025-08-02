// script.js avanzado

// Slider automático let currentSlide = 0; const slides = document.querySelectorAll(".slide");

function showSlide(index) { slides.forEach((slide, i) => { slide.classList.remove("active"); if (i === index) { slide.classList.add("active"); } }); }

setInterval(() => { currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); }, 4000);

// Filtrar productos por categoría function filtrar(categoria) { const productos = document.querySelectorAll(".producto"); productos.forEach(producto => { if (categoria === "todos") { producto.style.display = "block"; } else { producto.style.display = producto.classList.contains(categoria) ? "block" : "none"; } }); }

// Formulario de contacto const formulario = document.getElementById("formulario-contacto"); const mensajeExito = document.getElementById("mensaje-exito");

formulario.addEventListener("submit", function(e) { e.preventDefault(); mensajeExito.style.display = "block"; formulario.reset(); setTimeout(() => mensajeExito.style.display = "none", 5000); });

