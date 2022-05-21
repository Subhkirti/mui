import React from 'react'
import { Api } from './Api'
import Card from './card'

function Main() {
    return (
        <div className='main'>
            {
                Api.map((e)=>{
                return <Card data={e}/>
            })}
        </div>
    )
}

export default Main
