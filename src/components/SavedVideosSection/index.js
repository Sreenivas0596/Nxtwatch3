import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import {
  SaveVideoContainer,
  NoVideosImg,
  SavedVideosContainer,
} from './styledComponents'
import SavedVideoCard from '../SavedVideoCard'
import NxtWatchContext from '../../NxtWatchContext'

class SavedVideosSection extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedVideosList} = value

          const savedLength = savedVideosList.length
          if (savedLength === 0) {
            return (
              <div>
                <Header />
                <SaveVideoContainer>
                  <div>
                    <SideBar />
                  </div>
                  <SavedVideosContainer>
                    <div>
                      <NoVideosImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                    </div>
                    <h1>No Saved Videos found</h1>
                    <p> You can save videos while watching them</p>
                  </SavedVideosContainer>
                </SaveVideoContainer>
              </div>
            )
          }
          return (
            <div>
              <Header />
              <SaveVideoContainer>
                <div>
                  <SideBar />
                </div>
                <div>
                  {savedVideosList.map(eachSavedVideo => (
                    <SavedVideoCard
                      key={eachSavedVideo.id}
                      savedVideoDetails={eachSavedVideo}
                    />
                  ))}
                </div>
              </SaveVideoContainer>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosSection
