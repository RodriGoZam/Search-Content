import './InfoCard.css'

function InfoCard ({imgurl,title,artist,album,price}) {
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={imgurl} alt=''/>
            </div>
            <div className='card-title'>
                {title}
            </div>
            <div className='card-artist'>
                Artist: {artist}
            </div>
            <div className= 'card-album'>
                Album: {album}
            </div>
            <div className='card-price'>
                Price: {price}$
            </div>
        </div>
    ) 
}

export default InfoCard