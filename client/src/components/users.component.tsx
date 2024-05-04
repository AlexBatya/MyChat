import React from 'react';
import '../styles/users.styles.scss'
import "../fonts/fonts.scss"

const Users: React.FC<any> = ({username}) => {

	return (
		<div className = "username ">

			<i className = "icon-person"></i>
			{username != "" ? <p>{username }</p> : ""}
				
		</div>		
	)

};

export default Users;
