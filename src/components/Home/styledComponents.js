import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 900px;
`

export const NxtWatchBackGroundImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px;
  border-left-width: 1px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-color: #ffffff;
  border-style: solid;
  height: 40px;
  width: 100%;
  max-width: 200px;
`

export const InputButton = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  cursor: pointer;
`

export const FailureImg = styled.img`
  width: 200px;
`

export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`
