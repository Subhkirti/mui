import React, { useState } from 'react'
import { Home } from '@material-ui/icons'
import { Assignment } from '@material-ui/icons'
import { Group } from '@material-ui/icons'
import { useStoreState } from 'easy-peasy'
import { Storefront,Person,Settings,AccountBox,Brightness2} from '@material-ui/icons'
function LeftSide(){
  const styling=useStoreState((e)=>e)
  const [color,setColor]=useState(true)
  return (
    <div className='left' style={color?styling:{backgroundColor:"black",color:"white",transition:"0.6s"}}>
        <li><Home></Home> Homepage</li>
        <li><Assignment></Assignment> Pages</li>
        <li><Group></Group> Groups</li>
        <li><Storefront></Storefront> Marketplace</li>
        <li><Person></Person> Friends</li>
        <li><Settings></Settings> Settings</li>
        <li><AccountBox></AccountBox> Profile</li>
        <li><Brightness2></Brightness2>
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round" onClick={()=>setColor(!color)}></span>
        </label>
        </li>
    </div>
  )
}

export default LeftSide
