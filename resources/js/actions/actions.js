export const Increment = ()=>{
    return{
        type:"INCREMENT",
    }
}

export const SignupForm = (data)=>{
    console.log("signup action is executed");
    return {
        type:"SIGNUPFORM",
        payload:{name:data.nm,value:data.vl}
    }
}

export const SigninForm = (data)=>{
    console.log("signup action is executed");
    return {
        type:"SIGNINFORM",
        payload:{name:data.nm,value:data.vl}
    }
}

export const accessToken = (token)=>{
    console.log("signup action is executed");
    return {
        type:"ACCESSTOKEN",
        payload:token
    }
}

export const islogin = (status)=>{
    console.log("signup action is executed");
    return {
        type:"CHANGEIFLOGIN",
        payload:status
    }
}

export const add_update_user_detail = (status)=>{
    console.log("signup action is executed");
    return {
        type:"ADDUSERDETAILS",
        payload:status
    }
}



