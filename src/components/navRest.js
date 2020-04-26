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
        < div className="row pt-3" >
            <div className="col">
                <div className="logo">
                    <ChinChin />
                </div>
            </div>
            {(store.isAuthenticatedUser || store.isAuthenticatedRestorantUser || store.isAuthenticatedAdmin) ?
                    <>
                       <div className="col-4 d-flex justify-content-end pt-1 btn-group" role="group">
                        <button
                            className='btn btn-secondary form-control mr-2'
                            onClick={() => actions.Logout()}>
                            Logout<i className="fas fa-sign-out-alt ml-3" ></i>
                        </button>
                    </div>
                    </>
                    :
                    <div className="col-md-3 d-flex justify-content-end">
                        <button
                            className='btn btn-primary form-control mr-2'
                            data-toggle="modal"
                            data-target="#modal_login_restaurant"
                            onClick={()=>{setLogin(!login)}}
                            >
                            Login
                        </button>
                        <button
                            className='btn btn-primary form-control'
                            data-toggle="modal"
                            data-target="#modal_register_restaurant"
                            onClick={()=>{setRegister(!register)}}>
                            Register
                        </button>
                    </div>
            }
            <ModalRegisterRestaurant register={register} />
            <ModalLoginRestaurant login={login} />
        </div >
    )
}

