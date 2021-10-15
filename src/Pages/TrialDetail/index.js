import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import GenericTable from '../../Components/GenericTable';
import GenericModal from '../../Components/GenericModal'
import ModalForm from '../../Components/ModalForm'

import BulletinDetailTable from '../../Components/BulletinDetailTable'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const { REACT_APP_API_ENDPOINT } = process.env
function TrialDetail(props) {
    const authToken = localStorage.getItem('authenticationToken')
    const userId = localStorage.getItem('userId')
    const { id } = useParams()
    const [activeTrial, setactiveTrial] = useState()
    const [bulletins, setBulletins] = useState([])
    const [rowsData, setRowsData] = useState([])
    let headers = [
        /*
        {
            displayName: "Número de expediente",
            codeName: "record"
        },
        {
            displayName: "Actor",
            codeName: "plaintiff"
        },
        {
            displayName: "Demandante",
            codeName: "defendant"
        },*/
        {
            displayName: "Fecha de acuerdo",
            codeName: "agreementDate"
        },
        {
            displayName: "Fecha de publicacion",
            codeName: "publicationDate"
        },
        {
            displayName: "Boletin",
            codeName: "rawContent"
        },
        {
            displayName: "Tarea",
            codeName: "notification"
        },/*
        {
            displayName: "Tareas",
            codeName: "addNotification"
        },*/
    ]
    const validateColumn = (columnName, columns) => {
        return columns.filter(({ codeName }) => codeName === columnName).length > 0
    }
 
    useEffect(async () => {
        const relatedTasks = await getAllRelatedTasks({
            params: {
                activeTrial:id
            }
        })

        const responseData = await axios({
            url: '/active-trials/' + id,
            baseURL: REACT_APP_API_ENDPOINT,
            method: "get",
            headers: { 'authorization': authToken }
        })
        if (responseData.data &&
            responseData.data.data &&
            responseData.data.data.activeTrial
        ) {
            setactiveTrial(responseData.data.data.activeTrial)
            const { _id,record, } = responseData.data.data.activeTrial
            const bulletins = responseData.data.data.activeTrial.trial.bulletins.reverse().map((bulletin, index) => {
                let column = Object.keys(bulletin).reduce((accum, bulletinProp) => {
                    const includeColumn = validateColumn(bulletinProp, headers)
                    if(bulletinProp === "rawContent" ){
                        let rawContent = bulletin[bulletinProp]
                        if(bulletin.viewMoreUrl != null){
                            rawContent = rawContent.replace("Leer más",`<a href='${bulletin.viewMoreUrl}' target='_blank'>ver mas</a>`)
                        }
                        return [...accum, {
                            propName: bulletinProp,
                            content: {__html: rawContent}
                        }]
                    }

                    if (includeColumn)
                        return [...accum, {
                            propName: bulletinProp,
                            content: bulletin[bulletinProp]
                        }]
                    return accum
                }, [])
                const relatedTask = relatedTasks.reduce( (reducedTaskList, task, index) => {
                    if(task.bulletin === bulletin._id)
                        return  [...reducedTaskList, task]
                    return reducedTaskList
                },[])

                const notification = {
                    propName: "notification",
                    content: (
                        <>
                            { 
                                
                                <GenericModal
                                    buttonLabel='Hello'
                                    task = {relatedTask.length > 0 ? relatedTask[0]: {}} 
                                    trialId={_id}
                                    record={record}
                                    bulletin={bulletin._id}
                                    actionButton={
                                        (
                                            <span className={`material-icons ml-1 ${ relatedTask.length > 0 ? "active-task": "unactive-task" }`}>
                                                event
                                            </span>
                                        )
                                    }
                                    modalBody={(
                                        <ModalForm />
                                        )}
                                    /> 
                            }
                        </>
                    )
                }/*
                const addNotification = {
                    propName: "addNotification",
                    content: (
                        
                        <span class='material-icons active-notification material-icons-outlined  ml-1'>
                            calendar_today
                        </span>
                    )
                }*/
                return [...column, notification]
            })
            setRowsData(bulletins)

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
    return (
        <>
            <Container className="responsive-body">
                <Row>
                    <Col>

                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Informacion General:
                                </CardTitle>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <dl>
                                                <dt>
                                                Número de expediente
                                                </dt>
                                                <dd>
                                                0984/2021
                                                </dd>
                                        </dl>
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <dl>
                                            <dt>
                                                Actor
                                            </dt>
                                            <dd>
                                                ROSA MARIA AGUIRRE ZAMBRANO
                                            </dd>
                                        </dl>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <dl>
                                            <dt>
                                                Actor
                                            </dt>
                                            <dd>
                                                ROSA MARIA AGUIRRE ZAMBRANO
                                            </dd>
                                        </dl>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <dl>
                                            <dt>
                                                Actor
                                            </dt>
                                            <dd>
                                                ROSA MARIA AGUIRRE ZAMBRANO
                                            </dd>
                                        </dl>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            activeTrial && rowsData.length > 0 &&
                            <GenericTable headers={headers} rows={rowsData} />
                        }
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default TrialDetail
