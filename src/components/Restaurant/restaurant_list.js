import React, { useContext } from 'react'
import { Context } from '../../../src/store/appContext'
import RestaurantCard from "./restaurant_card"

export default function RestaurantList() {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        !!store.allRestaurants&&
                            store.allRestaurants.map((element,i)=>{
                                return (<>
                                    <div className="card-deck col-4 my-1 px-1" key={i}> <RestaurantCard restaurant={element}/> </div>
                                    </>
                                )
                            })
                        
                    }
                    
                </div>
            </div>
        </>
    )
}