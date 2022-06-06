'use strict';
import { events } from './src/interfaces/iThought.interface';
// @ts-ignore
import perception from './src/interfaces/perception.interface.ts'
import { eventsUp } from './src/processes/iThought.process';
// @ts-ignore
import { intrusive } from "./src/processes/iThought.process.ts";

// Mind variables
let thoughts: string[] = [
    '¿Cómo irán las criptos?',
    'Empieza a hacer calor',
    'Tengo que acabar esa función...',
    '¿Qué hago para cenar?',
    '¿Escribo un libro?'
]

// Mind function
function mind(){
    for (let i = 0; i < thoughts.length; i++) {
        setTimeout(function(){
            var rndm = Math.floor(Math.random()*5);
            if(rndm == 3){
                eventsUp()
            }
            console.log(thoughts[i]) },
            1000 * i);
    }
    /** Tu mente está running y emerge un extInput, que está relacionado con una obsesión. extInput es filtrado por perception().
    * perception() determina si será goodInput o badInput y entonces llama a la obsesión.
    */
}

mind();