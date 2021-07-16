import './InfoCard.css'
import { useState } from 'react'
import {Button} from 'react-bootstrap'
import { Howl } from 'howler'
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";

function InfoCard ({data}) {

    const [isPlaying, setPlaying] = useState(false)
    const [currentSong, setSong] = useState("")
    const [sound, setSound] = useState(null)
    const {artworkUrl100 , trackName, artistName, collectionName, trackPrice, previewUrl} = data


    const soundPlay = (src) => {
        if(sound === null || currentSong !== src){
            const s = new Howl({
            src,
            html5: true,
            volume: 0.1
            })
            setSound(s)
            setSong(src)
            s.play()
            setPlaying(true)
        } else{
            if (isPlaying){
                sound.stop()
                setPlaying(false)
            } else {
                sound.play()
                setPlaying(true)
            }
            
            sound.on('end', function(){
                setPlaying(false)
            })
        }
    }

    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={artworkUrl100} alt=''/>
                <Button className='play-btn' onClick={() => soundPlay(previewUrl)}>
                    {isPlaying ? <BsFillStopFill /> : <BsFillPlayFill />}
                </Button>
            </div>
            <div className='card-title' data-testid='title-1'>
                {trackName}
            </div>
            <div className='card-artist' data-testid='artist-1'>
                Artist: {artistName}
            </div>
            <div className= 'card-album' data-testid='album-1'>
                Album: {collectionName}
            </div>
            <div className='card-price' data-testid='price-1'>
                Price: {trackPrice}$
            </div>
            
        </div>
    ) 
}

export default InfoCard