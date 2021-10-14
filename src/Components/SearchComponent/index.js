import React, { useState, useEffect } from 'react'
import './style.scss'
const SearchComponent = (props) => {
    const {searchHandler} = props

    return (

            <div className="input-group input-search" >
                <input type="text" class="form-control" placeholder="Actor / Demandado / Expediente" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={searchHandler}/>
                <div className="input-group-append">
                    <button className=" btn-search" type="button" id="button-addon2"><span class="material-icons">filter_list</span></button>
                </div>
            </div>
    )
}

export default SearchComponent