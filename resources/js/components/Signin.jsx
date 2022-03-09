import Reatc, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SigninForm, accessToken, islogin } from '../actions/actions';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Signin = () =>{
    let hs = useHistory();
    let isloginstatus = useSelector((state)=>{
        return state.IsLogin;
    });
    useEffect(()=>{
        if(isloginstatus){
            hs.push('/profile');
        }
    });
    let access_token = useSelector((state)=>{
        return state.AccessToken;
    })
    let siteurl = useSelector((state)=>{
        return state.MainUrl;
    });
    let signin_data =  useSelector((state)=>{
        return state.SignInForm;
    });
    let dp = useDispatch();
    let sigInFromChangeHandler = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        dp(SigninForm({nm:name,vl:value}));
            
       
    }


    const sigInFormClick = (e)=>{
        e.preventDefault();
        if(signin_data.email == "" || signin_data.password == ""){
            alert("All fields are required.");
        }
        else{
            axios.post(siteurl+'login',signin_data).then(
                (res)=>{
                    console.log(res);
                    if(res.status == 200){
                        let token = res.data.success.token;
                        dp(accessToken(token));
                        window.localStorage.setItem('access_token',token);
                        dp(islogin(true));
                        
                    }
                }
            ).catch((err)=>{
                console.log("this is error",err.response.status);  
                if(err.response.status == 401){
                    alert("Please Enter valid email and passwor");
                }
            });
        }
    }


    return(
        <>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-5">
                        <div id="signup_mdiv" className="">
                            <p className="text-center" id="form_heading">Sign In</p>
                     

                         <div className="mb-3">
                         <label className="form-label text-dark">Email address</label>
                         <input type="email" className="form-control" name="email" value={signin_data.email} onChange={sigInFromChangeHandler} id="exampleFormControlInput1" placeholder="name@example.com" />
                         </div>

                         <div className="mb-3">
                         <label className="form-label text-dark">Password</label>
                         <input type="password" className="form-control" name="password" value={signin_data.password} id="exampleFormControlInput1" onChange={sigInFromChangeHandler} placeholder="Enter your password" />
                         </div>


                         <input type="submit" onClick={sigInFormClick} className="btn btn-primary" id="create_account_btn" value="Sign In"/>
                         </div>
             
                    
                </div>
            </div>
        </div>
        {console.log(signin_data)}
        {console.log("react_store token",access_token)}
        </>
    );
}

export default Signin;