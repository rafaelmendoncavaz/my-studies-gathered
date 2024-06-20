import { useState } from 'react'
import { LoginSection } from './components/LoginSection/LoginSection'
import './App.css'
import { RestrictedSection } from './components/RestrictedSection/RestrictedSection'

function App() {

  const [isLogin, setLogin] = useState(false)

  const userdata = 
    {
        email: "xae-a12@x.com",
        password: "spacex",
    }

  const handleLogin = (event) => {
    event.preventDefault()

    const email = document.querySelector("#useremail")
    const pass = document.querySelector("#userpassword")

    if (email.value !== userdata.email || pass.value !== userdata.password) {
      return alert("Email e/ou Senha inválidos!")
    }
    else {
      return setLogin(!isLogin)
    }
}

  const handleLogout = () => {
    return setLogin(false)
  }

  return (
    <>
      { isLogin ? <RestrictedSection handleLogout={handleLogout} /> : <LoginSection handleLogin={handleLogin} /> }
    </>
  )
}

export default App
