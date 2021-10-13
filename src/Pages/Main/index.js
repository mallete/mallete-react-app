import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import BulletinTable from '../../Components/BulletinTable'
import { useHistory } from 'react-router-dom'
import SearchComponent from '../../Components/SearchComponent'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Main () {
  const history = useHistory()
  const logged = localStorage.getItem('authenticationToken')
  console.log(logged)
  if (logged === '' || logged == null) {
    history.push('/')
  }
  const authToken = localStorage.getItem('authenticationToken')
  const userId = localStorage.getItem('userId')
  const [trialList, setTrialList] = useState([])
  const { REACT_APP_API_ENDPOINT } = process.env

  const [filterResult, setFilterResult] = useState([])

  const filterHandler = event => {
    const data = trialList
    const value = event.target.value

    const result = data.filter(trial => {
      return trial.record.toLowerCase().includes(value.toLowerCase()) ||
     trial.trial.plaintiff.toLowerCase().includes(value.toLowerCase()) ||
     trial.trial.defendant.toLowerCase().includes(value.toLowerCase())
    })
    setFilterResult(result)
  }

  useEffect(async () => {
    const responseData = await axios({
      url: '/active-trials',
      baseURL: REACT_APP_API_ENDPOINT,
      method: 'get',
      headers: { authorization: authToken },
      params: {
        user: userId
      }
    })
    console.log({ responseData })
    if (responseData.data &&
        responseData.data.data &&
        responseData.data.data &&
        responseData.data.data.activeTrials.length > 0
    ) {
      setTrialList(responseData.data.data.activeTrials)
    }
  }, [])
  return (
    <>
      <NavBar />
      <SearchComponent />
      {trialList.length > 0 &&
        <BulletinTable
          trials={trialList}
          filterHandler={filterHandler}
        />}
      <Footer />
    </>
  )
}

export default Main
