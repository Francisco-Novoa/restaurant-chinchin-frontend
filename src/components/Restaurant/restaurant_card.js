import React from 'react'
import { Link } from 'react-router-dom'

export default function RestaurantCard(props) {
    return (
        <>
            <Link to={"/restaurant/"+props.restaurant.name.replace(/\s+/g, '_')}>
                <div className="card">
                        <img src="https://picsum.photos/200/200?random=1"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.restaurant.name}</h5>
                            <botton className="btn btn-primary text-white">saber mas </botton>
                        </div>
                    </div>
            </Link>
            
        </>
    )
}
