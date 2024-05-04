import React, {useRef, useState} from 'react';
import "../styles/main.styles.scss"
import "../fonts/fonts.scss"

const Main: React.FC<any> = ({setUser}) => {
	// messages -- мы получаем сообщения и меняем их
	const [messages, setMessages] = useState<any[]>([]);

	//Тут мы делаем возможность брать значение из input и менять его 	
	const [value, setValue] = useState('');

	// этоу переменную мы делаем неменяемую от рендера к рендеру
	const socket = useRef<WebSocket | null>(null); // Указываем тип для ref
	const [connected, setConnected] = useState(false);
	const [username, setUsername] = useState('');

  function connect() {
  	socket.current = new WebSocket('ws://localhost:5000');

		// Открыть соединение
		socket.current.onopen = () => {
			setConnected(true);
			const message = {
				event: 'connection',
				username,
			};
			socket.current!.send(JSON.stringify(message));
			setUser(username)
		};

		// отправляем данные о пользователе при подключении
		socket.current.onmessage = (event) => {
			try{
				const message = JSON.parse(event.data);
				setMessages((prev) => [message, ...prev]);
			}
			catch(err){
				console.log(err)
			}
		};

		// Закрыть соединение если Сервер сокета закрыт
		socket.current.onclose = () => {
			console.log('Socket закрыт');
		};

		// Еслипроизошла ошибка соединения
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

	const handleClickEnter = (event: any) => {
		if(event.keyCode  === 13){
			if(connected){
				sendMessage();
			}
			else{
				connect();
			}
		}
	}

	if (!connected) {
		return (
			<div className="center">
				<div className="form">
					<input
						autoFocus 
						onKeyDown = {handleClickEnter}
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
					<input 
					autoFocus 
					onKeyDown = {handleClickEnter} 
					value={value} onChange={(e) => 
					setValue(e.target.value)} 
					type="text" />

					<button onClick={sendMessage}>Отправить</button>
				</div>
				<div className="messages">
					{messages.map((mess: any) => (
						<div>
							{mess.event === 'connection' ? (
									<div className="connection_message"><i style = {{color: "green"}} className = "icon-plus"></i> пользователь: {mess.username}</div>
							) : (
									<div className="message">
											{mess.username}: {mess.message}
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
