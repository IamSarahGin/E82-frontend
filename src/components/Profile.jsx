import React from 'react'

const Profile = (props) => {
  //create variables to hold data from props
  let name ,email;
  //check props if it has contents
  if(props.user){
    name=props.user.name;
    email=props.user.email;

  }
  return (
    <div>
    <div className='row'>
        <div className='bg-light p-5 mt-5 rounded col-lg-4 offset-lg-4'>
            <h3 className='text-center'>User Profile</h3>
           <ul className='list-group'>
            <li className='list-group-item'>Name : {name}</li>
            <li className='list-group-item'>Email Address : {email}</li>
           </ul>
        </div>
    </div>
  </div>
  )
}

export default Profile