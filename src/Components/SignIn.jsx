import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState(
        { "email": "", "password": "" }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
    
    axios.post("http://localhost:3030/signIn ", input).then(
        (response) => {
            console.log(response.data)
            if (response.data.status == "Incorrect password") {

            } 
            else if(response.data.status=="Incorrect Email Id"){
                alert("Incorrect Email Id")
            }
            else {

                let token = response.data.token
                let userId = response.data.userId
                console.log(userId)
                console.log(token)

                sessionStorage.setItem("userId", userId)
                sessionStorage.setItem("token", token)

                navigate("/create")
            }

        }










    ).catch((error)=>{
        console.log(error)
    })
}
    return (
        <div>

            <div className="container">
                <div className="row">
                    <center>
                        <img src="https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_640.jpg" alt="" />
                    </center><br />
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email Id</label>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button onClick={readValues} className="btn btn-success">Sign In</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="/signup" className="btn btn-secondary">New users click here</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn