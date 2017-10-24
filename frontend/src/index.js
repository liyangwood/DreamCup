import React from 'react';
import ReactDOM from 'react-dom';

import config from 'app/config';

const Root = ()=>{
	return (
		<div>
			<b>{config.SERVER_URL} lsdjkf</b>
		</div>
	);
};

console.log(1111);

const render = (Component) => {
	ReactDOM.render(
		(<Root></Root>),

		document.getElementById('root'),
	);
};

render();
