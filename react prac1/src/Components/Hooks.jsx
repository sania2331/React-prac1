import React from 'react'
import { useState } from 'react'
export const Hooks = () => {
  
const [incount , setInCount]=useState(0)
const [decount , setDeCount]=useState(0)
  return (
  <div>
    <h2> IncrementCount: {incount}</h2>
    <button onClick={()=> setInCount(incount + 1)}>Counter</button>
<h2> Decrement count {decount}</h2>

    <button onClick={()=> setDeCount(decount - 1)}>Counter</button>
  </div>
  )
}
