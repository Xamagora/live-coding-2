// API
const API_ENDPOINT = 'https://yesno.wtf/api';

async  function fetchAnswer (){

    try {
        const response = await fetch(API_ENDPOINT); //se linkea la Api
        const data = await response.json(); //Trabajar los datos de ls data
        mostrarRespuesta((data.answer));
        console.log(data);
    }catch(err){
        console.log(err); 
    }

}
function mostrarRespuesta(answer){
    const divAnswer = document.getElementById("answer"); //Se crea una constante para la división con id "answer"
    divAnswer.textContent = answer; //Para establecer contenido de texto
    //Limpia la pregunta y la respuesta despues de 5 segundos.
    //Para ello utilizamos setTimeOut
    setTimeout(()=>{
        answerDiv.textContent=" "; // " " para limpiar campos
        document.getElementById("input").value= " "; // " "Para limpiar
    }, 5000 );
}
fetchAnswer();//Llamar la función 

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
