import React, { useState, useEffect } from 'react'
import './style.scss'
const SearchComponent = (props) => {
    const {searchHandler} = props

    return (
        <div className="container">
            <div className="input-group mb-1 input-search mr-auto" >
                <input type="text" class="form-control" placeholder="Actor / Demandado / Expediente" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={searchHandler}/>
                <div className="input-group-append">
                    <button className=" btn-search" type="button" id="button-addon2"><span class="material-icons">gavel</span></button>
                </div>
            </div>
        </div>
    )
}

export default SearchComponent