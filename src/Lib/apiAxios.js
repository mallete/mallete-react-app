import selectFetchUrl from './switchFetch'
const axios = require('axios')

const throwErrorMessage = ({ name, message }) => {
  function ErrorMessage({ name, message }) {
    this.name = name
    this.message = message
  }
  throw new ErrorMessage({
    name,
    message,
  })
}

const fetchData = ({
  optionUrl,
  pathUrl,
  dataFetch,
  headersObj,
  axiosMethod = 'post',
}) => {
  const url = selectFetchUrl(optionUrl)
  return axios({
    method: axiosMethod,
    url: `${url}${pathUrl}`,
    data: dataFetch,
    headers: {
      ...headersObj,
    },
  })
    .then(({ data: { payload } }) => {
      return payload
    })
    .catch((error) => {
      console.log(error.response)
      if (error.response) {
        throwErrorMessage({
          name: error.response.data.error,
          message: error.response.data.message,
        })
      } else {
        throwErrorMessage({
          name: 'unknownError',
          message: 'Error desconocido o de red.',
        })
      }
    })
}

const fetchGet = ({
  optionUrl,
  pathUrl,
  headersObj,
  fetchHeaders = {}, // responseType: 'blob', // important,
}) => {
  const url = selectFetchUrl(optionUrl)
  return axios({
    url: `${url}${pathUrl}`,
    method: 'GET',
    ...fetchHeaders,
    headers: {
      ...headersObj,
    },
  })
    .then((response) => response)
    .catch((error) => {
      if (error.response && error.response.request.responseType === 'blob') {
        throwErrorMessage({
          name: 'downloadError',
          message: 'Hubo un problema al descargar el archivo',
        })
      } else if (error.response) {
        throwErrorMessage({
          name: error.response.data.payload.error.name,
          message: error.response.data.payload.error.message,
        })
      } else {
        throwErrorMessage({
          name: 'unknownError',
          message: 'Error desconocido o de red.',
        })
      }
    })
}

export { fetchData, fetchGet }
