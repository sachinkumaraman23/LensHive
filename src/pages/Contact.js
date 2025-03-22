import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Contact.css';
import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import CartoonImg from '../images/cartoon.png';


const Login = () => {
    const navigate = useNavigate();
    const[user,setUser] = useState({name:"",email:"",message:""});
    let name, value;
    const handleInput = (e)=>{
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user,[name]:value});
    }
  
    const PostData = async(e)=>{
      e.preventDefault();
      const {name,email,message} = user;
      
      const res = await fetch("/contact",{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify({
            name,email,message
          })
      })
      
      const data = await res.json();
      if(data.status === 422 || !data){
          window.alert("Invalid");
          console.log('invlaid');
      }else{
          window.alert("Message Is Sent");
          console.log('Message iS Sent');
          navigate('/About')
      }
  }
  return (
    <Layout>
      <div className='container py-5'>
        <div className='row align-items-center justify-content-center'>
          {/* Forms */}
          <div className='col-lg-6 py-5'>
            <h1 className='h1 text-center text-lg-left mb-4'>Contact</h1>
            <p className='text-center text-lg-left mb-4'>
              I would love to get suggestions from you.
            </p>
                
          
            <form>
            <div className='mb-3'>
                <input
                  className='form-control'
                  type='textbox'
                  placeholder='Enter Your Name'
                  name="name" value={user.name} onChange ={handleInput}
                />
              </div>
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
                  type='textbox'
                  placeholder='Enter Your Message'
                  name="message" value={user.message} onChange ={handleInput}
                />
              </div>
              
              <div class="d-grid gap-2 col-3 mx-auto">
              <button class="btn btn-primary" type="button" onClick={PostData}>Send</button>
              </div>
              
            </form>
          
          </div>
          
          {/* Images */}
          <div className='col-lg-6'>
            <img className='img-fluid rounded-circle' src={CartoonImg} alt='' />
          </div>
        </div>
      </div>
    <div className='container py-5'>
        <div className='row align-items-center justify-content-center'>
          {/* Forms */}
      
        </div>
      </div>
    </Layout>
  )
}
export default Login
