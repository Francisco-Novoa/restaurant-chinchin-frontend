import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../store/appContext'
import RestaurantInfo from "../components/RestaurantDisplay/restaurantInfo"
import RestaurantProducts from '../components/RestaurantDisplay/restaurantProducts'
import NavbarDisplay from '../components/RestaurantDisplay/navdisplay'


export default function RestaurantDisplay({ ...props }) {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getRestaurant("http://localhost:5000/restaurantbyname/" + props.match.params.restaurantname)
        console.log(store.shoppingCart)
        actions.addShoppingCart("",store.shoppingCart)
    }, [])

    return (
        <>
         <NavbarDisplay/>
            <div className="container fondo">
               
                <div className="row pt-3">
                    <div className="col-md-12 p-3">
                        <h5>Restaurant</h5>
                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">                        
                        <RestaurantInfo />                                                
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">                 
                        <RestaurantProducts />                        
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{ height: "250px" }}>
                       
                    </div>
                </div>
            </div>
        </>
    )
}