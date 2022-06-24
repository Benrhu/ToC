// @ts-ignore
import { events } from "../interfaces/iThought.interface.ts";
// @ts-ignore
import { iThoughtsList } from "../interfaces/iThought.interface.ts";

// Función que imprime los iThoughts
export const intrusive = () => {

    let rndm = Math.floor(Math.random() * 5);
    
    let rndmThought = Object.values(iThoughtsList);

    setInterval(() => {
        console.log(
            `--> ${rndmThought[Math.floor(Math.random() * rndmThought.length)]} <--`
        );
      }, 800);
}

export const eventUp = (events: events) => {
        const rndm = Math.floor(Math.random()*5);
        let rndmEvent = Object.values(events);
        console.log(`** ${Math.floor(Math.random() * rndmEvent.length)} **`);
            if(rndm == 3){
                intrusive()
            }
}


export default { intrusive }