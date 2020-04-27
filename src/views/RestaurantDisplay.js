import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../store/appContext'
import RestaurantInfo from "../components/RestaurantDisplay/restaurantInfo"
import RestaurantProducts from '../components/RestaurantDisplay/restaurantProducts'
import NavbarDisplay from '../components/RestaurantDisplay/navdisplay'


export default function RestaurantDisplay({...props}) {
    const { store,actions } = useContext(Context)
    useEffect(()=>{
        actions.getRestaurant("http://localhost:5000/restaurantbyname/"+props.match.params.restaurantname)
    },[])

    

    return (
        <>
            <div className="container">
                <NavbarDisplay/>
                <div className="row pt-3">
                    <div className="col-md-12 p-3">
                        <h5>Restaurant</h5>
                        <hr></hr>
                        <ul className='pl-3 pr-3 pt-2'>
                            <RestaurantInfo />
                            <RestaurantProducts />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}