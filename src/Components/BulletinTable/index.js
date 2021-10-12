import React, { useState, useEffect } from 'react'
import './style.scss'
import { Table } from 'reactstrap'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import GenericModal from "../GenericModal"
import ModalForm from '../ModalForm'

const { REACT_APP_API_ENDPOINT } = process.env

function BulletinTable (props) {
  const {trials} = props
  const authToken =localStorage.getItem('authenticationToken')
  const userId= localStorage.getItem('userId')
  const [trialList, setTrialList] = useState([])
  useEffect (async() => {
    console.log(trials)
    setTrialList(trials)
  }, [])
  
  return (
    <div className=" container mt-5">
      <Table className="table-responsive-sm" striped>
        <thead className="tab-header">
          <tr className="text-center">
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
            trialList&&
            trialList.map((activeTrial, index) => {
              const { record, plaintiff,defendant, bulletins, _id } = activeTrial.trial;
              console.log(activeTrial._id)
              let lastBulletin = {}
              if(bulletins.length > 0)
                lastBulletin = bulletins[bulletins.length-1]
              const lastUpdateDate = moment()
              return (
                <tr key={index}>
                  <td data-column-name="record" data-column-name-data={record}>
                      <Link to={`/trial-detail/${activeTrial._id}`} activeTrial={activeTrial}>
                        {record}
                      </Link>
                  </td>
                  <td data-column-name="plantiff" data-column-name-data={plaintiff}>{plaintiff}</td>
                  <td data-column-name="defendant" data-column-name-data={defendant}>{defendant}</td>
                  <td className="text-center" data-column-name="lastUpdateDate" data-column-name-data={lastBulletin.agreementDate}>{lastBulletin.agreementDate}</td>
                  <td data-column-name="notifcation">
                    
                      <GenericModal 
                        buttonLabel="Hello" 
                        actionButton=
                        {
                          (<span class="material-icons active-notification ">
                            notifications_active
                          </span>)
                        }
                        trial={_id}
                        record={record}
                        modalBody={(
                          <ModalForm/>
                        )}
                      ></GenericModal>
                  </td>
                  <td data-column-name="tasks">
                    <GenericModal 
                          buttonLabel="Hello" 
                          actionButton=
                          {
                            (<span class="material-icons unactive-notification-task">
                              event_busy
                            </span>)
                          }
                          modalBody={`La ultima actualizacion del expediente ${record} es: .....`}
                      ></GenericModal>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default BulletinTable
