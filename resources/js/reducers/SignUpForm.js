let InitialState = {name:"",email:"",password:"",c_password:""};
const SignUpForm = (state=InitialState,action)=>{
    switch (action.type) {
        case "SIGNUPFORM":
            console.log("form reducer is execute");
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
            
    
        default:
            return state;
    }
}
export default SignUpForm;