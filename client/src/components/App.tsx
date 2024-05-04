import React from 'react';
import Login from './login.components'

// import Main from './main.components';
// import Users from './users.component';
// <Users username = {user}/>	
// <Main setUser = {setUser}/>		

const App: React.FC = () => {

	const style: any = {
		margin: 0,
		padding: 0
	}

	// const [user, setUser] = useState("");
	//
	// useEffect(() => {
	// 	console.log(user)
	// }, [user])

  return (
		<div style = {style} className="app">
			<Login />	
		</div>
  );
};

export default App;
