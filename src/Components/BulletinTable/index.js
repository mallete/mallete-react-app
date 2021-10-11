import React, { useState, useEffect } from 'react'
import './style.scss'
import { Table } from 'reactstrap'
import axios from 'axios'

const { REACT_APP_API_ENDPOINT } = process.env

function BulletinTable (event) {
  const authToken =localStorage.getItem('authenticationToken')
  const userId= localStorage.getItem('userId')
  const [trialList, setTrialList] = useState()
  const updateUseUrl= `${REACT_APP_API_ENDPOINT}/active-trials`
  useEffect (async() => {
    const responseData = await axios.get({
        url: updateUseUrl,
        method: "get",
        headers: {'authorization': authToken}
      })
      console.log(responseData)
  }, [])
  
  return (
    <div className=" container table-responsive-sm">
      <Table striped>
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
          {/*bulletinList.map((user, index) => {
            const { nombre, email } = user;
            return (
              <tr key={index}>
                <td>{nombre}</td>
                <td>{email}</td>
              </tr>
            );
          })*/}
          <tr className="text-center">
            <td>1515/1993</td>
            <td>Casa Solida S.A de C.V</td>
            <td>H. Ayutamiento de Tlaquepaque</td>
            <td>15/06/2021</td>
            <td>
              <span class="material-icons-sharp unactive-notification">
                notifications
              </span>
            </td>
            <td>
              <span class="material-icons-sharp unactive-notification">
                event_busy
              </span>
            </td>
          </tr>
          <tr className="text-center">
            <td>1515/2021</td>
            <td>Treviño Raul Gil Mendoza</td>
            <td>
              Secretaría de movilidad, Secreataría de Planeación Admon. y
              Finanzas
            </td>
            <td>19/09/2021</td>
            <td>
              <span class="material-icons active-notification">
                notifications_active
              </span>
            </td>
            <td>
              <span class="material-icons active-notification">
                event_available
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BulletinTable
