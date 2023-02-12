import React, { useContext, useState } from 'react'
import Heading from '../../components/Heading'
import InputFeilds from '../../components/InputFeilds'
import Button from '../../components/Button'
import axios from "axios"
import { showToast } from '../../components/Toaster'
import { Flip, ToastContainer } from 'react-toastify'
import { AppContext } from '../../context/AppContext'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { setToken } =
    useContext(AppContext);
  const login = () => {
    setLoading(true)
    axios.post('/api/login', { email: email, password: password }).then(res => {
      showToast(res?.data?.status, "success");
      localStorage.setItem('token', res?.data?.token)
      setToken(res?.data?.token)
      setLoading(false)
    }).catch(error => {
      showToast(error?.response?.data?.status, "error");
      setLoading(false)
    })
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 mt-5 mb-5'>
          <Heading
            heading={"Login"}
            color={"white"}
            size={null}
            alignment={"center"}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3">
          <InputFeilds
            containerWidth={"w-50"}
            label={"Email"}
            labelColor={"white"}
            placeholder={"Email"}
            labelFontSize={"10px"}
            setState={setEmail}
            state={email}
            type={'text'}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3">
          <InputFeilds
            containerWidth={"w-50"}
            label={"Password"}
            labelColor={"white"}
            placeholder={"Password"}
            labelFontSize={"10px"}
            setState={setPassword}
            state={password}
            type={'password'}
          />
        </div>
        <div className="col-sm-12 mt-3 mb-3 d-flex justify-content-center">
          <Button text={"Login"} onclick={login} loading={loading} />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
  )
}

export default Login