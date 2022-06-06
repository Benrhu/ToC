// @ts-ignore
import iThoughtInterface, { iThoughts, iThoughtsList, events } from "../interfaces/iThought.interface";

// Función que imprime los iThoughts
export function intrusive() {
        let ran = Math.floor(Math.random()*iThoughtsList.length)
        return iThoughts.iThoughtsList[ran];
}

export function eventsUp(events: events) {
        var rndm = Math.floor(Math.random()*5);
            if(rndm == 3){
                let ran = Math.floor(Math.random()*events.length)
            }
}


export default intrusive