import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'

export default function RestaurantInfo(props) {
    const { store} = useContext(Context)
    const [local, setLocal] = useState(
        {   
            contact:false,
            user:store.restaurantFocus
        }
    )

    const handleContact =()=>{
        let newLocal={...local}
        newLocal.contact=!local.contact
        setLocal(newLocal)
    }

    return(
        <>
        <div className="container-fluid">
            <div className="row" style={{height:"100%"}}>
                <div className="col  d-flex justify-content-center">
            
                    <h1 class="display-1">{local.user.name}</h1>
                </div>
            </div>
            <div className="row" style={{height:"100%"}}>
                <div className="col  d-flex justify-content-end">
                <small class="text-muted" onClick={()=>{handleContact()}}>contact</small>
                </div>
            </div>
            { local.contact?
            <>
            <div className="row d-flex justify-content-end">
                <div className="col-2 bg-light border-bottom">
                    <h6>Email</h6>
                </div>
                <div className="col-2">
                    <h4>{local.user.email}</h4>
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <div className="col-2 bg-light border-bottom">
                    <h6>Telefono</h6>
                </div>
                <div className="col-2">
                    <h6>{local.user.phone}</h6>
                </div>
            </div>
            {
                !!local.user.address?
                <div className="row d-flex justify-content-end">
                <div className="col-2 bg-light border-bottom">
                    <h6>Direccion</h6>
                </div>
                <div className="col-2">
                    <h6>{local.user.address}</h6>
                </div>
            </div>
                :""
            }
            </>
            :""
            }
        </div>

        </>
    )}