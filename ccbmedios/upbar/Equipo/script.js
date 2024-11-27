document.addEventListener('DOMContentLoaded', function () {
  const modoBtn = document.getElementById('modoBtn');
  const body = document.body;

  // Verifica la preferencia del usuario al cargar la página
  if (localStorage.getItem('modo') === 'oscuro') {
    activarModoOscuro();
  }

  // Funciones para cambiar entre modos
  function activarModoOscuro() {
    body.classList.add('dark-mode');
    localStorage.setItem('modo', 'oscuro');
  }

  function desactivarModoOscuro() {
    body.classList.remove('dark-mode');
    localStorage.setItem('modo', 'claro');
  }

  // Escucha el evento de clic en el botón
  modoBtn.addEventListener('click', function () {
    // Cambia entre modos
    if (body.classList.contains('dark-mode')) {
      desactivarModoOscuro();
    } else {
      activarModoOscuro();
    }
  });
});
