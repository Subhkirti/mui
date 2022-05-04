import React from 'react'

import { Home } from '@material-ui/icons'
import { Assignment } from '@material-ui/icons'
import { Group } from '@material-ui/icons'
import { Storefront,Person,Settings,AccountBox,Brightness2} from '@material-ui/icons'
import { ToggleOn } from '@material-ui/icons'
function LeftSide() {
  return (
    <div className='left'>
        <li><Home></Home> Homepage</li>
        <li><Assignment></Assignment> Pages</li>
        <li><Group></Group> Groups</li>
        <li><Storefront></Storefront> Marketplace</li>
        <li><Person></Person> Friends</li>
        <li><Settings></Settings> Settings</li>
        <li><AccountBox></AccountBox> Profile</li>
        <li><Brightness2></Brightness2> <ToggleOn ></ToggleOn></li>
    </div>
  )
}

export default LeftSide