//here import redux and take the method createStore
const redux = require("redux");
const createStorage = redux.createStore;
//the first value for our store
const firstStore ={
    name:"Person 1",
    address :"Blumenstrasse",
    job:"worker"
}
const reducer = (state = firstStore,action)=>{
    if(action.type==="CHANGE_NAME"){
        return ({
            ...state,
            name:action.value
        })
    }
    if(action.type==="CHANGE_ADDRESS"){
        return ({
            ...state,
            address:action.value
        })
    }
    return state;
}
//Create storage wth the redux function createStore
const store = createStorage(reducer);
console.log(store.getState());
//subscribe
store.subscribe(()=>{
    console.log('Store has been updated', store.getState())
})
//Dispatch Actions
store.dispatch({
    type:"CHANGE_NAME",
    value:"Name from persons changed"
})
// console.log(store.getState());
store.dispatch({
    type:"CHANGE_ADDRESS",
    value:"Tallinn"
})
// console.log(store.getState());





