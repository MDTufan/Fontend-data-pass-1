
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[user,setUser]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(data => setUser(data))
    
  },[]);

  const handelsubmit=(e)=>{
    e. preventDefault()
    const form=e.target;
    
    const name=form.name.value;
    const email=form.email.value;
    const alluser={name,email};
   

    fetch('http://localhost:3000/user',{
      method:"POST",
      headers:{'content-type':"application/json"},
      body:JSON.stringify(alluser)
    })
    .then(res => res.json())
    .then(data => {
      // const newuser=[...user,data]
      // setUser(newuser)
      console.log(data)
      if(data.acknowledged){
        alert("Users Added SuccessFully.")
      }
    })

    form.reset();
  }
  
  return (

    
    <div className='all-1'>
    
    {
      user.map(sUser => <li key={sUser.name}>{sUser.name}</li>)
    }

    <form action=""  onSubmit={handelsubmit}>
      Name: <br />
    <input type="text" name="name" id="" placeholder='Enter Your Name' />
    <br />
    Email:<br />
    <input type="email" name="email" id=""  placeholder='Enter Your Email'/>
    <br />
    <br />
    <button type='submit'>Add User</button>

    </form>

    </div>
     
    
      
  )
}
    
export default App
