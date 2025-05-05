import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";


const initialState = {
    datablog: [],
    error: null,
    loading: false
}




export const BlogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        setBlog: (state, action)=>{
            // console.log(action.payload)
            state.datablog.push(action.payload)

        }

    }
})


export const {setBlog} = BlogSlice.actions
export default BlogSlice.reducer