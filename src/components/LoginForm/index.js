import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
import {
  LoginButton,
  LoginFormBgContainer,
  FormContainer,
} from './styledComponents'
import NxtWatchContext from '../../NxtWatchContext'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    submitError: false,
    errorMessage: '',
    password: 'password',
  }

  onChangePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onSubmitError = errorMsg => {
    this.setState({
      submitError: true,
      errorMessage: errorMsg,
    })
  }

  onClickCheckBox = event => {
    this.setState({password: event.target.checked ? 'text' : 'password'})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {
      username: usernameInput,
      password: passwordInput,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response.ok)
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  renderPassword = () => {
    const {passwordInput, password} = this.state
    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD{' '}
        </label>{' '}
        <input
          type={password}
          placeholder="Password"
          id="password"
          className="password-input"
          value={passwordInput}
          onChange={this.onChangePassword}
        />{' '}
      </>
    )
  }

  renderUserName = () => {
    const {usernameInput} = this.state
    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME{' '}
        </label>{' '}
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="username-input"
          value={usernameInput}
          onChange={this.onChangeUsername}
        />{' '}
      </>
    )
  }

  render() {
    const {submitError, errorMessage} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <LoginFormBgContainer isDarkTheme={isDarkTheme}>
              <FormContainer isDarkTheme={isDarkTheme}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  className="website-logo-img"
                />
                <form onSubmit={this.onSubmitForm}>
                  <div className="input-container">
                    {' '}
                    {this.renderUserName()}{' '}
                  </div>{' '}
                  <div className="input-container">
                    {' '}
                    {this.renderPassword()}
                  </div>{' '}
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      onClick={this.onClickCheckBox}
                      id="checkbox"
                    />

                    <label htmlFor="checkbox">Show Password</label>
                  </div>
                  <LoginButton type="submit" className="login-button">
                    Login{' '}
                  </LoginButton>{' '}
                  {submitError && (
                    <p className="error-message"> * {errorMessage} </p>
                  )}{' '}
                </form>{' '}
              </FormContainer>
            </LoginFormBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
