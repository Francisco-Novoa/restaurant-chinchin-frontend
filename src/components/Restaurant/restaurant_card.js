import React, { useContext } from 'react'
import { Context } from '../../../src/store/appContext'
import { Link } from 'react-router-dom'

export default function RestaurantCard(props) {
    const { store, actions } = useContext(Context)
    
    const handleClick = ()=>{
        actions.handleRestaurantFocus(props.restaurant)

    }

    return (
        <>
            <Link to="/restaurant" onClick={()=>{handleClick()}}>
                <div className="card mb-3">
                    <img src="https://picsum.photos/200/200?random=1"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.restaurant.name}</h5>
                            <a className= "btn btn-primary text-white"  >go to {props.restaurant.name} page. </a>
                    </div>
                </div>
            </Link>
        </>
    )
}
