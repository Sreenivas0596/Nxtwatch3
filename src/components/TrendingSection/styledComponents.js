import styled from 'styled-components'

export const TrendingSectionContainer = styled.div`
  display: flex;
`

export const TrendingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const FailureImg = styled.img`
  width: 200px;
`
export const TrendingDarkContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`
