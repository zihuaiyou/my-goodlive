import React from 'react'
import { useParams } from 'react-router-dom'
import DetailList from './DetailList';
import BuyAndStore from './BuyAndStore';
const Details = () => {
    const params = useParams();
    return (
        <div>
            <DetailList detailsId = {params.id}/>
            <BuyAndStore id = {params.id}/>
        </div>
    )
}

export default Details