import React from 'react'
import { useParams } from 'react-router-dom'
import DetailList from './DetailList';

const Details = () => {
    const params = useParams();
    return (
        <div>
            <DetailList detailsId = {params.id}/>
        </div>
    )
}

export default Details