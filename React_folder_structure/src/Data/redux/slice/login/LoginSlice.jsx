import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     value: 10
}


export const loginSlice = createSlice({
    name: "login",
    initialState: initialState,

    reducers: {
        
        AddValue:(state)=>{
            state.value = state.value + 5
        },

        SubtractValue:(state)=>{
           state.value =  state.value - 5

        },

        ResetValue:(state)=> {
            state.value = initialState.value
        }


    }
})


export const {AddValue, SubtractValue, ResetValue } = loginSlice.actions
export default loginSlice.reducer