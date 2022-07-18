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
  } = savedVideoDetails

  const {name} = channel

  return (
    <SavedVideoContainer>
      <div>
        <img src={thumbnailUrl} alt={name} />
      </div>
      <div>
        <h1> {title}</h1>
        <h1>{name}</h1>
        <ViewDateContainer>
          <p>{viewCount} views </p>
          <BsDot />
          <p>{formatDistanceToNow(new Date(publishedAt))}</p>
        </ViewDateContainer>
      </div>
    </SavedVideoContainer>
  )
}

export default SavedVideoCard
