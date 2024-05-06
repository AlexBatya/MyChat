import React, {useState, useEffect} from 'react';
import '../styles/login.styles.scss'
import '../fonts/fonts.scss'
import post from '../modules/post.modules'

const Forgot: React.FC<any> = ({setRegistration}) => {
	const [emailValue, setEmailValue] = useState('');
	const [answer, setAnswer] = useState(false);

	const handleForgot = async (e: any) => {
		e.preventDefault();
		const req: any = await post('/user/sendMail', {
			email: emailValue
		})
		
		if(req.data){
			console.log(req.data);
			setAnswer(false);
			setRegistration(0);
		}
		else {
			setAnswer(true);
		}
	}

	const handleEnter = () => {
		setRegistration(0)
	}

	const handleReg = () => {
		setRegistration(1)
	}

	return (
		<form onSubmit = {handleForgot} className = "login-form">
			<h1 className = " login-title"><i className = "icon-evil"></i>Востановление пароля</h1>	

			<div className = "inputs">

				<label className = "login-label">
					<input 
						type = "text"
						required
						value = {emailValue} 
						onChange = {(e: any) => setEmailValue(e.target.value)} 
						className = "login-input" 
						placeholder = "Email" 
					/>
					{answer ? <small className = "error">Такого пользователя нет в базе</small> : ""}
				</label>	
					
			</div>	
					
			<div className = "login-foget">
				<small onClick = {handleReg} className = "login-password">Регестрация</small>		
				<small onClick = {handleEnter} className = "login-registration">Вход</small>		
			</div>

			<button className = "login-button"><i className = "icon-key"></i> Востановить </button>	

				
		</form>
	)

}

const Registration:React.FC<any> = ({setRegistration}) =>  {
	const [nameValue, setNameValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [passwordType, setPasswordType] = useState('password');
	const [passwordEyes, setPasswordEyes] = useState("icon-eye-blocked")

	const [answer, setAnswer] = useState(false);

	const handleInputClick = () => {
		if(passwordType === "password"){
			setPasswordType("text");	
			setPasswordEyes("icon-eye")
		}
		else{
			setPasswordType("password");	
			setPasswordEyes("icon-eye-blocked")
		}
	}

	const handleRegistration = async (e: any) => {
		e.preventDefault();

		const req: any = await post("/user/addUser", {
			name: nameValue,
			password: passwordValue,
			email: emailValue
		})

		if(req.data === "Пользователь добавлен"){
			setRegistration(0)	
			setAnswer(false);
		}
		else{
			setAnswer(true);
		}

	}

	const handleForget = () => {
		setRegistration(2)	
	}

	const handleEnter = () => {
		setRegistration(0)	
	}

	return (
		<form onSubmit = {handleRegistration} className = "login-form">
			<h1 className = " login-title"><i className = "icon-evil"></i>Регистрация</h1>	

			<div className = "inputs">

				<label className = "login-label">
					<input 
						type = "text"
						required
						value = {nameValue} 
						onChange = {(e: any) => setNameValue(e.target.value)} 
						className = "login-input" 
						placeholder = "Логин" 
					/>
				</label>	
						

				<label className = "login-label">
					<input 
						required
						type = "text"
						value = {emailValue} 
						onChange = {(e: any) => setEmailValue(e.target.value)} 
						className = "login-input" 
						placeholder = "Email" 
					/>
				</label>	

				<label className = "login-label">
					<input 
						required
						type = {passwordType}
						value = {passwordValue} 
						onChange = {(e: any) => setPasswordValue(e.target.value)} 
						className = "login-input" 
						placeholder = "Пароль" 
					/>
					<i onClick = {handleInputClick} className = {passwordEyes}></i>	
						{answer ? <small className = "error">Такой пользователь уже есть в базе</small> : ""}
				</label>

				<div className = "login-foget">
					<small onClick = {handleForget} className = "login-password">Забыли пароль?</small>		
					<small onClick = {handleEnter} className = "login-registration">Вход</small>		
				</div>
					
			</div>	
					

			<button className = "login-button"><i className = "icon-key"></i> Зарегистрироваться </button>	

				
		</form>	
	)

}

const Login: React.FC<any> = ({setMain, setRegistration}) => {
	const [loginValue, setLoginValue] = useState("");
	const [passwordValue, setPassword] = useState("");
	const [passwordType, setPasswordType] = useState("password")
	const [passwordEyes, setPasswordEyes] = useState("icon-eye-blocked")

	const [answer, setAnswer] = useState(false);

	const handleInputClick = () => {
		if(passwordType === "password"){
			setPasswordType("text");	
			setPasswordEyes("icon-eye")
		}
		else{
			setPasswordType("password");	
			setPasswordEyes("icon-eye-blocked")
		}
	}

	const handleAutorization = async (e: any) => {
		e.preventDefault();
		const req: any = await post("/user/getUser",{
			name: loginValue,
			password: passwordValue
		}) 	
		if(req.data != ""){
			setMain(true);
			setAnswer(false)
		}
		else{
			setAnswer(true)
		}
	}

	const handleRegClick = () => {
		setRegistration(1);
	}

	const handleForgetClick = () => {
		setRegistration(2);
	}

	return (
		<form onSubmit = {handleAutorization} className = "login-form">
			<h1 className = " login-title"><i className = "icon-evil"></i>Авторизация</h1>	

			<div className = "inputs">

				<label className = "login-label">
					<input 
						required
						value = {loginValue} 
						onChange = {(e: any) => setLoginValue(e.target.value)} 
						className = "login-input" 
						placeholder = "Логин" 
					/>
				</label>	
						

				<label className = "login-label">
					<input 
						required
						type = {passwordType}
						value = {passwordValue} 
						onChange = {(e: any) => setPassword(e.target.value)} 
						className = "login-input" 
						placeholder = "Пароль" 
					/>
					<i onClick = {handleInputClick} className = {passwordEyes}></i>	
					{answer ? <small className = "error">Не верные логин или пaроль</small> : ""}
				</label>	
					
			</div>	
					

			<div className = "login-foget">
				<small onClick = {handleForgetClick} className = "login-password">Забыли пороль?</small>		
				<small onClick = {handleRegClick} className = "login-registration">Регестрация</small>		
			</div>

			<button onClick = {handleAutorization} className = "login-button"><i className = "icon-key"></i> Войти</button>	

				
		</form>	

	)		
	
}

const Autorization:React.FC<any> = ({setMain}) => {

	const [registration, setRegistration] = useState(0);

	useEffect(() => {
		console.log(registration)
	}, [registration])

	function change(registration: number){
		if(registration === 1){
			return <Registration setRegistration = {setRegistration} />
		}
		else if(registration === 2){
			return <Forgot setRegistration = {setRegistration}/>
		}

		return <Login setMain = {setMain}  setRegistration = {setRegistration}/>
	}

	return (
		<div className = "login">
			{change(registration)}
		</div>	
	)

}


export default Autorization;
