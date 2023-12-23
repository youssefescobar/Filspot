import React from 'react'
import './home.scss'
import Navbar from '../../components/Navbar'
import List from '../../components/list'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home