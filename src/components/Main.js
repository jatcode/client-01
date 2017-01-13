import React , { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import {MyLink } from './MyComponents';


class Main extends Component {
  render(){
    return(
      <Container>
          <Header>
            <MyLink toValue='todos/list' label='Todos List'/>
          </Header>
          {React.cloneElement(this.props.children,this.props)}
      </Container>
    );
  }
}

export default Main;