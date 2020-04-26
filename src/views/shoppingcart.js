import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext"
import ModalLogin from '../components/modal_login'
import ModalRegister from '../components/modal_register'
import NavbarDisplay from '../components/RestaurantDisplay/navdisplay'

export default function ShoppingCart() {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.isAuthenticatedUser()
    }, [])

    return (

        <div className="container">

            <NavbarDisplay />
            {
                store.isAuthenticatedUser ?
                    <>
                        holi
                    </>
                    :
                    <>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <h1>para ver tu carrito de compra</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center m-0">
                                <img
                                    src={require("../resource/img/lock.png")}
                                    height="450px"
                                    alt="LOCK" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <h1>debes hacer login con una cuenta de usuario</h1>
                            </div>
                        </div>




                    </>
            }
            <ModalLogin />
            <ModalRegister />
        </div>
    )
}