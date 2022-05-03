// @ts-ignore
import { Application } from 'https://deno.land/x/oak/mod.ts'
// @ts-ignore
import router from '../routes/index.ts';

const app: Application = new Application();
const PORT = 8000

app.use('/', router)
console.log(`Server listening on port ${PORT}, URL: http://localhost:8000/`)
app.listen({port: PORT})