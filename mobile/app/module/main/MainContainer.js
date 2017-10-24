import React from 'react';
import {Container, Tabs, Tab, Icon, TabHeading, Text} from 'native-base';
import {createContainer} from 'app/lib';
import dm from 'app/data';

const color = {
  green : 'green'
};

const style = {
	icon : {
		color : 'green'
	},
	tab_active : {

	}
};
const C = class extends React.Component{
  constructor(p){
    super(p);
    this.state = {
      text : 'loading'
    };

  }
	getTabList(){
		return [
			{
				head :  (
					<TabHeading>
						<Icon name="home" style={style.icon} />
					</TabHeading>
				),
				child : <Container><Text style={{top:100}}>{this.state.text}</Text></Container>
			},
			{
				head : (
					<TabHeading>
						<Icon name="share" style={style.icon} />
					</TabHeading>
				)
			}
		];
	}
	render(){

		return (
			<Container>
				<Tabs initialPage={0} tabBarPosition="bottom" tabBarUnderlineStyle={{backgroundColor:color.green}}>
					{
						_.map(this.getTabList(), (item, i)=>{
							return (
								<Tab key={i} heading={item.head} activeTabStyle={style.tab_active}>
									{item.child}
								</Tab>
							);
						})
					}
				</Tabs>
			</Container>
		);
	}

  async componentDidMount(){
    const user = await dm.class.create('User', {});

    this.setState({
      text : user.format('fullName')
    });
  }
}

export default createContainer(C, ()=>{

	return {};
});
