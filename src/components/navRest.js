import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import ModalRegisterRestaurant from "../components/modal_register_restaurant"
import ModalLoginRestaurant from "../components/modal_login_restaurant"
import ChinChin from './chinchin'

export default function NavbarRest() {
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    const { store, actions } = useContext(Context)
    return (
        <nav className="navbarnavbar-light bg-light">
            <ChinChin />
            <div className="d-flex justify-content-end" id="navbarNav">
                <ul className="nav mr-2">
                    {(store.isAuthenticatedUser || store.isAuthenticatedRestorantUser || store.isAuthenticatedAdmin) ?
                            <>
                            <li className="nav-item">
                                <a
                                    className="nav-link btn btn-secundary bg-light text-danger"
                                    onClick={() => actions.Logout()}>
                                    Logout<i className="fas fa-sign-out-alt ml-3" ></i>
                                </a>
                            </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <a
                                        className='nav-link btn btn-primary text-white'
                                        data-toggle="modal"
                                        data-target="#modal_login_restaurant"
                                        onClick={()=>{setLogin(!login);
                                            actions.inputsCleanup() }}
                                        >
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    
                                    <a
                                        className='nav-link btn btn-primary text-white'
                                        data-toggle="modal"
                                        data-target="#modal_register_restaurant"
                                        onClick={()=>{setRegister(!register);
                                            actions.inputsCleanup() }}>
                                        Register
                                    </a>
                                </li>
                            </>
                    }
                </ul>
            </div>
            <ModalRegisterRestaurant register={register} />
            <ModalLoginRestaurant login={login} />
        </nav>
    )
}

