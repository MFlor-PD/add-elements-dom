 // Aquí tu código

const agregarLista = document.getElementById('lista');
const botonAgregar = document.getElementById('agregar');
botonAgregar.addEventListener('click', function() {
  let elemento = prompt('AGREGA ELEMENTOS A LA LISTA');
 if (elemento) {
  agregarLista.innerHTML += `<li>${elemento}</li>`;
 }  else {
   alert('DEBES ESCRIBIR UN ELEMENTO');
 }
});


