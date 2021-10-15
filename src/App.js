import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Main from './Pages/Main'
import Search from './Pages/Search'
import Pricing from './Pages/Pricing'
import CreateAccount from './Pages/CreateAccount'
import TrialDetail from './Pages/TrialDetail'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'
import axios from 'axios'
/*const credentials = {
  userId: "",
  authenticationToken: ""
};*/
//const CredentialsContext = React.createContext(credentials);
const { REACT_APP_API_ENDPOINT } = process.env
function App() {
  const queryClient = new QueryClient()

  const [logged, setIsLogged] = useState(false)
  const [hasAPlan, setHasAPlan] = useState(false)

  const setIsLoggedHandler = (state) => {
    setIsLogged(state)
  }
  useEffect(async () => {
    const isLogged = localStorage.getItem('authenticationToken')
    const userId = localStorage.getItem('userId')
    if (userId) {
      const request = `${REACT_APP_API_ENDPOINT}/users/${userId}`
      const responseData = await axios.get(request, {
        headers: { authorization: isLogged },
      })
      if (responseData && responseData.data && responseData.data.data) {
        const user = responseData.data.data.users
        const { plan, vigencyDate } = user
        if (plan && plan != '') setHasAPlan(true)
      }
    }
    console.log('este es el token:' + logged)
    isLogged && setIsLogged(true)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              {logged ? (
                <Redirect
                  to={{
                    pathname: '/dashboard',
                  }}
                />
              ) : (
                <Home />
              )}
            </Route>
            <Route path="/dashboard">
              {!logged ? (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              ) : (
                <>
                  {hasAPlan ? (
                    <>
                      <NavBar setIsLogged={setIsLogged} />
                      <Main />
                      <Footer />
                    </>
                  ) : (
                    <>
                      <>
                        <NavBar setIsLogged={setIsLogged} />
                        <Main />
                        <Footer />
                      </>
                    </>
                  )}
                </>
              )}
            </Route>

            <Route path="/login">
              {logged ? (
                <Redirect
                  to={{
                    pathname: '/dashboard',
                  }}
                />
              ) : (
                <Login setIsLogged={setIsLogged} />
              )}
            </Route>
            <Route path="/registro">
              {logged ? (
                <Redirect
                  to={{
                    pathname: '/dashboard',
                  }}
                />
              ) : (
                <CreateAccount setIsLogged={setIsLogged} />
              )}
            </Route>

            <Route path="/busqueda">
              {!logged ? (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              ) : (
                <>
                  <NavBar setIsLogged={setIsLogged} />
                  <Search />
                  <Footer />
                </>
              )}
            </Route>
            <Route path="/planes">
              <Pricing setIsLogged={setIsLogged} />
            </Route>
            <Route path="/trial-detail/:id">
              {!logged ? (
                <Redirect
                  to={{
                    pathname: '/login',
                  }}
                />
              ) : (
                <>
                  <NavBar setIsLogged={setIsLogged} />
                  <TrialDetail />
                  <Footer />
                </>
              )}
            </Route>
          </Switch>
        </>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
