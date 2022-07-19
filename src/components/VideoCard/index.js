import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import {
  ProfileImageContainer,
  ThumbnailUrlImg,
  ProfileImg,
  ViewDateContainer,
  VideoListContainer,
  ProfileHeading,
  DetailsContainer,
  ProfileParagraph,
} from './styledComponents'
import NxtWatchContext from '../../NxtWatchContext'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    title,
    thumbnailUrl,
    publishedAt,
    viewCount,
    channel,
    id,
  } = videoDetails

  const {name, profileImageUrl} = channel
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <VideoListContainer>
              <ThumbnailUrlImg src={thumbnailUrl} alt="video thumbnail" />

              <ProfileImageContainer>
                <div>
                  <ProfileImg src={profileImageUrl} alt="channel logo" />
                </div>
                <DetailsContainer>
                  <ProfileHeading isDarkTheme={isDarkTheme}>
                    {title}
                  </ProfileHeading>

                  <ProfileParagraph isDarkTheme={isDarkTheme}>
                    {name}
                  </ProfileParagraph>
                  <ViewDateContainer>
                    <ProfileParagraph isDarkTheme={isDarkTheme}>
                      {viewCount} views{' '}
                    </ProfileParagraph>
                    <BsDot />
                    <ProfileParagraph isDarkTheme={isDarkTheme}>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </ProfileParagraph>
                  </ViewDateContainer>
                </DetailsContainer>
              </ProfileImageContainer>
            </VideoListContainer>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCard
