import React from 'react';
import './style.scss'
import { Table } from 'reactstrap';

function BulletinTable (props) {
  return (
      <div className="container">
        <Table striped>
            <thead className="header">
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
                <tr className="text-center">
                    <td>1515/1993</td>
                    <td>Casa Solida S.A de C.V</td>
                    <td>H. Ayutamiento de Tlaquepaque</td>
                    <td>15/06/2021</td>
                    <td><span class="material-icons-sharp">notifications</span></td>
                    <td><span class="material-icons-sharp">event_busy</span></td>
                </tr>
                <tr className="text-center">
                    <td>1515/2021</td>
                    <td>Treviño Raul Gil Mendoza</td>
                    <td>Secretaría de movilidad, Secreataría de Planeación Admon. y Finanzas</td>
                    <td>19/09/2021</td>
                    <td><span class="material-icons active-notification">notifications_active</span></td>
                    <td><span class="material-icons active-notification">event_available</span></td>
                </tr>
            </tbody>
        </Table>
      </div>
  );
}

export default BulletinTable;