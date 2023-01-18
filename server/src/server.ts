import Fastify from 'fastify'  // Imports in JS are so weird
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'; '@fastify/cors'
// Is it 'cors' or 'fastifyCors'?

const app = Fastify();  // Instatiating the object
const prisma = new PrismaClient();

// app.register(fastifyCors, {
//     origin: ['http://localhost:3000']
// })
// Learn more of how CORS actually work
app.register(cors);


/* The .get() method receives two positional args, 
* The route (e.g., '/')
* A function -- But what does this function is supposed to do?
* All this does is set the route '/' to the page 
* rendered by the annonymous function, which returns "Hello World!"
*/ 
app.get('/', ()=>{
    return "Hello NLW!"
});

app.get('/find-one-element', ()=>{
    let habit = prisma.habit.findMany({
        where: {
            title: {
                startsWith: "Drink"
            }
        }
    });

    return habit
})

app.get('/find-multiple-elements-no-sync-await', ()=>{
    let habit = prisma.habit.findMany();
    
    return habit
})

app.get('/find-all-elements-using-async-await', async () => {
    let habit = await prisma.habit.findMany();

    return habit
})




/* To make it clear,
* The HTTP verbs we are going to use are
* GET (getting data, via browser), 
* POST (creating new data), 
* PUT (updating a piece of data entirely), 
* PATCH (updating part of an entry), and 
* DELETE (deleting, removing an entry)
*
* As for the database, we will be using an ORM called Prisma
*/

/* The .listen() method receives data as input
*/
app.listen({
    port: 3333
}).then(()=>{
    console.log("HTTP Server is running");
})