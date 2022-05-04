import React from 'react';
import { Chats } from './chats';
import { Avatar } from '@material-ui/core';

function RightSide() {
    return (
        <div className='right'>
            <div className='friends'>
                <p>Online Friends</p>
                <ul className='avatar'>
                    <li><Avatar src="https://thumbs.dreamstime.com/b/young-hispanic-boy-walking-park-concept-strolling-foreign-student-118925868.jpg"></Avatar></li>
                    <li> <Avatar src="https://i.pinimg.com/474x/93/ee/cf/93eecfdf010bbedda6ef672ea1de9ff7.jpg"></Avatar></li>
                    <li> <Avatar src="https://i.pinimg.com/originals/4e/5d/b7/4e5db7563e77b90fd948a570e7ce87fe.jpg"></Avatar></li>
                    <li> <Avatar src="https://cf.girlsaskguys.com/q1828421/46956514-bda9-4517-ac33-4c20079bd751.jpg"></Avatar></li>
                    <li> <Avatar src="https://image.shutterstock.com/image-photo/businessman-glasses-showing-smile-260nw-1685161834.jpg"></Avatar></li>
                </ul>
            </div>
            <p>Latest Photos</p>
            <div className='photos'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PuiqNEzD3I8lBN6v0czg9qRywu-F4393AQ&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6j2HJFoqyeG2oCSq4r9SGVFplMB86bvWQQmu8RvRUwCSHIsYmWUBHdif_O7ygsbB6Rc&usqp=CAU" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYXuKPTN8A9Wbu_WFuE2TkqkjSnRU8E95EF47yYr-jdi-z-6Db78be7vsaxkpjW9jm24&usqp=CAU" alt="" />
            </div>
            <p>Latest Conversations</p>
        {Chats.map((e)=>{return(
            <div className='chats'>
                <Avatar src={e.src}></Avatar>
                <blockquote className='views'>{e.chat}</blockquote>
            </div>
        )})}

        </div>
    )
}

export default RightSide