import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import Order from "./order_outer"



export default function OwnerOrders(props) {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(false)

    useEffect(() => {
        actions.getOrders(store.path + "/orderof/" + store.currentRestaurant.restaurantuser.id)
    }, [local])

    return (
        <>
            <div className="container-fluid">
                {/* Text block */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            {/* Titulo block */}
                            <div className="card-header card-header-primary">
                                <h3 className="card-title "><i className="fas fa-clipboard-list"></i> Tabla de Ordenes</h3>
                                <p className="card-category"> Esta pagina es para ver y actualizar las ordenes desde los usuarios</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">

                                    {/* Product Table */}
                                    <table className="table table-hover text-center">

                                        {/* Header */}
                                        <thead className="text-primary">
                                            <th scope="col">Ordenes</th>
                                        </thead>
                                        {
                                                local === false ?
                                                <div className="btn-group" role="group">
                                                    <a className="btn btn-primary text-white disabled"
                                                        role="button">
                                                        Ordenes en espera
                                                    </a>
                                                    <a className="btn btn-primary text-white"
                                                        role="button"
                                                        onClick={() => { setLocal(null) }} >
                                                        Ordenes canceladas
                                                    </a>
                                                    <a className="btn btn-primary text-white "
                                                        role="button"
                                                        onClick={() => { setLocal(true) }}>
                                                        Ordenes completadas
                                                    </a>
                                                </div>
                                                : local === null ?
                                                    <div className="button-group">
                                                        <a className="btn btn-primary text-white "
                                                            role="button"
                                                            onClick={() => { setLocal(false) }}  >
                                                            Ordenes en espera
                                                        </a>
                                                        <a className="btn btn-primary text-white disabled"
                                                            role="button">
                                                            Ordenes canceladas
                                                        </a>
                                                        <a className="btn btn-primary text-white "
                                                            role="button"
                                                            onClick={() => { setLocal(true) }}>
                                                            Ordenes completadas
                                                        </a>
                                                    </div>
                                                :
                                                <div className="button-group">
                                                    <a className="btn btn-primary text-white"
                                                        role="button"
                                                        onClick={() => { setLocal(false) }} >
                                                        Ordenes en espera
                                                    </a>
                                                    <a className="btn btn-primary text-white"
                                                        role="button"
                                                        onClick={() => { setLocal(null) }} >
                                                        Ordenes canceladas
                                                    </a>
                                                    <a className="btn btn-primary text-white disabled "
                                                        role="button">
                                                        Ordenes completadas
                                                    </a>
                                                </div>
                                            }

                                        {/* Body */}
                                        <tbody>
                                            {
                                                !!store.orders.length>0 &&
                                                store.orders.map((element, i) => {
                                                    return (<>
                                                        <Order elem={element} i={i} key={i} done={local} />

                                                    </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}