import React, {useState} from 'react';
import '../styles/login.styles.scss'
import '../fonts/fonts.scss'
import post from '../modules/post.modules'

const Login: React.FC<any> = ({setMain}) => {
	const [loginValue, setLoginValue] = useState("");
	const [passwordValue, setPassword] = useState("");
	const [passwordType, setPasswordType] = useState("password")
	const [passwordEyes, setPasswordEyes] = useState("icon-eye-blocked")

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
		}
	}

	return (
		<div className = "login">
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
					</label>	
						
				</div>	
						

				<div className = "login-foget">
					<small className = "login-password">Забыли пороль?</small>		
					<small className = "login-registration">Регестрация</small>		
				</div>

				<button className = "login-button"><i className = "icon-key"></i> Войти</button>	

					
			</form>	
		</div>	
				
	)

}

export default Login;
