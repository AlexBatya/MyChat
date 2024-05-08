import React, {useState, useEffect} from 'react';
import Autorization from './login.components'
import post from '../modules/post.modules'

import Main from './main.components';

// import Users from './users.component';
//
// <Users username = {user}/>	
// <Main setUser = {setUser}/>		

const App: React.FC = () => {

	const style: any = {
		margin: 0,
		padding: 0
	}

	const [user, setUser] = useState("");
	const [cookie, setCookie] useState(false);

	useEffect(() => {
		console.log(user)
		console.log(cookie)

		const req: any = await post('/user/getCookie')
		if(req.data){
			setCookie(true)
		}

	}, [user, cookie])

  return (
		<div style = {style} className="app">
			{cookie ? <Main setUser = {setUser}> : <Autorization setUser = {setUser}/>}
		</div>
  );
};

export default App;
