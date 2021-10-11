import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Main from './Pages/Main'
import Search from './Pages/Search'
import Pricing from './Pages/Pricing'
import CreateAccount from './Pages/CreateAccount'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  const queryClient = new QueryClient()
  // const {authToken, setauthToken} = useState()
  const authToken =localStorage.getItem('authenticationToken')
  const userId= localStorage.getItem('userId')
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        
        <div>
        {/*
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dasboard</Link>
              </li>
              <li>
                <Link to='/búsqueda'>Search</Link>
              </li>
              <li>
                <Link to='/registro'>Create account</Link>
              </li>
              <li>
                <Link to='/planes'>Pricing</Link>
              </li>
            </ul>
          </nav>
        */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/registro'>
              <CreateAccount />
            </Route>
            <Route path='/dashboard'>
              {
                authToken ?
                <Main />
                :
                <Login />
              }
            </Route>
            <Route path='/búsqueda'>
              {
                authToken ?
                <Search />
                :
                <Login />
              }
            </Route>
            <Route path='/planes'>
              <Pricing />
            </Route>
          </Switch>
        </div>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
