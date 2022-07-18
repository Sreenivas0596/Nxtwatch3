import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`

export const NotFoundImg = styled.img`
  width: 400px;
`
