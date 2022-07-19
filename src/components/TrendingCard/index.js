import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'
import {
  LikeContainer,
  TrendingContainer,
  TrendingImage,
} from './styledComponents'

const TrendingCard = props => {
  const {trendingDetails} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = trendingDetails
  const {name} = channel
  return (
    <TrendingContainer>
      <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
      <div>
        <p>{title}</p>
        <p>{name}</p>
        <LikeContainer>
          <p>{viewCount} views</p>
          <BsDot />
          <p> {formatDistanceToNow(new Date(publishedAt))}</p>
        </LikeContainer>
      </div>
    </TrendingContainer>
  )
}

export default TrendingCard
