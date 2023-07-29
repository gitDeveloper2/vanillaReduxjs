import { actionCreator } from "./app/ActionCreators.js";
// import { thunkActionCreator } from "./app/ActionCreators.js";
const appstore=window.RTK
export const asyncThunk=appstore.createAsyncThunk("thunk/thunkfetch",async ()=>{

        const response =await fetch('https://jsonplaceholder.typicode.com/todos')
        let data=await response.json();
        return data;  
 
        
});

export const counterSlice=appstore.createSlice({

    name:"counter",
    initialState:{data:[],status:"unverified"},
    reducers:{
        increment:(state,action)=>{
            console.log(action)
           if(action.payload.type=="add"){
            state.value +=1;
           }else{
            state.value +=20;
           }
           
        }
    },
    extraReducers:builder=>{
        builder.addCase(asyncThunk.pending,(state,action)=>{
            state.status="pending"
        }).addCase(asyncThunk.fulfilled,(state,action)=>{
            state.status="fulfiled"
            let arr=[...state.data]
          
            for (let obj of action.payload){
                arr.push(obj)
            }
            
            state.data=arr
        })
    }
})


export const {increment, decrement} =counterSlice.actions

export default counterSlice.reducer
export const store=appstore.configureStore({reducer:{counter:counterSlice.reducer}})

store.subscribe((data)=>{
    console.log(store.getState())
})


const thunkActionCreator=(item)=>{

    return async function(dispatch,getstate){
        setTimeout(()=>{dispatch (increment({type:"adds",payload:21}))},2000)
    }
}
// store.dispatch(increment({type:"adds",payload:21}))
// store.dispatch(thunkActionCreator("data"))
store.dispatch(asyncThunk())
store.dispatch(asyncThunk())
store.dispatch(asyncThunk())

// store.dispatch(actionCreator("addd"))



async function fxn(){
setTimeout(()=>{console.log("long runninig process")},4000)
}