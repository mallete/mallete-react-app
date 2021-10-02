import { useMutation, useQuery } from 'react-query'
import { fetchData, fetchGet } from './apiAxios'

const VerifyLocalToken = () => {
  const { data } = useQuery('getToken', () => {
    const jwtToken = localStorage.getItem('jwtToken')
    return jwtToken
  })
  return { data }
}

const verifyAuthInfo = ({ configGet, token = '', auth = false }) => {
  let enabledOption = {}
  let headersObj = {}

  if (configGet && Object.keys(configGet).length) {
    enabledOption = configGet.enabled || false
  } else {
    enabledOption = true
  }

  if (auth) {
    if (token) {
      headersObj = {
        Authorization: token,
      }
      configGet = {
        ...configGet,
        enabled: !!(token && enabledOption),
      }
    } else {
      const { data } = VerifyLocalToken()
      headersObj = {
        Authorization: data,
      }
      configGet = {
        ...configGet,
        enabled: !!(data && enabledOption),
      }
    }
  }

  return { headersObj, configGetObj: configGet }
}

export const HookFetchRequest = ({
  optionUrl,
  pathUrl,
  token = '',
  auth = false,
  axiosMethod,
  headers = {},
}) => {
  let { headersObj } = verifyAuthInfo({ token, auth })
  headersObj = { ...headersObj, ...headers }

  const { mutate, isLoading, isError, isSuccess, data, error, reset } =
    useMutation(
      async (dataFetch) =>
        await fetchData({
          optionUrl,
          pathUrl,
          dataFetch,
          headersObj,
          axiosMethod,
        })
    )

  return { mutate, isLoading, isError, isSuccess, data, error, reset }
}

export const HookGetRequest = ({
  keyRequest,
  optionUrl,
  pathUrl,
  configGet = {},
  auth = false,
  token = '',
  fetchHeaders,
}) => {
  const { headersObj, configGetObj } = verifyAuthInfo({
    configGet,
    token,
    auth,
  })

  const { data, isError, error, isLoading, isSuccess, remove } = useQuery(
    keyRequest,
    async () =>
      await fetchGet({ optionUrl, pathUrl, headersObj, fetchHeaders }),
    {
      ...configGetObj,
    }
  )

  return { data, isError, error, isLoading, isSuccess, remove }
}
