import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
            toast.success("Blog Added Successfully")

        },

        setDelete: (state, action)=> {
             console.log(action.payload)
             state.datablog = state.datablog.filter((item)=> item.id !== action.payload)
        }

    }
})


export const {setBlog, setDelete} = BlogSlice.actions
export default BlogSlice.reducer