function aleatorio (min, max) {
    return Math.floor( Math.random() * (max - min + 1)+ min)

}

function eleccion (jugada){

    let resultado = ""
    if (jugada == 1) {
            resultado= "Piedra ✊"  
    } else if (jugada == 2) {
            resultado= "papel 📄"
    } else if (jugada == 3) {
            resultado= "tijera  ✂️"
    } else {
            resultado = "Mala eleccion"
            
    }

    return  resultado
}
//Aletoriedad de pc

//Escoje jugador
let jugador = 0
let pc = aleatorio (1 , 3)
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){

    jugador = parseInt( prompt("Elije: 1 para piedra, 2 para papel y 3 para tijera"))

    alert("PC elige: " + eleccion(pc))
    alert("jugador elige:" + eleccion(jugador) )
 

    // JUGADOR EMPATA
    if (pc == jugador) {
        alert("EMPATE")
    }


//JUGADOR GANA 

    else if (jugador == 1 && pc == 3) {
            alert("TU GANAS")
            triunfos = triunfos +1

    } else if (jugador == 2 && pc == 1) {
            alert("TU GANAS")
            triunfos = triunfos +1

    } else if (jugador == 3 && pc == 2) {
            alert("TU GANAS")
            triunfos = triunfos +1
        }

// PC GANA

    else {
            alert("PC GANA")
            perdidas = perdidas + 1
        }
        



}

alert("Ganaste: " + triunfos + " veces. Perdiste: " +  perdidas + " veces")

// se tienen funciones y bucles 