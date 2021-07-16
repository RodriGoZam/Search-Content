import './InfoCard.css'

function InfoCard ({data}) {
    const {artworkUrl100 , trackName, artistName, collectionName, trackPrice} = data
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={artworkUrl100} alt=''/>
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