import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import {SaveVideoContainer} from './styledComponents'
import SavedVideoCard from '../SavedVideoCard'
import NxtWatchContext from '../../NxtWatchContext'

class SavedVideosSection extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedVideosList} = value

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
