import React from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useRef } from 'react';
function App() {
     const[password,setpassword]=useState('')
     const[username,setusername]=useState('')
     const[error,seterror]=useState('') 
     const[password_error1,set_password_error1]=useState('') 
     const navigate = useNavigate();           
     const handleChange =(event)=> {
      console.log(event.target.value);
      setusername(event.target.value)
    }
  const handleChange1 =(event)=> {  
     setpassword(event.target.value)
    }
    const input1 = useRef(0);
    const input2 = useRef(0);
     const Onhandle_submit=(e)=>{
      e.preventDefault();
      if(username.length ===0){
        input1.current.style.border= "2px solid red";
        input1.current.style.borderRadius= "20px";
        seterror('required username')
       } if(username.length !==0){
        input1.current.style.border = "2px solid green";
        seterror('')
       }
       if(password.length ===0){
        input2.current.style.borderRadius= "20px";
        input2.current.style.border= "2px solid red";
        set_password_error1('required password')
       }
        if(password.length !==0){
        input2.current.style.border = "2px solid green";
        set_password_error1(' ')
       }
       if(username.length  &&  password.length!==0){
        navigate('./dashboard')
      }} 
  return (
  <center>
    <div className="App">
      <div  className='app_child'>
      <form onSubmit={Onhandle_submit}>
        <div className='input1'>
          <lable>username</lable><br></br>
          <input onChange={handleChange} ref={input1}></input>
          <div style={{color:"red"}}>{error}</div>
        </div>
        <div className='input2'>
        <lable >password</lable><br></br>
          <input onChange={handleChange1} type='password' ref={input2}></input>
          <div  style={{color:"red"}}>{password_error1}</div>
        </div>
        <div className='button'>
          <button style={{textAlign:"center",marginTop:"20px",backgroundColor:"yellow",width:"300px",height:"40px",borderRadius:"10px"}} type='submit'>click</button>
        </div>
        </form>
        </div>
    </div>
    </center>    
  );
}

export default App;
