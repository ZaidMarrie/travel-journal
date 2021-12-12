import React from 'react'
import pindropIcon from './img/pindrop.png'

function Card(props) {
    console.log(props)
    return (
        <div className='card flex'>
            <div className='card__img'>
                <img src={props.item.imageUrl} alt={props.item.title} />
            </div>
            <div className='card__content'>
                <div className='location flex'>
                    <img src={pindropIcon} alt='pindrop icon' className='pindrop-icon' />
                    <p className='location__country'>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} target='_blank' className='location__url'>View on Google Maps</a>
                </div>
                <h2 className='card__title'>{props.item.title}</h2>
                <p className='card__date'>{props.item.startDate} - {props.item.endDate}</p>
                <p className='card__desc'>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Card