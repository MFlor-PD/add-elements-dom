 // Aquí tu código
const agregarLista = document.getElementById('lista');
const botonAgregar = document.getElementById('agregar');

botonAgregar.addEventListener(click, function() {
  let elemento = prompt('AGREGA ELEMENTOS A LA LISTA');
  let li = document.createElement('li');
  li.textContent = elemento;
  agregarLista.appendChild(li);
}
