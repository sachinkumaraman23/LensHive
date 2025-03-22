import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/login.css';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const[user,setUser] = useState({email:"",password:""});
    let name, value;
    const handleInput = (e)=>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user,[name]:value});
    }
  
    const PostData = async(e)=>{
      e.preventDefault();
      const {email,password} = user;
      
      const res = await fetch("/login",{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify({
            email,password
          })
      })
      
      const data = await res.json();
      if(data.status === 422 || !data){
          window.alert("Invalid");
          console.log('invlaid');
      }else{
          window.alert("Successfull");
          console.log('Successfull');
          navigate('/')
      }
  }
  return (
    <Layout>
    <div className='container py-5'>
        <div className='row align-items-center justify-content-center'>
          {/* Forms */}
          <div className='col-lg-6 py-5'>
            <h1 className='h1 text-center text-lg-left mb-4'>LOGIN</h1>
            <form>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='Enter Your email address'
                  name="email" value={user.email} onChange ={handleInput}
                />
              </div>
              <div className='mb-3'>
                <input
                  className='form-control'
                  type='password'
                  placeholder='password'
                  name="password" value={user.password} onChange ={handleInput}
                />
              </div>
              <div class="d-grid gap-2 col-3 mx-auto">
              <button class="btn btn-primary" type="button" onClick={PostData}>Login</button>
              </div>
              <p className='text-center py-5'>Not a member? <Link to="/register">Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Login
