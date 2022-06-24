'use strict';

/**
 * The mind is constantly thinking {thoughts}, all right.
 * Sometimes, an {event} happens and triggers a series of {intrusive thoughts} related to an {obsessions}.
 * 
 * Laws:
 * + An obsession takes more than 90% of attention.
 * + An obsession has the highest priority in your life or the context.
 * + Then, it's very easy to get distracted with another things.
 * + An obsession can paralize you, if you accept some ideas as the truth.
 * + An obsession can give you a dilemma, when you've to choose between differents options ande each other have a reality consecuence which can hurt the another reality.
 * + This occurs when getting two or more things at the same time.
 * 
 */

let thoughts: string[] = [
    '¿Cómo irán las criptos?',
    '¿Voy a la playa?',
    '¡El BTC ha subido!',
    'El BTC ha bajado!',
    'Empieza a hacer frío...',
    'Tengo que accabar de desarrollar ese proyecto',
    '¿Qué hago para cenar?',
    '¿Escribo un libro?'
]

function think() {
    for (let i = 0; i < thoughts.length; i++) {
        setTimeout(function(){
            /* var rndm = Math.floor(Math.random()*5);
            if(rndm == ){
            } */
            console.log(thoughts[i]) },
            800 * i);
    }   
}

function mind() {
    think();
}

mind();