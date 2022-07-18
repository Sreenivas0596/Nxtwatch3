import {Component} from 'react'
import {Link} from 'react-router-dom'
import {VscHome} from 'react-icons/vsc'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import './index.css'

import {
  ListSideBarContainer,
  SideBarContainer,
  SnsContainer,
  FbContainer,
  SideBarHeading,
} from './styledComponents'
import NxtWatchContext from '../../NxtWatchContext'

class SideBar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SideBarContainer isDarkTheme={isDarkTheme}>
              <ul>
                <Link to="/" className="nav-link">
                  <ListSideBarContainer>
                    <VscHome size={40} />
                    <SideBarHeading>Home</SideBarHeading>
                  </ListSideBarContainer>
                </Link>
                <Link to="/trending" className="nav-link">
                  <ListSideBarContainer>
                    <HiFire size={40} />
                    <SideBarHeading>Trending</SideBarHeading>
                  </ListSideBarContainer>
                </Link>
                <Link to="/gaming" className="nav-link">
                  <ListSideBarContainer>
                    <SiYoutubegaming size={40} />
                    <SideBarHeading>Gaming</SideBarHeading>
                  </ListSideBarContainer>
                </Link>
                <Link to="/saved-videos" className="nav-link">
                  <ListSideBarContainer>
                    <MdPlaylistAdd size={40} />
                    <SideBarHeading> Saved Videos </SideBarHeading>
                  </ListSideBarContainer>
                </Link>
              </ul>
              <SnsContainer>
                <p> Contact Us</p>
                <FbContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="img"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="img"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="img"
                  />
                </FbContainer>
                <p>Enjoy ! Now to see your channels and recommendations!</p>
              </SnsContainer>
            </SideBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SideBar
