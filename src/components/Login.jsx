import React, {useState} from 'react'
import {Link,useNavigate,Navigate} from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  //set the state of variables using useState hook
  const [state, setState]=useState({
    email:'',
    password:'',
    message:'',
    loggedIn:false,
    navigate:useNavigate()
  });
  //formSubmit for login with api
  const formSubmit = (e) =>{
    e.preventDefault();
    //create data to hold the values to be passed in to axios
    const data={
      email:state.email,
      password:state.password
    };
    //include post axios template
    axios.post('/login', data)
    .then( (response)=> {
      console.log(response);
      //store the token in the localstorage
      localStorage.setItem('token',response.data.token);
      //set Loggedin status as reference for profile page
      setState({...state, loggedIn:true});
      //passed the response data user to props user for header
      props.setUser(response.data.user);
      //setState({...setState, navigate:useNavigate});
    })
    .catch( (error)=> {
      //console.log(error);
      setState({...state, message:error.response.data.message});
      document.getElementById('submitform').reset();
    });
  };
  //show error message="";
  let err_message="";
  if(state.message){
    err_message=(
      <div class="alert alert-danger" role="alert">
        {state.message}
</div>
    );
  }

  //after login redirect to profile
  if(state.loggedIn){
  return state.navigate("/profile");
  }
  //redirect to profile if still logged or with token
  if(localStorage.getItem('token')){
    return <Navigate replace to={'/profile'}/>
  }


  //start of page return
  return (
    <div>
      <div className='row'>
          <div className='bg-light p-5 mt-5 rounded col-lg-4 offset-lg-4'>
              <h3 className='text-center'>Login Account</h3>
              {/* display err_message */}
              {err_message}
              <form onSubmit={formSubmit} id="submitform">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' required onChange={(e)=>setState({...state, email:e.target.value})}/>           
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' required onChange={(e)=>setState({...state, password:e.target.value})}/>
              </div>
              <div className='d-grid gap-2 mb-2'>
              <button type="submit" className="btn btn-primary">Login</button>
              </div>   
              Forgot Password? <Link to="/forget">click here</Link>         
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login