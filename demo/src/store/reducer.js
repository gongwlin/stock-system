
export default function reducer (state,action) {
    switch(action.type){
        case 'ADD': 
            return state.concat(action.payload);
        case 'REMOVE':
            return state.filter((item,idx) => idx !== action.payload);
        default:
            return state
    }
}