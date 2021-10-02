const { REACT_APP_API_ENDPOINT } = process.env
const selectFetchUrl = (urlOption) => {
  switch (urlOption) {
    // case 'animales':
    // return 'https://animales.com'

    default:
      return REACT_APP_API_ENDPOINT
  }
}

export default selectFetchUrl
