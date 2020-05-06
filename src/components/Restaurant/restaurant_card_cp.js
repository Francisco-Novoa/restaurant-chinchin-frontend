import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../store/appContext'

export default function RestaurantCard_cp(props) {
    const { actions } =  useContext(Context)
    
    useEffect(()=>{
      if(props.trigger==true){actions.getCurrentRestaurant()}
    },[props.trigger])

    return (
        <>
                <div className="card">
                    <div className="card-body" style={{width:"210px"}}>
                        <div className="d-flex justify-content-between">
                        <img src={"http://localhost:5000/restaurant/img/" + props.restaurant.logo}
                            height="200px"
                            width="200px"
                            alt={props.restaurant.name} />
                        </div>
                            
                    
                        <h5 className="card-title">{props.restaurant.name}</h5>
                        <div className="d-flex justify-content-end">
                        <a className="btn btn-primary text-white"><i className="fas fa-shopping-cart"></i></a>
                        </div>

                    </div>
                </div>
        </>
    )
}