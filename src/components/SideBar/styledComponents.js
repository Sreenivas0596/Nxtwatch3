import styled from 'styled-components'

export const ListSideBarContainer = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => (props.activeHomeTab ? '#ff0b37' : '#000000')};
`

export const SideBarContainer = styled.div`
  max-height: 1200px;
  max-width: 200px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
`

export const SnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 10px;
`

export const FbContainer = styled.div`
  display: flex;
`

export const SideBarHeading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Roboto';
`
