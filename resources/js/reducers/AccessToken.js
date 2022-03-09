let initState = "";
const AccessToken = (state=initState,action)=>{
 switch (action.type) {
     case "ACCESSTOKEN":
         state = action.payload;
         return state;
     default:
         return state;
 }

}
export default AccessToken;