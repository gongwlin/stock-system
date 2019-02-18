
export default function reducer1 (state={'a':'a','b':'b','c':'c'},action) {
    switch(action.type){
        case 'AD': 
            return state.concat(action.payload);
        case 'RE':
            return state.filter((item,idx) => idx !== action.payload);
        default:
            return state
    }
}