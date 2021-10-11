import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import TrialDetaill from '../../Components/BulletinTable'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
//import GenericModal from "../GenericModal"
const { REACT_APP_API_ENDPOINT } = process.env
function TrialDetail (props) {
    const authToken =localStorage.getItem('authenticationToken')
    const userId= localStorage.getItem('userId')
    const { id } = useParams()
    const [activeTrial, setactiveTrial] = useState()
    useEffect (async() => {
        const responseData = await axios({
            url: '/active-trials/' + id,
            baseURL: REACT_APP_API_ENDPOINT,
            method: "get",
            headers: {'authorization': authToken}
          })
        if( responseData.data && 
            responseData.data.data &&
            responseData.data.data.activeTrial
            ){
                setactiveTrial(responseData.data.data.activeTrial)
              console.log(responseData.data.data)
        }  
      }, [])
  return (
    <>
    {
        activeTrial
        /**
         * <BulletinTable />
         */
    }
      
    </>
  )
}

export default TrialDetail
