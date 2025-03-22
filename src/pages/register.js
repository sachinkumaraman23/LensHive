import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/register.css';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const[user,setUser] = useState({name:"",address:"",phno:"",email:"",password:"",cpassword:""});
  let name, value;
  const handleInput = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
  }

  const PostData = async(e)=>{
    e.preventDefault();
    const {name,address,phno,email,password ,cpassword } = user;
    
    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
          name,address,phno,email,password ,cpassword 
        })
    })
    const data = await res.json();
    if(data.status === 422 || !data){
        window.alert("Invalid");
        console.log('invlaid');
    }else{
        window.alert("Successfull");
        console.log('Successfull');
        navigate('/login')
    }
}
  
  return (
    <Layout>
      <div className='container py-5'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-lg-4 py-5'>
            <h1 className='h1 text-center text-lg-left mb-4'>Register</h1>
            <form>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter Your Name'
                  name="name" value={user.name} onChange ={handleInput}
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter Your Address'
                  name="address" value={user.address} onChange ={handleInput}
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter PhoneNumber'
                  name="phno" value={user.phno} onChange ={handleInput}
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='Enter Your Email Address'
                  name="email" value={user.email} onChange ={handleInput}
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Enter Password'
                  name="password" value={user.password} onChange ={handleInput}
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='Confirm Password'
                  name="cpassword" value={user.cpassword} onChange ={handleInput}
                />
              </div>
             
              <div className="d-grid gap-2 col-3 mx-auto">
                <button className="btn btn-primary" type="button" onClick={PostData}>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register;
