import React from 'react'
import Footer from '../../Components/Footer'
import FooterLanding from '../../Components/FooterLanding'
import NavBar from '../../Components/NavBar'
import NavigationBar from '../../Components/NavigationBar'
import PlanCard from '../../Components/PlanCards'
// import './App.scss';

function Pricing () {
  const authenticationToken = localStorage.getItem('authenticationToken')
  return (
    <>
      {
      authenticationToken
        ? <NavBar />
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
