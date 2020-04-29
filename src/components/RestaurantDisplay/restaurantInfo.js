import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'

export default function RestaurantInfo(props) {
    const { store } = useContext(Context)
    const [local, setLocal] = useState(
        {
            contact: false,
            user: false
        }
    )

    const handleContact = () => {
        let newLocal = { ...local }
        newLocal.contact = !local.contact
        setLocal(newLocal)
    }

    return (
        <>
            {!!store.restaurant.restaurant &&
                <div className="container-fluid">
                    <div className="row" style={{ height: "100%" }}>
                        <div className="col  d-flex justify-content-end">
                            <small class="text-muted" onClick={() => { handleContact() }}>contact</small>
                        </div>
                    </div>
                    {local.contact ?
                        <>
                            <div className="row d-flex justify-content-end">
                                <div className="col-2 bg-light border-bottom">
                                    <h6>Email</h6>
                                </div>
                                <div className="col-2">
                                    <h4>{store.restaurant.restaurant.email}</h4>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end">
                                <div className="col-2 bg-light border-bottom">
                                    <h6>Telefono</h6>
                                </div>
                                <div className="col-2">
                                    <h6>{store.restaurant.restaurant.phone}</h6>
                                </div>
                            </div>
                            {
                                !!local.user.address ?
                                    <div className="row d-flex justify-content-end">
                                        <div className="col-2 bg-light border-bottom">
                                            <h6>Direccion</h6>
                                        </div>
                                        <div className="col-2">
                                            <h6>{store.restaurant.restaurant.address}</h6>
                                        </div>
                                    </div>
                                    : ""
                            }
                        </>
                        : ""
                    }
                </div>
            }

        </>
    )
}