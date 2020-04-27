import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext"

import NavbarDisplay from '../components/RestaurantDisplay/navdisplay'
import RestaurantInfo from '../components/RestaurantDisplay/restaurantInfo'
import TableRowShopping from '../components/shoppingCart/rowshoppingcart'


export default function ShoppingCart() {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(false)
    useEffect(() => {
        actions.isAuthenticatedUser()
    }, [])

    return (

        <div className="container">

            <NavbarDisplay />
            {
                store.isAuthenticatedUser ?
                    <>
                        <RestaurantInfo />
                        <div className="row">
                            <div className="col">
                                <h1>the details of your order are here</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col" style={{ textAlign: "center" }}>Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            !!store.shoppingCart &&

                                            store.shoppingCart.map((element, i) => {
                                                return (<>
                                                    <TableRowShopping i={i} key={i} ready={local}/>
                                                </>
                                                )
                                            })

                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            menu
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{height:"250px"}}>  
                            footer
                            </div>
                        </div>
                       


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
        </div>
    )
}