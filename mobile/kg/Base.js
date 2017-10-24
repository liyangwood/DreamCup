import React from 'react';

export default class extends React.Component{
	constructor(p){
		super(p);
		this.__type = 'kg_react_native';

		this.state = this._defineState();
		this._init();
	}
	setState(map){
		this._setStateBefore(map);
		super.setState(map);
		this._setStateAfter(map);
	}

	render(){
		const style = this._defineStyle();
		const p = this._defineMainProperty();
		style && (p.style = style);

		return this.renderMain(p);
	}



	//override
	renderMain(){
		throw new Error('must override renderMain method');
	}
	_defineState(){
		return {};
	}
	_init(){}
	_setStateBefore(){}
	_setStateAfter(){}

	_defineStyle(){return null;}
	_defineMainProperty(){
		return {
			...this.props
		};
	}
};