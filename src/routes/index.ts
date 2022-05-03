// @ts-ignore
import { Router } from 'https://deno.land/x/oak/mod.ts'

const router: Router = new Router()

router
    .get('/', (res) => {
        res.response.body = 'This is my message :)'
    })

export default router