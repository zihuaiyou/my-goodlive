import React from 'react'
import Item from './Item';
import {nanoid} from 'nanoid'

const OrderView = (props) => {
    // console.log(props.data);
    return (
        <div>
            {props.data.map((elem,index) => {
                return <Item key={nanoid()} data = {elem}/>
            })}
        </div>
    )
}

export default OrderView;