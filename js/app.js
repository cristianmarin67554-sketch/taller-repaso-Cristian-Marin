// 1. Selección de elementos
const botonTema = document.getElementById('btn-tema');
const cuerpoPagina = document.body;

// 2. Escuchador de eventos
botonTema.addEventListener('click', function() {
  // Alterna la clase en el body
  cuerpoPagina.classList.toggle('dark-theme');

  // Cambia el texto del botón según el estado
  if (cuerpoPagina.classList.contains('dark-theme')) {
    botonTema.textContent = '☀️ Claro';
  } else {
    botonTema.textContent = '🌙 Oscuro';
  }
});