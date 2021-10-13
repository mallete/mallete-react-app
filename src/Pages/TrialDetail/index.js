import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import GenericTable from '../../Components/GenericTable';
//import GenericModal from "../GenericModal"
import BulletinDetailTable from '../../Components/BulletinDetailTable'

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
                    codeName:"record"    
                },
                {
                    displayName: "Actor",
                    codeName:"plaintiff"
                },
                {
                    displayName: "Demandante",
                    codeName:"defendant"    
                },
                {
                    displayName: "Fecha de acuerdo",
                    codeName:"agreementDate"    
                },
                {
                    displayName: "Fecha de publicacion",
                    codeName:"publicationDate"    
                },
                {
                    displayName: "Boletin",
                    codeName:"rawContent"    
                },
                {
                    displayName: "Notificación",
                    codeName:"notification"
                }, 
                {
                    displayName: "Tareas",
                    codeName:"addNotification"
                }, 
            ]
            const validateColumn =  (columnName,columns) =>{
                return columns.filter( ({ codeName }) => codeName === columnName ).length > 0
            }
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
                
                const bulletins = responseData.data.data.activeTrial.trial.bulletins.reverse().map((bulletin,index)=>{
                    let column =  Object.keys(bulletin).reduce((accum,bulletinProp)=>{
                        const includeColumn = validateColumn(bulletinProp, headers)
                        if(includeColumn)
                            return [...accum,{
                                propName: bulletinProp,
                                content: bulletin[bulletinProp]
                            }]
                        return accum
                    },[])
                    const notification ={
                        propName: "notification",
                        content: (
                            <span class='material-icons active-notification '>
                                event
                               </span>
                        )
                    } 
                    const addNotification ={
                        propName: "addNotification",
                        content: (
                            <span class='material-icons active-notification '>
                                event_busy
                               </span>
                        )
                    } 
                    return [...column,notification,addNotification]
                })
                setRowsData(bulletins)
              console.log(bulletins)
        }  
      }, [])
  return (
    <>
        {id}
        {/*
            
            
        */}{
        activeTrial && rowsData.length > 0 &&
            <GenericTable headers={headers} rows={rowsData}/>
        }
    </>
  )
}

export default TrialDetail
