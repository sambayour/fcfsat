import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { accessToken, islogin } from '../actions/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Header = () =>{
    let isloginstatus = useSelector((state)=>{
        return state.IsLogin;
    });
    let access_token = useSelector((state)=>{
        return state.AccessToken;
    });
    let siteurl = useSelector((state)=>{
        return state.MainUrl;
    });
    let dp = useDispatch();
    let hs = useHistory();
    const clickHandler = (e)=>{
        e.preventDefault();
        
        let btntyp = e.target.getAttribute("data-btntype");
        document.getElementsByClassName("active")[0].classList.remove('active');
        e.target.classList.add("active");
        if(btntyp == "signup"){
            hs.push("/signup");
        }
        else if(btntyp == "signin"){
            hs.push("/");
        }
        else if(btntyp == "profile"){
            hs.push("/profile");
        }
        else if(btntyp == "Logout"){
            axios.post(siteurl+'logout',{temp:"temp"},{headers:{"Authorization":`Bearer ${access_token}`}}).then(
                (res)=>{
                    console.log(res);
                    dp(islogin(false));
                    dp(accessToken(""));
                    window.localStorage.removeItem("access_token");
                }
            ).catch((err)=>{
                console.log(err);
            });
        }
    }
    return (
        <>
            <div className="container-fluid  p-0 text-white" id="container-fluid">
                <div className="row no-gutters pl-3">
                <div className="col-sm-3">
                        <h4 id="header_tag">Laravel 8 & React.Js Mini Project</h4>
                    </div>
                    <div className="col-sm-2  offset-7 text-center">
                        <ul id="header_ul">
                            {(isloginstatus == true )?<> <li><a id="header_btn" data-btntype="profile" className="active" onClick={clickHandler}>profile</a></li>
                            <li><a id="header_btn" data-btntype="Logout" className="" onClick={clickHandler}>Logout</a></li>
                            </>:<>
                             <li><a id="header_btn" data-btntype="signin" className="active" onClick={clickHandler}>Sign in</a></li>
                            <li><a id="header_btn" data-btntype="signup" className="" onClick={clickHandler}>Sign up</a></li>
                            </>}
                            
                        </ul>
                        
                    </div>

                   
                </div>
            </div>
            {console.log("in header access token :",access_token)}
        </>
    );
}
export default Header;