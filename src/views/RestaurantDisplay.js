import React from 'react'
import { Link } from 'react-router-dom'
import ModalLogin from '../components/modal_login'
import ModalRegister from '../components/modal_register'
import RestaurantInfo from "../components/RestaurantDisplay/restaurantInfo"
import RestaurantProducts from '../components/RestaurantDisplay/restaurantProducts'
import NavbarHome from '../components/navHome'

export default function RestaurantDisplay() {
    return (
        <>
            <div className="container">
                <NavbarHome />
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
                <nav className="navbar fixed-bottom navbar-light justify-content-end">
                    <Link to='/business' >Create business account</Link>
                </nav>
            </div>
        </>
    )
}