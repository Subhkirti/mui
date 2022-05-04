
import { useState } from 'react'
import { Avatar, } from '@material-ui/core'
import { WhatsappShareButton } from 'react-share'
import { Modal, Box } from '@material-ui/core'
import { MoreVert, WhatsApp, ThumbUpSharp, ChatBubble } from '@material-ui/icons'
function Card(props) {
    const [value, setValue] = useState("rgb(100, 97, 97)")
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        backgroundColor: "white",
        padding: '1.5%',
        outline:'none',
    };

    return (
        <>
            <div className='card'>
                <div className="user">
                    <Avatar src={props.data.user}></Avatar>
                    <div className="name">
                        <h3>{props.data.name}</h3>
                        <p>{props.data.date}</p>
                    </div>
                    <MoreVert></MoreVert>
                </div>
                <img alt="photo" src={props.data.img}></img>
                <div className='footer'>
                    <blockquote>{props.data.quotes}</blockquote>
                    <div className="like">
                        <ThumbUpSharp style={{ color: value, cursor: "pointer" }} onClick={() => { setValue("red") }}></ThumbUpSharp>
                        <WhatsappShareButton url={props.data.img} >
                            <WhatsApp></WhatsApp>
                        </WhatsappShareButton>
                        <ChatBubble onClick={handleOpen}></ChatBubble>
                        <Modal
                            open={open}
                            onClose={handleClose}>

                            <Box sx={style}>
                                <input className='input' placeholder='You can write your comment here....'></input>
                            </Box>
                        </Modal>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Card;