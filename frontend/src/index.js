import React from 'react';
import ReactDOM from 'react-dom';

const Root = ()=>{
	return (
		<div>
			<div>Templat1e value</div>
		</div>
	);
};

const render = (Component) => {
	ReactDOM.render(
		(<Root></Root>),

		document.getElementById('root'),
	);
};

render();
