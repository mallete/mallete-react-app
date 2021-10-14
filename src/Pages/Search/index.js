import React from 'react'
import BulletinTable from '../../Components/BulletinTable'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import SearchForm from '../../Components/SearchForm'

// import './App.scss';

function Search () {
  return (
    <>
      <NavBar />
        <div className="container responsive-body">
        <SearchForm/>
      <BulletinTable />
      </div>

      <Footer />
    </>
  )
}

export default Search
