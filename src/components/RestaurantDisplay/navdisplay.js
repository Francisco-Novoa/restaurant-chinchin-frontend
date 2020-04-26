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
                (store.isAuthenticatedUser || store.isAuthenticatedRestorantUser || store.isAuthenticatedAdmin) ?
                    <div className="col-3 d-flex justify-content-end btn-group" role="group">
                        <button className='btn btn-secondary mr-2'
                            onClick={() => actions.Logout()}>
                            logout
                          </button>

                        {
                            store.shoppingCart.length > 0 ?

                                <Link
                                    to="/shoppingcart"
                                    className="btn btn-primary form-control"
                                    role="button">
                                    <i className="fas fa-shopping-cart mr-2" ></i>
                                    {store.shoppingCart.length}
                                </Link>

                                :
                                <button
                                    className='btn btn-primary form-control disabled'>
                                    <i className="fas fa-shopping-cart  mr-2"></i>
                                </button>

                        }
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
                        {
                            store.shoppingCart.length > 0 ?
                                <Link
                                    to="/shoppingcart"
                                    className="btn btn-primary form-control"
                                    role="button">
                                    <i className="fas fa-shopping-cart mr-2" ></i>
                                    {store.shoppingCart.length}
                                </Link>
                                :
                                <button
                                    className='btn btn-primary form-control mr-2 disabled'>
                                    <i className="fas fa-shopping-cart mr-2"></i>
                                </button>
                        }
                    </div>
            }

            <ModalLogin login={login} />
            <ModalRegister register={register} />
        </div >
    )
}