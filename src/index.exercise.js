// 🐨 you'll need to import React and ReactDOM up here\
import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'
// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use ReactDOM to render the <App /> to the root element
function App() {
  const [openModal, setOpenModal] = React.useState('none')
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
          <button onClick={() => setOpenModal('none')}>CLose</button>
        </div>
        Login
      </Dialog>
      <Dialog aria-label="Register Form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>CLose</button>
        </div>
        Register
      </Dialog>
    </div>
  )
}
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))
