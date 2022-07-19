import styled from 'styled-components'

export const ViewDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LikeDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const LikeButton = styled.button`
  background-color: transparent;
  outline: none;
  border-width: 0px;
  cursor: pointer;
`

export const LikeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const MainVideoItemContainer = styled.div`
  max-height: 1200px;
  background-size: cover;
`

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`

export const SubscriberContainer = styled.div`
  display: flex;
`

export const FailureImg = styled.img`
  width: 200px;
`

export const VideoItemsContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`

export const VideoItemDarkContainer = styled.div`
  display: flex;
`

export const LikeColorButton = styled.p`
  color: ${props => (props.likeButton ? '#3b82f6' : '')};
`

export const DisLikeColorButton = styled.p`
  color: ${props => (props.dislikeButton ? '#3b82f6' : '')};
`
