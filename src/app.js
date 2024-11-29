window.onload = function() {
  //write your code here
  let iconos = ["♦", "♥", "♠", "♣"];
  let valor = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let carta = [];
  // organizador aleatorio de la carta
  let aleatorioiconos = Math.floor(Math.random() * iconos.length);
  let aletoriovalor = Math.floor(Math.random() * valor.length);
  // push carta en array vacio
  carta.push(iconos[aleatorioiconos]);
  carta.push(valor[aletoriovalor]);
  let color = "";
  if (carta[0] == "♥") color = "red";
  else if (carta[0] == "♦") color = "red";
  // Generar la carta
  document.querySelector(".card").innerHTML = `
  <div class="iconheader" style="color:${color}" >${carta[0]}</div>
  <div class="value">${carta[1]}</div>
  <div class="iconfooter" style="color:${color}">${carta[0]}</div>
  `;
};
