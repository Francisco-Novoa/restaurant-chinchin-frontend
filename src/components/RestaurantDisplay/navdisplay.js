import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/appContext'
import ModalLogin from './../modal_login'
import ModalRegister from './../modal_register'
import ChinChin from './../chinchin'

export default function NavbarDisplay() {
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.isAuthenticatedUser()

    }, []);
    return (
        <nav className="navbar navbar-light bg-light">
            <ChinChin />
            <div className="d-flex justify-content-end " id="navbarNav">
                <ul className="nav mr-2">
                    {

                        (store.isAuthenticatedUser && store.shoppingCart.length > 0) ?
                            <>
                                <li className="nav-item btn-group">
                                    <a className='nav-link btn btn-secondary bg-light text-danger'
                                        onClick={() => actions.Logout()}>
                                        Logout <i className="fas fa-sign-out-alt ml-3" ></i>
                                    </a>
                                    <Link
                                        to="/shoppingcart"
                                        className="nav-link btn btn-primary text-white"
                                        role="button">
                                        <i className="fas fa-shopping-cart mr-2" ></i><span style={{fontWeight:"bold"}}>{store.shoppingCart.length}</span>
                                    </Link>
                                    <Link
                                        className='nav-link btn btn-primary text-white'
                                        to="/user">
                                        <i class="fas fa-cog"></i>
                                    </Link>
                                </li>
                            </>
                            :

                            (store.isAuthenticatedUser && store.shoppingCart.length === 0) ?
                                <>
                                    <li className="nav-item btn-group">
                                        <a className='nav-link btn btn-secondary bg-light text-danger'
                                            onClick={() => actions.Logout()}>
                                            Logout<i className="fas fa-sign-out-alt ml-3" ></i>
                                        </a>
                                        <Link
                                            to="/shoppingcart"
                                            className="nav-link btn btn-primary text-white disabled"
                                            role="button">
                                            <i className="fas fa-shopping-cart mr-2" ></i><span style={{fontWeight:"bold"}}>{store.shoppingCart.length}</span>
                                        </Link>
                                        <Link
                                            className='nav-link btn btn-primary text-white'
                                            to="/user">
                                            <i class="fas fa-cog"></i>
                                        </Link>
                                    </li>
                                </>
                                :
                                store.shoppingCart.length > 0 ?

                                    <>
                                        <li className="nav-item btn-group">
                                            <a className='nav-link btn btn-primary text-white'
                                                data-toggle="modal"
                                                data-target="#modal_login"
                                                onClick={() => { setLogin(!login);
                                                actions.inputsCleanup() }}>
                                                Login
                                        </a>
                                            <a className='nav-link btn btn-primary text-white'
                                                data-toggle="modal"
                                                data-target="#modal_register"
                                                onClick={() => { setRegister(!register) ;
                                                    actions.inputsCleanup() }}>
                                                Register
                                         </a>
                                            <Link
                                                to="/shoppingcart"
                                                className='nav-link btn btn-primary text-white'
                                                role="button">
                                                <i className="fas fa-shopping-cart mr-2"> </i><span style={{fontWeight: "bold" }}>{store.shoppingCart.length}</span>
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item btn-group">
                                            <a className='nav-link btn btn-primary text-white'
                                                data-toggle="modal"
                                                data-target="#modal_login"
                                                onClick={() => { setLogin(!login) ;
                                                    actions.inputsCleanup() }}>
                                                Login
                                        </a>
                                            <a className='nav-link btn btn-primary text-white'
                                                data-toggle="modal"
                                                data-target="#modal_register"
                                                onClick={() => { setRegister(!register) ;
                                                    actions.inputsCleanup() }}>
                                                Register
                                        </a>
                                            <a className='nav-link btn btn-primary text-white disabled'>
                                                <i className="fas fa-shopping-cart mr-2"></i>
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