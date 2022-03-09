let InitialState = {email:"",password:""};
const SignInForm = (state=InitialState,action)=>{
    switch (action.type) {
        case "SIGNINFORM":
            console.log("form reducer is execute");
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
            
        default:
            return state;
    }
}
export default SignInForm;