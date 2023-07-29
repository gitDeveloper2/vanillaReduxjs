export const actionCreator=(item)=>{
   
     return  {type:"adsd",action:21}
    
}


export const thunkActionCreator=(item)=>{

    return async function(dispatch,getstate){
        setTimeout(()=>{dispatch ({type:"add"})},2000)
    }
}

