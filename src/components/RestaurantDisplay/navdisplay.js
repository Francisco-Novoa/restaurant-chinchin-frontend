import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../store/appContext'
import ModalLogin from './../modal_login'
import ModalRegister from './../modal_register'
import ChinChin from './../chinchin'

export default function NavbarDisplay() {
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    const { store, actions } = useContext(Context)
    return (
        < div className="row pt-3" >
            <div className="col-md-7">
                <div className="logo">
                    <ChinChin />
                </div>
            </div>
            {

                (store.isAuthenticatedUser && store.shoppingCart.length > 0) ?

                        <div className="col-4 d-flex justify-content-end pt-1 btn-group"
                            role="group">
                            <button className='btn btn-secondary form-control mr-2'
                                onClick={() => actions.Logout()}>
                                Logout<i className="fas fa-sign-out-alt ml-3" ></i>
                            </button>
                            <Link
                                to="/shoppingcart"
                                className="btn btn-primary form-control"
                                role="button">
                                <i className="fas fa-shopping-cart mr-2" >{store.shoppingCart.length}</i>
                            </Link>
                            </div>

                    : (store.isAuthenticatedUser && store.shoppingCart.length === 0) ?
                        <div className="col-4 d-flex justify-content-end pt-1 btn-group"
                            role="group"
                        >
                            <button className='btn btn-muted form-control mr-2'
                                onClick={() => actions.Logout()}>>
                                Logout<i className="fas fa-sign-out-alt ml-3" ></i>
                            </button>
                            <Link
                                to="/shoppingcart"
                                className="btn btn-primary form-control"
                                role="button">
                                <i className="fas fa-shopping-cart mr-2" >{store.shoppingCart.length}</i>
                            </Link>



                        </div>
                        : store.shoppingCart.length > 0 ?
                            <div className="col-md-4 d-flex justify-content-end btn-group" role="group">
                                <button className='btn btn-primary form-control mr-2'
                                    data-toggle="modal"
                                    data-target="#modal_login"
                                    onClick={() => { setLogin(!login) }}>
                                    Login
                         </button>
                                <button className='btn btn-primary form-control mr-2'
                                    data-toggle="modal"
                                    data-target="#modal_register"
                                    onClick={() => { setRegister(!register) }}>
                                    Register
                         </button>
                                <Link
                                    to="/shoppingcart"
                                    className='btn btn-primary form-control'
                                    role="button">  
                                    <i className="fas fa-shopping-cart mr-2">{store.shoppingCart.length}</i>
                                </Link>
                            </div>
                            :
                            <div className="col-md-4 d-flex justify-content-end btn-group" role="group">
                                <button className='btn btn-primary form-control mr-2'
                                    data-toggle="modal"
                                    data-target="#modal_login"
                                    onClick={() => { setLogin(!login) }}>
                                    Login
                                 </button>
                                <button className='btn btn-primary form-control mr-2'
                                    data-toggle="modal"
                                    data-target="#modal_register"
                                    onClick={() => { setRegister(!register) }}>
                                    Register
                                 </button>
                                <button
                                    className='btn btn-primary form-control mr-2 disabled'>
                                    <i className="fas fa-shopping-cart mr-2"></i>
                                </button>
                            </div>

            }

            <ModalLogin login={login} />
            <ModalRegister register={register} />
        </div >
    )
}