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
            <div class="card" style={{width : "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">{props.restaurant.name}</h5>
                        <img src="https://picsum.photos/200/200?random=1"/>
                        <Link to="/restaurant">
                                <h5 onClick={()=>{handleClick()}}>go to {props.restaurant.name} page. </h5>
                            </Link>
                    </div>
            </div>
        </>
    )
}
