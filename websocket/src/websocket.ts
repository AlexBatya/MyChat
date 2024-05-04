const ws = require('ws');
import cors from 'cors';
import color from 'colors';
import db from './db'

const PORT: number = 5000;

const wss: any = new ws.Server({
  port: PORT,
}, () => console.log(color.green(`WebSocket запущен на порту ${PORT}, батеньки...`)))


wss.on('connection', function connection(ws: any, req: any) {

	ws.send("Пользователь подключился через websocket");
	console.log('Пользователь подключился через websocket')

	ws.on('message', function (message: any) {
		message = JSON.parse(message)

		switch (message.event) {

			case 'message':
				broadcastMessage(message)
				break;
			case 'connection':
				broadcastMessage(message)
				break;
		}

	})

})


// широковещательная рассылка
function broadcastMessage(message: any) {
	wss.clients.forEach((client: any) => {
		client.send(JSON.stringify(message))
	})
}
