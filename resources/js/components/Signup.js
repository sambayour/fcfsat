import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SignupForm } from '../actions/actions';
import axios from 'axios';
import ValidationErrordisp from './ValidationErrordisp';
import { useHistory } from 'react-router-dom';


function Signup() {
    let hs = useHistory();

    let [validationError,setvalidationError] = useState([]);
    // let [isError,setIsError] = useState(false);
    let siteurl = useSelector((state)=>{
        return state.MainUrl;
    });
    // signup form data reducer
    let sign_up_data =  useSelector((state)=>{
       return state.SignUpForm;
   });
   let dp = useDispatch();

//    end

//    signup form data get handler start
    const  signupFormHandler = (e)=>{
        e.preventDefault();
        let name = e.target.name;
        let val = e.target.value;
        console.log(name);
      
        dp(SignupForm({nm:name,vl:val}));
        console.log(sign_up_data);

    }

// end

// sign form submit click handler
const signupOnClickHandler = (e) =>{
    e.preventDefault();
    setvalidationError([]);
    if(sign_up_data.name == "" || sign_up_data.email == "" || sign_up_data.password == "" || sign_up_data.c_password == ""){
        alert("all fields are required");
    }
    else if(sign_up_data.password !== sign_up_data.c_password){
        alert("password and confirm password not match");
        document.getElementById("cpassword").focus();
    }
    else{
        axios.post(siteurl+'register',sign_up_data).then((res)=>{
            console.log(res);
            if(res.status == 203){
                console.log(res.data.error);
                let errors = res.data.error;
                let key = null;
                for(key in errors){
                    console.log(errors[key]);
                    let k=null;
                    for(k in errors[key]){
                        setvalidationError((pr)=>{
                            return[
                                ...pr,
                                errors[key][k]
                            ]
                        });
                    }
                }
    
                 
            }
            else if(res.status == 200){
                alert("Registeration success");
                hs.push("/");
            }
        }).catch(
            (err)=>{
                console.log(err);
            }
        );
    }
 
}

// end
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-5">
                
                    <div id="" className="mt-3 text-danger">
                        <ul className="pl-5">
                        {validationError.map((v,k)=>{
                        return <li className="">{v}</li>
                        })}
                        </ul>
               
                    </div>
                    
                    <div id="signup_mdiv" className="">
                         <p className="text-center" id="form_heading">Create an account</p>
                         <div className="mb-3">
                            <label className="form-label text-dark">Name</label>
                            <input type="text" className="form-control" value={sign_up_data.name} name="name" onChange={signupFormHandler} placeholder="Enter your name" />
                         </div>

                             <div className="mb-3">
                             <label className="form-label text-dark">Email address</label>
                             <input type="email" className="form-control" value={sign_up_data.email} name="email" onChange={signupFormHandler} placeholder="name@example.com" />
                             </div>

                             <div className="mb-3">
                             <label className="form-label text-dark">Password</label>
                              <input type="password" className="form-control" value={sign_up_data.password} name="password"  onChange={signupFormHandler} placeholder="Enter your password" />
                             </div>

                            <div className="mb-3">
                            <label className="form-label text-dark">Confirm Password</label>
                                 <input type="password" className="form-control" id="cpassword" value={sign_up_data.c_password} name="c_password"  onChange={signupFormHandler} placeholder="Enter confirm passowr" />
                            </div>

                             <input type="submit" onClick={signupOnClickHandler} className="btn btn-primary" id="create_account_btn" value="Create Account"/>
                        </div>
                         
                    
                </div>
                
                
            </div>
         
        </div>
       
    );
}

export default Signup;


