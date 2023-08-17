// import {createStore} from 'redux'
import {createSlice,configureStore} from '@reduxjs/toolkit'
const initialState={
    counter:0,
    showCounter:true,
}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state,action) {
            state.counter=state.counter+action.payload;
        },
        toggleCounter(state) {
            state.showCounter=!state.showCounter;
        }
    }
})
// const counterReducer=(state=initialState,action)=>{
//     if(action.type==='increment') {
//         return{
//             counter:state.counter+1,
//             showCounter:state.showCounter

//         }
//     }
//     if(action.type==='increase') {
//         return{
//             counter:state.counter+action.amount,
//             showCounter:state.showCounter

//         }
//     }

//     if(action.type==='decrement'){
//         return{
//             counter:state.counter-1 ,
//             showCounter:state.showCounter

//         }
//     }
//     if(action.type==='toggle'){
//         return{
//             counter:state.counter ,
//             showCounter:!state.showCounter

//         }
//     }
//     return state;


// }
// const store =createStore(counterSlice.reducer)
const initialAuthState={
    isAuthenticated:false,
}
const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state) {
            state.isAuthenticated=true
        },
        logout(state) {
            state.isAuthenticated=false
        }
    }
})
export const counterActions=counterSlice.actions; //for exporting actions 
export const authActions=authSlice.actions;
const store=configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authSlice.reducer,
    }
});
export default store

