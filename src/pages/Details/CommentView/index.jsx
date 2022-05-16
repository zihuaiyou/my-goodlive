import React from 'react'
import Item from './Item' 
import {nanoid} from 'nanoid'
import './style.less'

const CommentView = (props) => {
    return (
        <div className='commemt'>
            <ul>
            {props.data.map((elem,index) => {
                return <Item data = {elem} key = {nanoid()}/>
            })}
            </ul>
            
        </div>
    )
}

export default CommentView