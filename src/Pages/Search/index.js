import React, { useState, useEffect } from 'react'
import BulletinTable from '../../Components/BulletinTable'
import Footer from '../../Components/Footer'
import GenericTable from '../../Components/GenericTable'
import NavBar from '../../Components/NavBar'
import SearchForm from '../../Components/SearchForm'
import axios from 'axios'
import { Flip, toast } from 'react-toastify'
import { useHistory } from "react-router-dom";

const url = require('url');

function Search(props) {
  let history = useHistory();
  const { REACT_APP_API_ENDPOINT } = process.env
  const authToken = localStorage.getItem('authenticationToken')
  const userId = localStorage.getItem('userId')
  const [searchData, setSearchData] = useState()
  const [rowsData, setRowsData] = useState()
  const inputHandler = (event) => {
    setSearchData({ ...searchData, [event.target.name]: event.target.value })
    console.log(searchData)
  }

  let headers = [
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
    },
    {
      displayName: "Ultimo Boletin",
      codeName: "rawContent"
    },
    {
      displayName: "Ver",
      codeName: "view"
    },
    {
      displayName: "Guardar",
      codeName: "save"
    },
  ]
  const validateColumn = (columnName, columns) => {
    return columns.filter(({ codeName }) => codeName === columnName).length > 0
  }

  const saveTrial = async (event) => {
    const { id, record } = event.target.dataset;
    //console.log({ id, record })
    
    const responseData = await axios({
      url: '/active-trials/',
      baseURL: REACT_APP_API_ENDPOINT,
      method: "post",
      headers: { 'authorization': authToken },
      data: {
        record: record,
        trial: id,
        user: userId
      }
    })
    console.log({responseData})
    if (responseData.data &&
      responseData.data.data &&
      responseData.data.data.activeTrial
    ) {
      toast.success('Tarea creada exitosamente',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Flip
        })
      history.push(`/trial-detail/${responseData.data.data.activeTrial._id}`);

    } else {
      toast.error('Ups! algo salio mal, intentalo de nuevo',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Flip
        })
    }
    
  }

  const searchRecordHandler = async () => {

    //const params = new url.URLSearchParams(searchData);
    //console.log(params.toString())
    //Call Search Method
    const request = `${REACT_APP_API_ENDPOINT}/trials/search`
    const responseData = await axios.get(request, {
      headers: { 'authorization': authToken },
      params: {
        ...searchData
      }
    })
    if (responseData.data &&
      responseData.data.data &&
      responseData.data.data.trials
    ) {
      const responseTrial = responseData.data.data.trials
      console.log(responseTrial.bulletins.length)
      let trial = Object.keys(responseTrial).reduce((accum, trialProp) => {
        const includeColumn = validateColumn(trialProp, headers)
        
        if (includeColumn)
          return [...accum, {
            propName: trialProp,
            content: responseTrial[trialProp]
          }]
        return accum
      }, [])
      //
      let rawContent = {
        propName: "rawContent",
        content: {__html: ""}
      }
      if (responseTrial.bulletins.length > 0)
        rawContent.content = {__html: responseTrial.bulletins[responseTrial.bulletins.length - 1].rawContent}
      const view = {
        propName: "view",
        content: (
          <span class='material-icons active-notification material-icons-outlined  ml-1'>
            visibility
          </span>
        )
      }
      const save = {
        propName: "save",
        content: (
          <span class='material-icons active-notification  ml-1' onClick={saveTrial} data-id={responseTrial._id} data-record={responseTrial.record}>
            save
          </span>
        )
      }

      trial = [...trial, { ...rawContent }, { ...view }, { ...save }]


      setRowsData([trial])
      //console.log(bulletins)
    }



    /*
    
        axios.get('http://localhost:8080/active-trials')
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })*/
  }





  return (
    <>
      
      <div className="container responsive-body">
        <SearchForm search={searchRecordHandler} inputHandler={inputHandler} />

        {
          rowsData && rowsData.length > 0 &&
          <GenericTable headers={headers} rows={rowsData} />
        }
      </div>
      
    </>
  )
}

export default Search
