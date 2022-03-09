import React, { useEffect } from 'react';
import Header from './Header';
import '../../css/app.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Signup from './Signup';
import About from './About';
import Signin from './Signin';
import Footer from './Footer';
import Profile from './Profile';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { islogin, accessToken } from '../actions/actions';

const Root = () =>{
    let hs = useHistory();
    let isloginstatus = useSelector((state)=>{
        return state.IsLogin;
    });
    let dp = useDispatch();
    let siteurl = useSelector((state)=>{
        return state.MainUrl;
    });
    useEffect(()=>{
        if("access_token" in window.localStorage){
            let token = window.localStorage.getItem("access_token");
            axios.get(siteurl+"check_token",{headers:{"Authorization":`Bearer ${token}`}}).then(
                (res)=>{
                    console.log(res);
                    if(res.status == 200){
                        dp(accessToken(token));
                        dp(islogin(true));
                    }
            }).catch((err)=>{   
                console.log(err);
                if(err.response.status == 401){
                    window.localStorage.removeItem("access_token");
                    dp(islogin(false));
                }
            });
        }
    });
    
    return (
        
        <>
        
        {console.log("root render when all page is refreshed")}
        {console.log("login status",isloginstatus)}
           <Header />
           <Switch>
               <Route exact path="/signup" component={Signup} />
               <Route exact path="/" component={Signin} />
               <Route exact path="/profile" component={Profile} />
           </Switch>
           {/* <Footer /> */}
        </>
    );
}
export default Root;