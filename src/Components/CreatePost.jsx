import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const CreatePost = () => {

const [input,setInput]=useState(
  {
     "userId":sessionStorage.getItem("userId"),"Message":""
  }
)

const inputHandler = (event) => {
  setInput({ ...input, [event.target.name]: event.target.value })
}

  const readValue=()=>{
    console.log(input)
    axios.post("http://localhost:3030/Create " , input,{headers:{"token":sessionStorage.getItem("token"),"Content-Type":"applicatiion/json"}
  }).then(
    (response)=>{
      if (response.data.status=="success") {
          alert("successfull")
      } else {
        alert("something went wrong")
      }
    }
  ).catch(
    (error)=>{
      console.log(error)
    }
  )
  }



  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Post a Message</label>
                <textarea name="Message" value={input.Message} className="form-control" onChange={inputHandler}></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success"onClick={readValue}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost