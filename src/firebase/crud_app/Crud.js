import React from 'react'
import Create from './components/Create'
import Nav from './components/Nav'
import Read from './components/Read'

function Crud() {
  return (
    <>
        <Nav title="Brave Todos App"/>
        <Create/>
        <Read/>
    </>
  )
}

export default Crud