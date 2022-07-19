import Header from '../Header'
import {NotFoundContainer, NotFoundImg} from './styledComponents'
import NxtWatchContext from '../../NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Header />
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <NotFoundImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
            <h1> Page Not Found</h1>
            <p> we are sorry, the page you requested could not be found. </p>
          </NotFoundContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
