
// Cada evento llama a unos iThoughts concretos.
export enum events {
    LOSSTRADE = 'Fuck! I lost $500',
    FINISHED = 'I have finally finished this project!',
    WRONGMINDSET = 'Ooh, I cannot believe that I amm listening from this person...',
}

// Intrusive Thoughts => iThought
export const iThoughtsList = {
    criptos: 'Tengo que mirar criptos para tener más ingresos',
    dinero: 'Esta oportunidad me parece muy importante',
    progreso: 'Venga, que vamos por buen camino.',
    tiempo: 'Mierda que no llego, joder',
    invierno: 'Ya empieza a venir el frío',
}

export default { events, iThoughtsList }