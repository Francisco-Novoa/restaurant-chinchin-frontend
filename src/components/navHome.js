import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'
import ModalLogin from './modal_login'
import ModalRegister from './modal_register'
import ChinChin from './chinchin'

export default function NavbarHome() {
    const { store, actions } = useContext(Context)
    return (
        < div className="row pt-3" >
            <div className="col-md-9">
                <div className="logo">
                    <ChinChin/>
                </div>
            </div>
            {
                (store.isAuthenticatedUser || store.isAuthenticatedRestorantUser || store.isAuthenticatedAdmin) ?
                    <div className='d-flex justify-content-between text-muted pt-1 btn' onClick={() => actions.Logout()}>
                        <div className="hand" onClick={() => actions.Logout()}>Logout</div>
                        <i className="fas fa-sign-out-alt ml-3" onClick={() => actions.Logout()}></i>
                    </div>
                    :

                    <div className="col-md-3 d-flex justify-content-end">
                        <button className='btn btn-primary form-control mr-2' data-toggle="modal" data-target="#modal_login">Login</button>
                        <button className='btn btn-primary form-control' data-toggle="modal" data-target="#modal_register">Register</button>
                    </div>
            }
            <ModalLogin />
            <ModalRegister />
        </div >
    )
}

