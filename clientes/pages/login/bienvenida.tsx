import { useState, useContext, useEffect } from 'react'
import React from 'react'
import { API_URL } from '../../constants'
import { useRouter } from 'next/router'
import { AuthContext, UserInfo } from '../../modules/auth_provider'

const index = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const { authenticated } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    if (authenticated) {
      router.push('/')
      return
    }
  }, [authenticated])

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (res.ok) {
        const user: UserInfo = {
          username: data.username,
          id: data.id,
        }

        localStorage.setItem('user_info', JSON.stringify(user))
        return router.push('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const signupHandler = async (e: React.SyntheticEvent) => {
    //e.preventDefault()

    try {
      const res = await fetch(`${API_URL}/singup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      })

      const data = await res.json()
      if (res.ok) {
        //console.log(res)
        window.location.reload();
      }
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <div id="body1" style={{ height: '100vh', width: '100vw' }}>
      <link rel="stylesheet" href="https://unicons.iconscout.com/release-pro/v4.0.0/css/solid.css" />
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input type="email" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="password" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" 
                              value={password}
                              onChange={(e) => setPassword(e.target.value)} />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button className="auth-button btn mt-4 btn-light" type="submit"
                            onClick={submitHandler}>submit</button>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input type="text" className="form-style" placeholder="Your Username" id="signname" autoComplete="off"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)} />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="email" className="form-style" placeholder="Your Email" id="signemail" autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input type="password" className="form-style" placeholder="Your Password" id="signpass" autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)} />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button className="auth-button btn mt-4 btn-light" type="submit" 
                            onClick={signupHandler}>submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index
