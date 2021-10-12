import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import TrialDetaill from '../../Components/BulletinTable'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import GenericTable from '../../Components/GenericTable';
//import GenericModal from "../GenericModal"
const { REACT_APP_API_ENDPOINT } = process.env
function TrialDetail (props) {
    const authToken =localStorage.getItem('authenticationToken')
    const userId= localStorage.getItem('userId')
    const { id } = useParams()
    const [activeTrial, setactiveTrial] = useState()
    const [ bulletins, setBulletins ] = useState([])
    const [ rowsData, setRowsData ] = useState([])
    let headers = [
                {
                    displayName: "Número de expediente",
                    codeName:""    
                },
                {
                    displayName: "Actor",
                    codeName:""
                },
                {
                    displayName: "Demandante",
                    codeName:""    
                },
                {
                    displayName: "Última actualización",
                    codeName:""    
                },
                {
                    displayName: "Notificación",
                    codeName:""
                }, 
                {
                    displayName: "Tareas",
                    codeName:""
                }, 
            ]
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
                /*
                const bulletins = responseData.data.data.activeTrial.bulletins.map((item,index)=>{
                    const column =  Object.keys(item).map((bulletinProp)=>{
                        return {
                            propName: bulletinProp,
                            content: item[bulletinProp]
                        }
                    })
                })
                */
              console.log(responseData.data.data)
        }  
      }, [])
  return (
    <>
    {id}
    {/*
        activeTrial &&
        <GenericTable headers={headers} rows={rowsData}/>
        
    */}
      
    </>
  )
}

export default TrialDetail
