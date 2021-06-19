// 🐨 you'll need to import React and ReactDOM up here\
import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'
// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(event) {
    event.preventDefault()
    const {username, password} = event.target.elements
    onSubmit({
      useraname: username.value,
      password: password.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}
// 🐨 use ReactDOM to render the <App /> to the root element
function App() {
  const [openModal, setOpenModal] = React.useState('none')
  function login(formData) {
    console.log(formData)
  }
  function register(formData) {
    console.log(formData)
  }
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login Form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        Login
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Register Form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        Register
        <LoginForm onSubmit={register} buttonText="Submit" />
      </Dialog>
    </div>
  )
}
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
