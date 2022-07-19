import {Link} from 'react-router-dom'
import {GamingImage, GameListContainer} from './styledComponents'

const GamingCard = props => {
  const {gameDetails} = props
  const {thumbnailUrl, title, viewCount, id} = gameDetails

  return (
    <Link to={`/videos/${id}`} className="nav-link">
      <GameListContainer>
        <GamingImage src={thumbnailUrl} alt="video thumbnail" />
        <p>{title}</p>
        <p>{viewCount} Watching Worldwide</p>
      </GameListContainer>
    </Link>
  )
}

export default GamingCard
