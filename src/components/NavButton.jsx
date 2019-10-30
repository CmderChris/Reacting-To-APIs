import React from 'react';

const NavButton = props => {
	return (
		<button onClick={() => props.handleClick()} className="btn btn-outline-primary mx-2 my-1">
			{props.text}
		</button>
	);
};

export default NavButton;