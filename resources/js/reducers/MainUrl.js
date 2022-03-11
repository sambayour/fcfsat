const initState = process.env.MIX_ENDPOINT_URL;
const MainUrl = (state=initState,action)=>{
    switch (action.type) {
        case "CHANGE":
             break;
    
        default:
            return state;
    }
}

export default MainUrl;