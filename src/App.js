import React, { useState, useEffect } from 'react'
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
import TrialDetail from './Pages/TrialDetail'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  const queryClient = new QueryClient()
  // const {authToken, setauthToken} = useState()
  const userId= localStorage.getItem('userId')
  const [islogged, setIsLogged]=useState(false)
  useEffect(()=>{
    const logged = localStorage.getItem('authenticationToken')
    console.log("este es el token:" + logged)
    logged && setIsLogged(true)
  },[])
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
            
              <Route exact path='/' >
                <Home />
              </Route>
              <Route path='/dashboard'>
                <Main />
              </Route>
            
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/registro'>
              <CreateAccount />
            </Route>
            
            <Route path='/búsqueda'>
              {/*
                authToken ?
                <Search />
                :
                <Login />
              */}
            </Route>
            <Route path='/planes'>
              <Pricing />
            </Route>
            <Route path='/trial-detail/:id'>
              <TrialDetail />
            </Route>
          </Switch>
        </div>
      </Router>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
