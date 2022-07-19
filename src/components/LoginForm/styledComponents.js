import styled from 'styled-components'

export const LoginButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;

  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const LoginFormBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  padding: 10px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const FormContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '')};
  box-shadow: 1px 8px 40px rgba(7, 7, 7, 0.08);
`
