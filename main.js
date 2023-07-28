const appstore=window.RTK


export const counterSlice=appstore.createSlice({

    name:"counter",
    initialState:{value:1},
    reducers:{
        increment:(state)=>{
            console.log("called")
            state.value +=1;
        }
    }
})

export const {increment} =counterSlice.actions

export default counterSlice.reducer
export const store=appstore.configureStore({reducer:{counter:counterSlice.reducer}})


store.dispatch(increment())

console.log(store.getState())