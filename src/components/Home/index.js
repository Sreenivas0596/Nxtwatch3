import {Component} from 'react'
import Cookies from 'js-cookie'
import {Loader} from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import Header from '../Header'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'

import {
  HomeContainer,
  InputButton,
  FailureImg,
  HomeVideoContainer,
  HomeVideoCardContainer,
  BannerImg,
} from './styledComponents'
import './index.css'
import NxtWatchContext from '../../NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    allNxtWatchVideosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.getNxtWatchVideos()
  }

  getNxtWatchVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const response = await fetch(url, options)

    console.log(response)

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const updateNxtWatchData = data.videos.map(eachVideo => ({
        title: eachVideo.title,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
      }))
      this.setState({
        allNxtWatchVideosList: updateNxtWatchData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        allNxtWatchVideosList: [],
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNxtWatchAllVideoSuccessView = () => {
    const {allNxtWatchVideosList, searchInput} = this.state

    console.log(allNxtWatchVideosList)

    const {title} = allNxtWatchVideosList

    console.log(title)

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div>
              <div className="input-search-container">
                <input
                  type="search"
                  value={searchInput}
                  onChange={this.onChangeInput}
                  placeholder="Search"
                  className="input"
                />
                <InputButton type="button" onClick={this.getNxtWatchVideos}>
                  <BsSearch />
                </InputButton>
              </div>
              <HomeVideoCardContainer isDarkTheme={isDarkTheme}>
                {allNxtWatchVideosList.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </HomeVideoCardContainer>
            </div>
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

  renderLoadingView = () => {
    ;<NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <div isDarkTheme={isDarkTheme}>
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#000000" height="50" width="50" />
            </div>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  }

  onClickCloseButton = () => {
    this.setState({showBanner: false})
  }

  renderNxtWatchVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderNxtWatchAllVideoSuccessView()

      case apiStatusConstants.failure:
        return this.renderNxtWatchFailureView()

      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div>
              <Header />
              <HomeContainer>
                <div>
                  <SideBar />
                </div>
                <HomeVideoContainer isDarkTheme={isDarkTheme}>
                  <div>
                    {showBanner && (
                      <BannerImg data-testid="banner">
                        <div>
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                          <button type="button">GET IT NOW </button>
                        </div>
                        <div>
                          <button
                            type="button"
                            data-testid="close"
                            onClick={this.onClickCloseButton}
                          >
                            <MdClose size={16} />
                          </button>
                        </div>
                      </BannerImg>
                    )}
                  </div>
                  {this.renderNxtWatchVideos()}
                </HomeVideoContainer>
              </HomeContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
