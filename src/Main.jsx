import React from 'react'
import { Api } from './Api'
import { Avatar, } from '@material-ui/core'
import { MoreVert,Share,ThumbUpSharp,ChatBubble} from '@material-ui/icons'

function Main() {
    return (
   
        <div className='main'>
            {Api.map((e)=>{
                return(
                    <>
            <div className='card'>
                <div className="user">
                    <Avatar src={e.user}></Avatar>
                    <div className="name">
                        <h3>{e.name}</h3>
                        <p>{e.date}</p>
                    </div>
                    <MoreVert></MoreVert>
        
                </div>
                <img  src={e.img}></img>
                <div className='footer'>
                     <blockquote>{e.quotes}</blockquote>
                    <div className="like">
                        <ThumbUpSharp onClick></ThumbUpSharp>
                        <Share></Share>
                        <ChatBubble></ChatBubble>5 Comments

                    </div>
                  
                </div>
            </div>
            </>
            )
        })}
        </div>
    )
}

export default Main