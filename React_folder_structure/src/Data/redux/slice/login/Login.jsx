import React from 'react'
// import dispatch from 'useDispatch'
import { useSelector, useDispatch } from 'react-redux'
import { AddValue, SubtractValue, ResetValue } from './LoginSlice'


const Login = () => {
  
  const data = useSelector(state=> state.login.value)
  const dispatch = useDispatch()
 
  return (
    <div>

       <span>{data}</span>

       <button onClick={()=>dispatch(AddValue())} >Increament</button>

       <button onClick={()=>dispatch(SubtractValue())} >Decrement</button>

       <button onClick={()=>dispatch(ResetValue())} >Reset</button>

    </div>
  )
}

export default Login