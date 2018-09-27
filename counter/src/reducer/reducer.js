export default (state = 0,action) => {
    switch(action.type){
        case "INCRESE":
            return state+1;
        case "DECRESE":
            return state-1;
        default:
            return state;
    }
}