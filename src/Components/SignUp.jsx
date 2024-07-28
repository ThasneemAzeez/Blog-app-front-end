import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input,setInput]=new useState(
        {"name":"","email":"","phoneno":"","password":"","cnfrmpswrd":""} 
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        if (input.password==input.cnfrmpswrd) {

            let newInput={"name":input.name, "email":input.email,"phoneno":input.phoneno,"password":input.password}
            console.log(newInput)

            axios.post("http://localhost:3030/signUp",newInput).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Registered succesfully")
                        setInput({"name":"", "email":"","phoneno":"","password":""})
                    } else {
                        alert("Email Id already exist")
                    }

                }
            ).catch(
                (error)=>{
                    console.log(error)

                }
            )
            
        } else {
            alert("password and confirm password doesn't match")
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <center>
                                            <h5 class="card-title">Blog App</h5></center>
                                            <center><p class="card-text">Sign Up to see your friends blogs.</p></center>
                                            <div className="row g-3">
                                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">Name</label>
                                                    <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                                                </div>
                                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">Email Id</label>
                                                    <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                                                </div>
                                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">Phone number</label>
                                                    <input type="text" className="form-control" name='phoneno' value={input.phoneno} onChange={inputHandler}/>
                                                </div>
                                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">Password</label>
                                                    <input type="password"  id="" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                                                </div>
                                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">Confirmed Password</label>
                                                    <input type="password"  id="" className="form-control" name='cnfrmpswrd' value={input.cnfrmpswrd} onChange={inputHandler} />
                                                </div>
                                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <button className="btn btn-success" onClick={readValue}>Register</button>
                                                </div>
                                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <p>Have an account</p>
                                                    <a href="" className="btn btn-primary" >Login In</a>
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
    )
}

export default SignUp