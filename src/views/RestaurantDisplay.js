import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'
import ModalLogin from '../components/modal_login'
import ModalRegister from '../components/modal_register'
import RestaurantInfo from "../components/RestaurantDisplay/restaurantInfo"
import RestaurantProducts from '../components/RestaurantDisplay/restaurantProducts'
import NavbarDisplay from '../components/RestaurantDisplay/navdisplay'


export default function RestaurantDisplay() {
    const { store, actions } = useContext(Context)
    useEffect(()=>{
        actions.updateShoppingCart("",store.shoppingCart)
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
                <ModalLogin />
                <ModalRegister />
            </div>
        </>
    )
}