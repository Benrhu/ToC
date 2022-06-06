// @ts-ignore
import { obsessions } from "./iObsession.interface.ts"


// Cada evento llama a unos iThoughts concretos.
export enum events {
    NEWCRYPTO = 'Ohhh!! A new crypto launched!',
    FINISHED = 'I finished the exercise started 3 days ago already!',
    ANGELS = 'Ohhh, 11:22am, an angel message :)'
}


export const iThoughts = {
    on: false,
    giveProgress: false,
    fromObs: obsessions,
    iThoughtsList: [
        'Tengo que mirar criptos para tener más ingresos',
        '¡Bien! Voy mejorando, en breves entro en alguna empresa chula',
        'Venga, que vamos por buen camino.',
        'Mierda que no llego, joder',
        '¡¡¡ Solamente faltan 5min !!!'
    ]
}

export default { events, iThoughts }