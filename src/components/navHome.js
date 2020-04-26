import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import ModalLogin from './modal_login'
import ModalRegister from './modal_register'
import ChinChin from './chinchin'

export default function NavbarHome() {
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    const { store, actions } = useContext(Context)
    return (
        < div className="row pt-3 mr-2" >
            <div className="col">
                <div className="logo">
                    <ChinChin />
                </div>
            </div>
            {
                (store.isAuthenticatedUser || store.isAuthenticatedRestorantUser) ?
                    <div className="col-4 d-flex justify-content-end pt-1 btn-group" role="group">
                        <button
                            className='btn btn-secondary form-control mr-2'
                            onClick={() => actions.Logout()}>
                            Logout<i className="fas fa-sign-out-alt ml-3" ></i>
                        </button>
                    </div>
                    :

                    <div className="col-md-4 d-flex justify-content-end btn-group" role="group">
                        <button className='btn btn-primary form-control mr-2'
                            data-toggle="modal"
                            data-target="#modal_login"
                            onClick={() => { setLogin(!login) }}
                        >
                            Login
                            </button>
                        <button className='btn btn-primary form-control mr-2'
                            data-toggle="modal"
                            data-target="#modal_register"
                            onClick={() => { setRegister(!register) }}>
                            Register
                            </button>
                    </div>

            }

            <ModalLogin login={login} />
            <ModalRegister register={register} />
        </div >
    )
}

