let initialState = "";
const UserData =(state=initialState,action) =>{
    switch (action.type) {
        case "ADDUSERDETAILS":
            state = action.payload;
            return state
    
        default:
            return state;
    }
}
export default UserData;