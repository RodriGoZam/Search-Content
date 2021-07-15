import React, { useState } from 'react'
import './SearchPage.css'
import {Button, Alert} from 'react-bootstrap'

function SearchPage () {

    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const printSearch = () => {
        if(input == "")
        {
            setError(true);
        } else {
            setError(false);
            console.log(input);
        }
    }

    return (
        <>
            <div className='search_page'>
                <h1>iTunes Music Search</h1>
                <p className='desc'>Search for your favorite music</p>
                <div>
                    <input className='search-bar' onChange={e => setInput(e.target.value)} type='text' required placeholder='Search...'></input>
                    <Button onClick={printSearch} className='search-btn'>Search</Button>
                </div>
                <div className='container'>
                    <div className='alert'>
                        <Alert className='alert' show={error} variant="primary">Search can't be blank</Alert>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage