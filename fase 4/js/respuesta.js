function procesarRespuestas(){   // mi función 
    let total = 5               // total de preguntas
    let puntos = 0;             // inicializo los puntos en cero

    let myForm = document.forms["evaluacionSelectores"];                 // creo una variable que apunte al formulario (se llama evaluacion_Selectores)
    let respuestasCorrectas = ["b", "c", "a", "c", "b"];      // en esta variable, alojo las respuestas correctas de las 5 preguntas

    for (let i =1; i <= total; i++){                // el ciclo for para recorrer los elementos del arreglo, donde la variable 'i' inicia en 1 y va hasta <n, sumando de 1 en las respuestas.
        if (myForm["r" + i].value == null ||        // si el cuestionario es respondido de forma incompleta
            myForm["r" + i].value == '') {          // o el cuestionario no lo respondieron 
            alert('Favor responder todas las preguntas'); // mensaje 
            return false;
        } else {
            if (myForm["r" + i].value === respuestasCorrectas[i -1])
                puntos++;
        }
    }
    let resul = document.getElementById('resul')
    resul.innerHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ';
    return false;
}