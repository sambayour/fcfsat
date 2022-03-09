import { combineReducers } from "redux";
import IncrementDecrement from "./IncrementDecrement";
import SignUpForm from './SignUpForm';
import MainUrl from "./MainUrl";
import SignInForm from "./SignInForm";
import AccessToken from "./AccessToken";
import IsLogin from "./IsLogin";
import UserData from "./UserData";

const RootReducer = combineReducers(
    {
        IncrementDecrement,
        SignUpForm,
        MainUrl,
        SignInForm,
        AccessToken,
        IsLogin,
        UserData
        
    }
);

export default RootReducer;
