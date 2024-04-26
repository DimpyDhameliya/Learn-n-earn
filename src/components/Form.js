import React, { useState } from 'react'

function Form() {
     const [userData,setuserData] = useState ({
          firstname : "",
          lastname : "",
          email : "",
          password : "",
           
     });
     function handleClick(){
          console.log(userData);
     }
  return (
    <div className="container p-5 col-md-4">
       <div className="mb-3" >
             <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
             <input 
             type="text" 
             value={userData.firstname}
             onChange={(e) => setuserData ({...userData, firstname:e.target.value})}
             className="form-control"
             id="exampleFormControlInput1"  />
        </div>

        <div className="mb-3">
             <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
             <input 
             type="text" 
             value={userData.lastname}
             onChange={(e) => setuserData({...userData, lastname:e.target.value})}
             className="form-control" 
             id="exampleFormControlInput2"  />
        </div>

        <div className="mb-3">
             <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
             <input 
             type="email" 
             value={userData.email}
             onChange={(e) => setuserData({...userData , email:e.target.value})}
             className="form-control" 
             id="exampleFormControlInput3"  />
        </div>

        <div className="mb-3">
             <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
             <input 
             type="password" 
             value={userData.password}
             onChange={(e) => setuserData({...userData , password:e.target.value})}
             className="form-control" 
             id="exampleFormControlInput4"  />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>


    </div>
  );
}

export default Form;