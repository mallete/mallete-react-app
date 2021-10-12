import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import BulletinTable from '../../Components/BulletinTable'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Main () {
  const authToken =localStorage.getItem('authenticationToken')
  const userId= localStorage.getItem('userId')
  const [trialList, setTrialList] = useState([])
  const { REACT_APP_API_ENDPOINT } = process.env
  
  useEffect (async() => {
    const responseData = await axios({
        url: '/active-trials',
        baseURL: REACT_APP_API_ENDPOINT,
        method: "get",
        headers: {'authorization': authToken},
        params:{
          user: userId
        }
      })
      console.log({responseData})
    if( responseData.data && 
        responseData.data.data &&
        responseData.data.data &&
        responseData.data.data.activeTrials.length > 0 
        ){
          setTrialList(responseData.data.data.activeTrials)
    }  
  }, [])
  return (
    <>
      <NavBar />
      {trialList.length > 0 &&
      <BulletinTable trials={trialList} />}
      <Footer />
    </>
  )
}

export default Main
