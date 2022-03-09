let initialState = 10;
const IncrementDecrement = (state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
    
        default:
            return state;
    }

}
export default IncrementDecrement;

