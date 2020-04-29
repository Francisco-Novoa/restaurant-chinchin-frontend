import React, { useContext, useEffect, useState, useRef } from 'react'
import { Context } from "../store/appContext"

import NavbarDisplay from '../components/RestaurantDisplay/navdisplay'
import RestaurantInfo from '../components/RestaurantDisplay/restaurantInfo'
import TableRowShopping from '../components/shoppingCart/rowshoppingcart'


export default function ShoppingCart() {
    const { store, actions } = useContext(Context)
    const firstRef = useRef(null)
    const [local, setLocal] = useState({
        comentario: "",
        ready: false,
        total: 0
    })

    const handleChange = (e) => {
        const newlocal = { ...local }
        newlocal[e.target.name] = e.target.value
        setLocal(newlocal)
    }
    const Total = () => {
        let total = 0
        for (let i = 0; i < store.shoppingCart.length; i++) {
            total = (total + parseInt(store.shoppingCart[i].price)) * parseInt(store.shoppingCart[i].amount)
        }
        const newlocal = { ...local }
        newlocal.total = total
        setLocal(newlocal)
    }

    useEffect(() => {
        actions.isAuthenticatedUser()
        if (firstRef.current !== null) {
            firstRef.current.focus()
        }
        Total()
    }, [])

    const confirmOrder = () => {
        actions.sendOrder(
            store.path + "/neworder",
            store.shoppingCart,
            store.currentUser.user.id,
            store.restaurant.restaurant.id,
            local.comentario,
            local.total
        )
    }

    useEffect(() => {
        Total()
    }, store.shoppingCart)

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
                                                    <TableRowShopping i={i} key={i} ready={local} />
                                                </>
                                                )
                                            })

                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <span>Total: </span>
                                <span>{local.total}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="form-group">
                                    <label for="comentarios">Añada comentarios a su orden</label>
                                    <textarea
                                        ref={firstRef}
                                        className="form-control"
                                        id="comentarios"
                                        name="comentario"
                                        onChange={(e) => { handleChange(e) }}
                                        value={local.comentario}
                                        rows="3">
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => { confirmOrder() }}
                                >confirm</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ height: "250px" }}>
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