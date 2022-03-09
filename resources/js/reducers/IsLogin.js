const intiState = false;
const IsLogin = (state=intiState,action)=>{
    switch (action.type) {
        case "CHANGEIFLOGIN":
            state=action.payload;
            return state;
    
        default:
            return state;
    }
}
export default IsLogin;