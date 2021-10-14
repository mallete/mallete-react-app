import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
function App() {
  const queryClient = new QueryClient()
  const userId = localStorage.getItem('userId')
  const logged = localStorage.getItem('authenticationToken')
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            <Route exact path='/'>
              {
                logged
                  ? <Redirect to={{
                    pathname: '/dashboard'
                  }}
                  />
                  : <Home />
              }
            </Route>
            <Route path='/dashboard'>
              {
                !logged
                  ? <Redirect to={{
                    pathname: '/login'
                  }}
                  />
                  : <Main />
              }
            </Route>

            <Route path='/login'>
              {
                logged
                  ? <Redirect to={{
                    pathname: '/dashboard'
                  }}
                  />
                  : <Login setIsLogged={logged} />
              }
            </Route>
            <Route path='/registro'>
              {
                logged
                  ? <Redirect to={{
                    pathname: '/dashboard'
                  }}
                  />
                  : <CreateAccount />
              }

            </Route>

            <Route path='/busqueda'>
              {
                !logged
                  ? <Redirect to={{
                    pathname: '/login'
                  }}
                  />
                  : <Search />
              }
            </Route>
            <Route path='/planes'>
              <Pricing />
            </Route>
            <Route path='/trial-detail/:id'>
              {
                !logged
                  ? <Redirect to={{
                    pathname: '/login'
                  }}
                  />
                  : <>
                    <NavBar />
                    <TrialDetail />
                    <Footer />
                  </>
              }

            </Route>
          </Switch>
        </>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
