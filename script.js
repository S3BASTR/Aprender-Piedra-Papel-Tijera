function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra ✊";
    } else if (jugada == 2) {
        resultado = "papel 📄";
    } else if (jugada == 3) {
        resultado = "tijera  ✂️";
    } else {
        resultado = "Mala eleccion";
    }
    return resultado;
}

function ganar(pc, jugador, triunfos, perdidas) {
    // JUGADOR EMPATA
    if (pc == jugador) {
        alert("EMPATE");
    }
    // JUGADOR GANA
    else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("TU GANAS");
        triunfos++;
    }
    // PC GANA
    else {
        alert("PC GANA");
        perdidas++;
    }
    return [triunfos, perdidas]; // Devolvemos los valores actualizados de triunfos y perdidas
}
// SE UTILIZAN COMO DATOS GLOBALES POR QUE 
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
    let jugador = parseInt(prompt("Elije: 1 para piedra, 2 para papel y 3 para tijera"));
    let pc = aleatorio(1, 3);

    alert("PC elige: " + eleccion(pc));
    alert("jugador elige:" + eleccion(jugador));

    // Llamamos a la función ganar() y actualizamos los valores de triunfos y perdidas
    [triunfos, perdidas] = ganar(pc, jugador, triunfos, perdidas);
}

alert("Ganaste: " + triunfos + " veces. Perdiste: " + perdidas + " veces");
