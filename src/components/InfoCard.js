import './InfoCard.css'

function InfoCard ({data}) {
    const {artworkUrl100 , trackName, artistName, collectionName, trackPrice} = data
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={artworkUrl100} alt=''/>
            </div>
            <div className='card-title'>
                {trackName}
            </div>
            <div className='card-artist'>
                Artist: {artistName}
            </div>
            <div className= 'card-album'>
                Album: {collectionName}
            </div>
            <div className='card-price'>
                Price: {trackPrice}$
            </div>
        </div>
    ) 
}

export default InfoCard