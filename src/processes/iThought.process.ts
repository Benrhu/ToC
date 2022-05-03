// @ts-ignore
import { iThoughts } from "../interfaces/iThought.interface.ts"
// @ts-ignore
import { iThoughtsList } from "../interfaces/iThought.interface.ts"


export function intrusive() {
        let ran = Math.floor(Math.random()*iThoughtsList.length)
        return iThoughts.iThoughtsList[ran];
}

export default intrusive