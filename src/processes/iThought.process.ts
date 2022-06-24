// @ts-ignore
import { iThoughtsList } from "../interfaces/iThought.interface.ts";

// Función que imprime los iThoughts
export const intrusive = () => {

    let rndm = Math.floor(Math.random() * 5);
    
    let rndmThought = Object.values(iThoughtsList);

    setInterval(() => {
        console.log(
            `intrusive thought: ${rndmThought[Math.floor(Math.random() * rndmThought.length)]}`
        );
      }, 800);
}

/* export function eventsUp(events: events) {
        var rndm = Math.floor(Math.random()*5);
            if(rndm == 3){
                let ran = Math.floor(Math.random()*events.length)
            }
} */


export default { intrusive }