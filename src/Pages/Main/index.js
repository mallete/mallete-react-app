import React from 'react'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import BulletinTable from '../../Components/BulletinTable'
import { useHistory } from 'react-router-dom'

function Main () {
  const history = useHistory()
  const logged = localStorage.getItem('authenticationToken')
  console.log(logged)
  if(logged === "" || logged == null){
      history.push("/")
  }
  return (
    <>
      <NavBar />
      <BulletinTable />
      <Footer />
    </>
  )
}

export default Main
