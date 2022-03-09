import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { islogin, add_update_user_detail } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
const Profile = () =>{
    let hs = useHistory();
    let isloginstatus = useSelector((state)=>{
        return state.IsLogin;
    });
    let username = useSelector((state)=>{
        return state.UserData;
    });
    let siteurl = useSelector((state)=>{
        return state.MainUrl;
    });
    let access_token = useSelector((state)=>{
        return state.AccessToken;
    });
    let dp = useDispatch();
    useEffect(()=>{
        if(!isloginstatus){
            hs.push('/');
        }
        axios.post(siteurl+"profile",{temp:"temp"},{headers:{"Authorization":`Bearer ${access_token}`}}).then(
            (res)=>{
                console.log(res);
                dp(add_update_user_detail(res.data.username))
            }
        ).catch((err)=>{
            console.log(err);
        });
    },[isloginstatus]);
    return (
        <>

            <div>
        <h3 className="text-center my=5 text-danger">Hi, {username}</h3>
        <p>You are now logged in.. </p>
            </div>

        </>
    );
}
export default Profile;