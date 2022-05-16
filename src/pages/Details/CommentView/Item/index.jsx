import React from 'react'
import './style.less' 
import Star from '../../../../components/Star'

const Item = (props) => {
    // console.log(props.data);
    return (
        <div className='comment-item'>
            <h3>
                <i className='icon-user'></i>
                {props.data.username}
            </h3>
            <Star starNum = {props.data.star}/>
            <p>
            {props.data.comment}
            </p>
        </div>
    )
}

export default Item