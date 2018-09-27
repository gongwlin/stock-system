/*this file store some action*/
export const ADD='ADD';
export const CHANGE='CHANGE';
export const DELETETODO='DELETODO';
export const COUNT='COUNT';

export function add(name){
    return {
        type:ADD,
        name:name
    }
};


export function deletetodo(index){
    return {
        type:DELETETODO,
        index
    }
};

export function change(index){
    return {
        type:CHANGE,
        index
    }
}


export function count(){
    return {
        type:COUNT
    }
}
//延迟增加TODO ITEM

export const addTimeout = (name)=>{
    return (dispatch)=>{
        setTimeout(()=>dispatch(add(name)),2000)
    }
}


