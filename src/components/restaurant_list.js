import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import RestaurantCard from "./restaurant_card"

export default function RestaurantList() {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        !!store.allRestaurants&&
                            store.allRestaurants.map((element,i)=>{
                                return (<>
                                    <div className="col-3 my-1 px-1" key={i}> <RestaurantCard/> </div>
                                    </>
                                )
                            })
                        
                    }
                    
                </div>
            </div>
        </>
    )
}