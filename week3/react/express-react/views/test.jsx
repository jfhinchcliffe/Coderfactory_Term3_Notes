import React from 'react'
import Layout from './layout'
import Jumbo from './bootstrap/Jumbo'
import Button from './bootstrap/Button'
import Form from './bootstrap/Form'

export default function Component({ title }) {
  return (
    <Layout>
      <h1>{ title }</h1>
      <Jumbo heading="Jumbotron Test Header" text="Jumbotron filler text"></Jumbo>
      <Button type='success' name='klik' />
      <Form label='login' />
    </Layout>
  )
}
