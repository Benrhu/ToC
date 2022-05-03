// @ts-ignore
import { iThoughts } from "./iThought.interface.ts"

export const goodBadFilter = () => {
    if(iThoughts.giveProgress){ console.log('[Bad thought]') }
    else{ console.log('[Good thought]') }
}