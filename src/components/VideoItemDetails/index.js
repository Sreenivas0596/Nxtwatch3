import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  ViewDataContainer,
  LikeDataContainer,
  LikeButton,
  LikeContainer,
  MainVideoItemContainer,
  ProfileImg,
  SubscriberContainer,
  FailureImg,
  VideoItemsContainer,
  VideoItemDarkContainer,
  LikeColorButton,
  DisLikeColorButton,
} from './styledComponents'
import NxtWatchContext from '../../NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
}

const apiUrl = 'https://apis.ccbp.in/videos/'

class VideoItemDetails extends Component {
  state = {
    allVideoItemDetailsList: {},
    apiStatus: apiStatusConstants.initial,
    likeButton: false,
    dislikeButton: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(`${apiUrl}${id}`, options)

    console.log(response)

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const updateVideoItemDetailsList = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        viewCount: data.video_details.view_count,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
      }

      this.setState({
        allVideoItemDetailsList: updateVideoItemDetailsList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      likeButton: !prevState.likeButton,
      dislikeButton: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      dislikeButton: !prevState.dislikeButton,
      likeButton: false,
    }))
  }

  renderNxtWatchAllVideoItemDetailsSuccessView = () => {
    const {allVideoItemDetailsList, likeButton, dislikeButton} = this.state

    console.log(allVideoItemDetailsList)

    const {
      title,
      description,
      id,
      thumbnailUrl,
      videoUrl,
      viewCount,
      publishedAt,
      channel,
    } = allVideoItemDetailsList
    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {addSavedVideosList} = value

          return (
            <MainVideoItemContainer>
              <div>
                <ReactPlayer url={videoUrl} width="100%" />
                <h1>{title}</h1>
                <ViewDataContainer>
                  <LikeContainer>
                    <p>{viewCount} views </p>
                    <BsDot />
                    <p>{formatDistanceToNow(new Date(publishedAt))}</p>
                  </LikeContainer>
                  <LikeDataContainer>
                    <LikeButton type="button" onClick={this.onClickLikeButton}>
                      <LikeContainer>
                        <AiOutlineLike color={likeButton ? '#3b83f6' : ''} />
                        <LikeColorButton likeButton={likeButton}>
                          {' '}
                          Like{' '}
                        </LikeColorButton>
                      </LikeContainer>
                    </LikeButton>
                    <LikeButton
                      type="button"
                      onClick={this.onClickDislikeButton}
                    >
                      <LikeContainer>
                        <AiOutlineDislike
                          color={dislikeButton ? '#3b83f6' : ''}
                        />
                        <DisLikeColorButton dislikeButton={dislikeButton}>
                          {' '}
                          Dislike{' '}
                        </DisLikeColorButton>
                      </LikeContainer>
                    </LikeButton>
                    <LikeButton
                      type="button"
                      onClick={() =>
                        addSavedVideosList(allVideoItemDetailsList)
                      }
                    >
                      <LikeContainer>
                        <MdPlaylistAdd />
                        <p> Save </p>
                      </LikeContainer>
                    </LikeButton>
                  </LikeDataContainer>
                </ViewDataContainer>
              </div>
              <hr />
              <SubscriberContainer>
                <div>
                  <ProfileImg src={profileImageUrl} alt={name} />
                </div>
                <div>
                  <h1>{name}</h1>
                  <p>{subscriberCount} subscribers</p>
                  <p>{description}</p>
                </div>
              </SubscriberContainer>
            </MainVideoItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderNxtWatchFailureView = () => (
    <div className="failure-container">
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1 className="job-title">Oops! Something went wrong</h1>
      <p className="address">
        We are having some trouble to complete your request.Please try again
      </p>
      <div>
        <button type="button" className="button" onClick={this.getAllJobsData}>
          Retry
        </button>
      </div>
    </div>
  )

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderNxtWatchAllVideoItemDetailsSuccessView()

      case apiStatusConstants.failure:
        return this.renderNxtWatchFailureView()

      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div>
              <Header />

              <VideoItemDarkContainer>
                <div>
                  <SideBar />
                </div>
                <div>
                  <VideoItemsContainer isDarkTheme={isDarkTheme}>
                    {this.renderVideoItemDetails()}
                  </VideoItemsContainer>
                </div>
              </VideoItemDarkContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
