import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'
import {ViewDateContainer, SavedVideoContainer} from './styledComponents'

const SavedVideoCard = props => {
  const {savedVideoDetails} = props
  const {
    title,
    channel,
    viewCount,
    publishedAt,
    thumbnailUrl,
    id,
  } = savedVideoDetails

  const {name} = channel

  return (
    <Link to={`/videos/${id}`} className="nav-link">
      <SavedVideoContainer>
        <div>
          <img src={thumbnailUrl} alt="video thumbnail" />
        </div>
        <div>
          <p> {title}</p>
          <p>{name}</p>
          <ViewDateContainer>
            <p>{viewCount} views </p>
            <BsDot />
            <p>{formatDistanceToNow(new Date(publishedAt))}</p>
          </ViewDateContainer>
        </div>
      </SavedVideoContainer>
    </Link>
  )
}

export default SavedVideoCard
