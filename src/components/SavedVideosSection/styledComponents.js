import styled from 'styled-components'

export const SaveVideoContainer = styled.div`
  display: flex;
`

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`

export const NoVideosImg = styled.img`
  width: 200px;
`
