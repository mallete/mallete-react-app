import React from 'react'
import Footer from '../../Components/Footer'
import FooterLanding from '../../Components/FooterLanding'
import NavBar from '../../Components/NavBar'
import NavigationBar from '../../Components/NavigationBar'
import PlanCard from '../../Components/PlanCards'
// import './App.scss';

function Pricing(props) {
  const authenticationToken = localStorage.getItem('authenticationToken')
  const { setIsLogged } = props
  return (
    <>
      {
        authenticationToken
          ? <NavBar setIsLogged={setIsLogged} />
          : <NavigationBar />
      }
      <div className={`responsive-body ${!authenticationToken ? 'responsive-body-landing' : ''}`}>
        <PlanCard />
      </div>
      {
        authenticationToken
          ? <Footer />
          : <FooterLanding />
      }
    </>
  )
}

export default Pricing
