// @ts-ignore
import { obsessions } from "./iObsession.interface.js"


// Cada evento llama a unos iThoughts concretos.
export enum events {
    LOSSTRADE = 'Fuck! I lost $500',
    FINISHED = 'I have finally finished this project!',
    WRONGMINDSET = 'Ooh, I cannot believe that I amm listening from this person...',
}

// Intrusive Thoughts => iThought
export const iThought = {
    fromObs: obsessions,
    iThoughtsList: [
        'Tengo que mirar criptos para tener más ingresos',
        '¡Bien! Voy mejorando, en breves entro en alguna empresa chula',
        'Venga, que vamos por buen camino.',
        'Mierda que no llego, joder',
        '¡¡¡ Solamente faltan 5min !!!'
    ]
}

export default { events, iThought }