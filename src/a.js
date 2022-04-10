import { Autocomplete } from '@mui/material'
import React, { useState } from 'react'

function A() {
    const [first, setFirst] = useState(true)
  return (
    <div>
        <form>
            <input type="file" name="" id="" disabled={first}/>
            <input type="checkbox" name="" id="" disabled= {first ? true : false} onChange={()=>setFirst(!first)} checked={!first}/>
            <input type="file" name="" id="" disabled={!first} />
            <input type="checkbox" name="" id="" disabled= {!first ? true : false} onChange={()=>setFirst(!first)} checked={first}/>
        </form>
    </div>
  )
}

export default A