let votos = { bueno: 0, regular: 0, malo: 0 };

function enviar() {
  let seleccion = document.querySelector('input[name="opinion"]:checked');
  if (seleccion) {
    votos[seleccion.value]++;
    alert("¡Gracias por su opinión!");
  } else {
    alert("Por favor seleccione una opción.");
  }
}

function verResultados() {
  let total = votos.bueno + votos.regular + votos.malo;
  if (total === 0) {
    document.getElementById("resultados").innerHTML = "Aún no hay votos.";
    return;
  }

  let pBueno = ((votos.bueno / total) * 100).toFixed(2);
  let pRegular = ((votos.regular / total) * 100).toFixed(2);
  let pMalo = ((votos.malo / total) * 100).toFixed(2);

  document.getElementById("resultados").innerHTML = `
    Bueno: ${pBueno}% <br>
    Regular: ${pRegular}% <br>
    Malo: ${pMalo}%
  `;
}
