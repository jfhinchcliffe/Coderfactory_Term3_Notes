import React from 'react'
import Layout from './layout'
import Jumbo from './bootstrap/Jumbo'
import Button from './bootstrap/Button'
import Form from './bootstrap/Form'
import Nav from './bootstrap/Nav'

class Test extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      activeNavItem: 'facebook'
    }
  }
  
  onNavigateToItem() {
  
  }
  render() {
    const { activeNavItem} = this.state
    <Layout>
      <h1>{ title }</h1>
      <Jumbo heading="Jumbotron Test Header" text="Jumbotron filler text"></Jumbo>
      <Button type='success' name='klik' />
      <Form label='login' />
      <Nav>
        <Nav.Item active={ activeNavItem === 'google' } onClick={ null } >Google</Nav.Item>
        <Nav.Item active={ activeNavItem === 'facebook' } onClick={ null} >Facebook</Nav.Item>
      </Nav>
    </Layout>
  }
}

