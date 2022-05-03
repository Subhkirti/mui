import React from 'react'
import { AppBar, TextField, styled,Toolbar } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { MailTwoTone } from '@material-ui/icons';
import { Notifications } from '@material-ui/icons';


const StyledTodo=styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

function Nav() {
  return (
    <>
    <AppBar className="nav-bar" position="fixed" color="secondary">
        <StyledTodo>
            <Typography variant='h5' sx={{display:{xs:"none",sm:"block"}}}>Navbar</Typography>
            {/* <PetsTwoTone sx={{display:{xs:"block",sm:"none"}}}></PetsTwoTone> */}
            <TextField classname="inp" label="Search..." variant="standard" />
            <div className='icons'>
            <Badge  badgeContent={2} color="primary">
                <MailTwoTone></MailTwoTone>
            </Badge>
            <Badge badgeContent={5} color="primary">
                <Notifications></Notifications>
            </Badge>
            <Avatar src="data:image/jpeg;base64,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"></Avatar>
            </div>
        </StyledTodo>
    </AppBar>
    </>
  )
}

export default Nav;