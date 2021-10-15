import React, { useState, useEffect } from 'react'
import './style.scss'
import { Table } from 'reactstrap'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import GenericModal from '../GenericModal'
import ModalForm from '../ModalForm'

const { REACT_APP_API_ENDPOINT } = process.env

function BulletinTable (props) {
  const authToken = localStorage.getItem('authenticationToken')
  const userId = localStorage.getItem('userId')
  const [trialList, setTrialList] = useState([])
  const {trials} = props
  useEffect(async () => {
    const responseData = trials
      
      setTrialList(trials)

  }, [])
  useEffect(async () => {
  }, [trialList])
  
  return (
    <div className=' container mt-5'>
      <Table className='table-responsive-sm' striped>
        <thead className='tab-header'>
          <tr className='text-center'>
            <th>Número de expediente</th>
            <th>Actor</th>
            <th>Demandante</th>
            <th>Última actualización</th>
            <th>Notificación</th>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
          {
            trials &&
            trials.length > 0 &&
            trials.map( (activeTrial, index) => {
              if(!activeTrial.trial)
                return;
              const { record, plaintiff, defendant, bulletins, _id } = activeTrial.trial
              console.log(activeTrial._id)
              let lastBulletin = {}
              let lastTask = activeTrial.lastTask || {}
              if (bulletins.length > 0) { 
                lastBulletin = bulletins[bulletins.length - 1] 

                
              }
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
                    <Link to={`/trial-detail/${activeTrial._id}`} activeTrial={activeTrial} className={`material-icons ${activeTrial.updated ? 'active-notification' : 'unactive-notification'}`}>
                      {activeTrial.updated ? 'notifications_active' : 'notifications'}
                    </Link>
                  </td>
                  <td data-column-name='tasks'>
                    <GenericModal
                      task={lastTask}
                      trialId={_id}
                      record={record}
                      bulletin={lastBulletin._id}
                      actionButton={
                          (<span class=' ml-1 material-icons active-notification'>
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
      </Table>
    </div>
  )
}

export default BulletinTable 
