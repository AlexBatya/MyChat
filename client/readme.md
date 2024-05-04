# Миничатик RealTime чатик

# КОД

```
import React, { useRef, useState } from 'react';
import "../styles/main.styles.scss"

const Main: React.FC = () => {
	const [messages, setMessages] = useState<any[]>([]);
	const [value, setValue] = useState('');
	const socket = useRef<WebSocket | null>(null); // Указываем тип для ref
	const [connected, setConnected] = useState(false);
	const [username, setUsername] = useState('');

  function connect() {
  	socket.current = new WebSocket('ws://localhost:5000');

		socket.current.onopen = () => {
			setConnected(true);
			const message = {
				event: 'connection',
				username,
			};
			socket.current!.send(JSON.stringify(message));
		};

		socket.current.onmessage = (event) => {
			const message = JSON.parse(event.data);
			setMessages((prev) => [message, ...prev]);
		};

		socket.current.onclose = () => {
			console.log('Socket закрыт');
		};

		socket.current.onerror = () => {
			console.log('Socket произошла ошибка');
		};
	}

	const sendMessage = async () => {
		const message = {
			username,
			message: value,
			event: 'message',
		};
		if (socket.current) {
			socket.current.send(JSON.stringify(message));
		}
		setValue('');
	};

	if (!connected) {
		return (
			<div className="center">
				<div className="form">
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder="Введите ваше имя"
					/>
					<button onClick={connect}>Войти</button>
				</div>
			</div>
		);
	}

	return (
		<div className="center">
			<div>
				<div className="form">
					<input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
					<button onClick={sendMessage}>Отправить</button>
				</div>
				<div className="messages">
					{messages.map((mess: any) => (
						<div>
							{mess.event === 'connection' ? (
									<div className="connection_message">Пользователь {mess.username} подключился</div>
							) : (
									<div className="message">
											{mess.username}. {mess.message}
									</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);

};

export default Main;   

```
