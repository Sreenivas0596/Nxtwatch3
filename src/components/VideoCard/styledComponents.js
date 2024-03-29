import styled from 'styled-components'

export const ProfileImageContainer = styled.div`
  display: flex;
`

export const ThumbnailUrlImg = styled.img`
  width: 300px;
  height: 200px;
`

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`
export const ViewDateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const VideoListContainer = styled.li`
  list-style-type: none;
  font-family: 'Roboto';
  margin-top: 15px;
  margin-bottom: 10px;
`

export const ProfileHeading = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`

export const DetailsContainer = styled.div`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`
export const ProfileParagraph = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`
