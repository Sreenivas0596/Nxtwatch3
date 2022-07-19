import styled from 'styled-components'

export const SaveVideoContainer = styled.div`
  display: flex;
`

export const SavedVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`

export const NoVideosImg = styled.img`
  width: 200px;
`
