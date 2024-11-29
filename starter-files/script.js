// API
const API_ENDPOINT = 'https://yesno.wtf/api';

async  function fetchAnswer (){

    try {
        // const response = await fetch('https://yesno.wtf/api'); durante el live coding lo vincule mal 
        const response = await fetch(API_ENDPOINT); //se linkea la Api
        const data = await response.json(); //Trabajar los datos de ls data
        mostrarRespuesta((data.answer)); //Durante el live coding se me olvido mandarlo a llamar
        console.log(data);
    }catch(err){
        console.log(err); //mensaje de error si no lo encuentra
    }

}
function mostrarRespuesta(answer){
    const divAnswer = document.getElementById("answer"); //Se crea una constante para la división con id "answer"
    divAnswer.textContent = answer; //Para establecer contenido de texto
    //Limpia la pregunta y la respuesta despues de 5 segundos.
    //Para ello utilizamos setTimeOut
    setTimeout(()=>{ //no lo pude acompletar durante el live coding
        answerDiv.textContent=" "; // " " para limpiar campos
        document.getElementById("input").value= " "; // " "Para limpiar
    }, 5000 );// tiempo
}
fetchAnswer();//Llamar la función (durante el live coding no lo había mandado a llamar )

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
