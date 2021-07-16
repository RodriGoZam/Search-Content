import React, { useState } from 'react'
import './SearchPage.css'
import {Button, Alert, Container, Row, Col} from 'react-bootstrap'
import InfoCard from '../InfoCard'
import config from '../../config.json'
import axios from 'axios'

function SearchPage () {

    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const [result, setResult] = useState([])

    const startSearch = () => {
        if(input === "")
        {
            setError(true);
        } else {
            setError(false);
            var searchTerm = input.replace(/\s+/g, '+').toLowerCase();
            iTunesAPIRequest(searchTerm)
        }
    }

    //Makes an http request to itunes API and saves results to array
    const iTunesAPIRequest = (searchTerm) => {
        axios.get(config.iTunesURL+'search?term='+searchTerm+'&limit=50')
            .then(res => {
                setResult(res.data.results)
            }).catch(err =>{
                console.log(err)
            })
    }

    return (
        <>
            <div className='search_page'>
                <h1>iTunes Music Search</h1>
                <p className='desc'>Search for your favorite music</p>
                <div>
                    <input className='search-bar' onChange={e => setInput(e.target.value)} type='text' required placeholder='Search...'></input>
                    <Button onClick={startSearch} className='search-btn'>Search</Button>
                </div>
                <div className='container-alert'>
                    <div className='alert'>
                        <Alert className='alert' show={error} variant="primary">Search can't be blank</Alert>
                    </div>
                </div>
                <Container className='result-container'>
                    <Row>
                        { result.filter(data => data.kind === 'song').map((data) => (
                            <Col>
                                <InfoCard
                                    imgurl= {data.artworkUrl100}
                                    title = {data.trackName}
                                    artist = {data.artistName}
                                    album = {data.collectionName}
                                    price = {data.trackPrice}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>

                
                
            </div>
        </>
    )
}

export default SearchPage