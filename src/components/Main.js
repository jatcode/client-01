import React , { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import {MyLink } from './MyComponents';


class Main extends Component {
  
  render(){
    return(
      <div>
        <Header>
          <MyLink toValue='todos/list' label='Todos List'/>
        </Header>
        <h3>MIAN</h3>
        {React.cloneElement(this.props.children,this.props)}
      </div>
    );
  }
}

export default Main;