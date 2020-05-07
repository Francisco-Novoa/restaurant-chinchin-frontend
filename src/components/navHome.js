import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import ModalLogin from './modal_login'
import { Link } from 'react-router-dom'
import ModalRegister from './modal_register'
import ChinChin from './chinchin'

export default function NavbarHome() {
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    const { store, actions } = useContext(Context)
    return (
        <nav className="navbar navbar-light bg-light">
            <ChinChin />          
            <div className="d-flex justify-content-end" id="navbarNav">
                <ul className="nav mr-2">
                    {
                        (store.isAuthenticatedUser || store.isAuthenticatedRestorantUser) ?
                            <>
                            <li className="nav-item btn-group">
                                <a
                                    className='nav-link btn btn-secondary bg-light text-danger'
                                    onClick={() => actions.Logout()}>
                                    Logout<i className="fas fa-sign-out-alt ml-3" ></i>
                                </a>
                                <Link
                                    className='nav-link btn btn-primary text-white'
                                    to="/user"
                                    >
                                     <i class="fas fa-cog"></i>
                                </Link>
                            </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <a  className='nav-link btn btn-primary text-white'
                                        data-toggle="modal"
                                        data-target="#modal_login"
                                        onClick={() => { setLogin(!login) ;
                                            actions.inputsCleanup() }}
                                    >
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a  className='nav-link btn btn-primary text-white'
                                        data-toggle="modal"
                                        data-target="#modal_register"
                                        onClick={() => { setRegister(!register) ;
                                            actions.inputsCleanup() }}>
                                        Register
                                    </a>
                                </li>
                            </>

                    }
                </ul>
            </div>
            
            <ModalLogin login={login} />
            <ModalRegister register={register} />
        </nav >
    )
}