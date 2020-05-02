import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function RestaurantCard(props) {
    const [local, setLocal] = useState(
        {
            path: "http://localhost:5000/restaurant/img/" + props.restaurant.logo
        }
    )

    return (
        <>
            <Link to={"/restaurant/" + props.restaurant.name.replace(/\s+/g, '_')}>
                <div className="card">
                    <div className="card-body">
                    <img src={local.path}
                        height="200px"
                        width="200px"
                        alt={props.restaurant.name} />
                        <h5 className="card-title">{props.restaurant.name}</h5>
                        <a className="btn btn-primary text-white"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </Link>

        </>
    )
}