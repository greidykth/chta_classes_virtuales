import {Server as WebSocketServer} from 'socket.io';
import http from 'http';
import express from 'express';
import usersRoutes from './routes/users.routes.js';
import messagesRoutes from './routes/messages.routes.js';
import onlineClassesRoutes from './routes/onlineClasses.routes.js';
import { sequelize } from './database/database.js';
import cors from 'cors';
import OnlineClass from './models/OnlineClass.js';

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(cors()); // habilita CORS para todas las solicitudes

//middlewares
app.use(express.json());

app.use(usersRoutes);
app.use(messagesRoutes);
app.use(onlineClassesRoutes);

io.on('connection', socket => {
    console.log('new connection', socket.id); 
    let i = 1
    setInterval(() => {
        socket.emit('message', "mensaje " + i++);
    }, 10000);
    socket.on("response", (args) => {
        console.log("respuesta",args);
    })
});

const port = process.env.REACT_APP_SERVER_PORT ? process.env.REACT_APP_SERVER_PORT : 8000;

async function main() {
    try {
        await sequelize.sync({force: false});
        let class1 = await OnlineClass.create({
            name: "Clase de prueba",
            description: "Matematica",
            active: "ACTIVE",
            url: "https://www.youtube.com/watch?v=adW9o-3uwrE&t=3s&ab_channel=KuepaEdutech"
        })
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        })
    } catch (error) {
        console.error("Unable to connect",error);
    }
}

main();


