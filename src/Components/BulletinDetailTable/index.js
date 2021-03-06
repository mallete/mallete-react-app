import React, { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import GenericModal from '../GenericModal'
import ModalForm from '../ModalForm'

const { REACT_APP_API_ENDPOINT } = process.env

function BulletinDetailTable (props) {
  const authToken = localStorage.getItem('authenticationToken')
  const userId = localStorage.getItem('userId')
  const [trialList, setTrialList] = useState([])

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
    if (responseData.data &&
        responseData.data.data &&
        responseData.data.data &&
        responseData.data.data.activeTrials.length > 0
    ) {
      const processedData  = responseData.data.data.activeTrials.map( async activeTrial =>{
        const lastBulletin = activeTrial.bulletins[activeTrial.bulletins.length - 1] 
        console.log({lastBulletin})
        const relatedTasks = await getAllRelatedTasks({
              params: {
                  activeTrial:activeTrial._id
              }
          })
          const relatedTask = relatedTasks.reduce( (reducedTaskList, task, index) => {
            if(task.bulletin === lastBulletin._id)
                return  [...reducedTaskList, task]
            return reducedTaskList
        },[])
          if(relatedTask.length>0){
              console.log({relatedTask})
            return {...activeTrial, lastTask:relatedTask[0] }
          }
         
          return activeTrial
      })
     


      setTrialList(processedData)
    }
  }, [])

  
  const getAllRelatedTasks = async ({params}) =>{
    const request = `${REACT_APP_API_ENDPOINT}/tasks/search`
    const responseData = await axios.get(request, {
        headers: { 'authorization': authToken },
        params: {
            ...params
        }
    })
    if (responseData.data &&
        responseData.data.data 
    ) {
        return  responseData.data.data.tasks;

    }
    return []
}
  useEffect(async () => {
  }, [trialList])
  return (
    <div class="table-responsive-sm">
      <table class="table">
        <thead className='tab-header'>
          <tr className='text-center'>
            <th>N??mero de expediente</th>
            <th>Actor</th>
            <th>Demandante</th>
            <th>??ltima actualizaci??n</th>
            <th>Notificaci??n</th>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
            trialList &&
            trialList.length > 0 &&
            trialList.map((activeTrial, index) => {
              const { record, plaintiff, defendant, bulletins, _id } = activeTrial.trial
              let lastBulletin = {}
              if (bulletins.length > 0) { lastBulletin = bulletins[bulletins.length - 1] }
              const lastUpdateDate = moment()
              return (
                <tr key={index}>
                  <td data-column-name='record' data-column-name-data={record}>
                    <Link to={`/trial-detail/${activeTrial._id}`} activeTrial={activeTrial}>
                      {record}
                    </Link>
                  </td>
                  <td data-column-name='plantiff' data-column-name-data={plaintiff}>{plaintiff}</td>
                  <td data-column-name='defendant' data-column-name-data={defendant}>{defendant}</td>
                  <td className='text-center' data-column-name='lastUpdateDate' data-column-name-data={lastBulletin.agreementDate}>{lastBulletin.agreementDate}</td>
                  <td data-column-name='notifcation'>
                    <Link to={`/trial-detail/${activeTrial._id}`} activeTrial={activeTrial} className='material-icons active-notification '>
                      {activeTrial.updated ? 'notifications_active' : 'notifications'}
                    </Link>
                  </td>
                  <td data-column-name='tasks'>
                    <GenericModal
                      buttonLabel='Hello'
                      trialId={_id}
                      actionButton={
                          (<span class='material-icons active-notification '>
                            event_busy
                           </span>
                          )
                        }
                      modalBody={(
                        <ModalForm />
                        )}
                    />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default BulletinDetailTable
