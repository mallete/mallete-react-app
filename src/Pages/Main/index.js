import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import InputGeneric from '../../Components/Input'
import BulletinTable from '../../Components/BulletinTable'
import { useHistory, Link } from 'react-router-dom'
import SearchComponent from '../../Components/SearchComponent'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';

function Main(props) {
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
    if (!value)
      setFilterResult(trialList)
    else {
      const result = data.filter(trial => {
        return trial.record.toLowerCase().includes(value.toLowerCase()) ||
          trial.trial.plaintiff.toLowerCase().includes(value.toLowerCase()) ||
          trial.trial.defendant.toLowerCase().includes(value.toLowerCase())
      })
      setFilterResult(result)
    }
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
      setFilterResult(responseData.data.data.activeTrials)
    }
  }, [])
  return (
    <>

      <Container className="responsive-body d-flex flex-column ">
        <Row className="align-items-center">
          <Col xs={12} md={8}>
            <SearchComponent searchHandler={filterHandler} />
          </Col>
          <Col xs={12} md={4}>
            <Link className="btn btn-primary my-4" to={{ pathname: "/busqueda" }} >Añadir Juicio</Link>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
          {
              trialList.length > 0 &&
                <BulletinTable
                  trials={filterResult}
                />
            
            }
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Main
