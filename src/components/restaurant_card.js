import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export default function RestaurantCard() {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div class="card" style={{width : "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">Here will go Restaurants</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-secondary">to restaurant display</a>
                    </div>
            </div>
        </>
    )
}
