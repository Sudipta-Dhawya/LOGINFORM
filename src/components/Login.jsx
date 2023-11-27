  
import NavbarG from "./NavbarG";
import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
    const [name ,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [confirmPassword, setconfirmPassword] = useState("");
     const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState("");
     const [confirmPasswordError, setconfirmPasswordError] = useState("");
    const [about ,setAbout] = useState("");
    const [aboutError ,setAboutError] = useState("");
    const temp = "sudipta"
    const temp1 = "12345678"
    const handleName = (e) => {
        let name = e.target.value;
        if((name.length)!==5){
          setNameError("userNmae must be 7 character");
      }
        else if(!name.match(temp)){
            setNameError("username is not match");
        }
        else{
            setNameError("");
        }
       setName(name);
    };
    const handleEmail = (e) => {
        let email = e.target.value;
        
     setEmail(email);
    };
    const handlePassword = (e) => {
        let password =e.target.value;
        if(!password.match(temp1)){
            setPasswordError("password is not match");

        }
        else{
            setPasswordError("")
        }
        setPassword(password);
     
    };

    const handleconfirmPassword = (e) => {
      let confirmPassword =e.target.value;


      if(!confirmPassword){
        setconfirmPasswordError("Please enter Confirm Password. ");

        
     }
      else if(!confirmPassword.match(temp1)){
         setconfirmPasswordError("confirmPassword is not match");

         
      }
      else{
        setconfirmPasswordError("")
      }
       setconfirmPassword(confirmPassword);

      

   
  };

    const handleAbout = (p) => {
      console.log(p.target.value);
      const inputValue = p.target.value;
      if (inputValue.length <= 50) {
        // setAboutError("Plz Field The Empty")
        setAbout(inputValue);
      }
      else{
        setAboutError("")
      }
     
    };
    const handleSubmit = () => {
        if(!name.match(temp)){
            setNameError("Invalid Name ");
        }
       
        if(email.length== 0){
            setEmailError("Plz Field The Empty")
        }
         if(!password.match(temp1)){
            setPasswordError("Invalid password");
        }
        if(!confirmPassword){
          setconfirmPasswordError("Please enter Confirm Password.");
      }

        else if(!confirmPassword.match(temp1)){
          setconfirmPasswordError("confirmPassword is not match");
      }


        if(about.length== 0){
          setAboutError("Plz Field The Empty")
      }
      navigate('/sudipta');      
     
    };
  
    
  
    return (
      <div>
       
          <h1>Login Form</h1>
          <div></div>
          <div>
            <div>
              <label>Username:{<span style={{color:"red"}}>{nameError}</span>}</label>
              
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={name}
                onChange={handleName}
              />
            </div>
            <br /><br />
            <div>
              <label>Email:{<span style={{color:"red"}}>{emailError}</span>}</label>
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>
           <br /><br />
            <div>
              <label>Password:{<span style={{color:"red"}}>{passwordError}</span>}</label>
              
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <br /><br /><br />


            <div>
              <label>Confirm Password:{<span style={{color:"red"}}>{confirmPasswordError}</span>}</label>
              
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={handleconfirmPassword}
              />
            </div>









            <br /><br /><br />
            <div>
            <label>Write something about you :<span style={{color:"red"}}>{aboutError}</span></label>
            <br /><br />
      <input type="about" value={about} onChange={handleAbout}  style={{height:"200px",width:"700px"}} />
      <br /><br />
      <span style={{margin: "300px" , color:"red"}}>{about.length}/50</span>
    </div>
  
            <br /><br /> 
            <button onClick={()=>handleSubmit()}>Submit</button>
          </div>
        
     
    </div>
  )

  
}

export default Login