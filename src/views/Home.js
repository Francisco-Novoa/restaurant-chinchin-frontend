import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'
import ModalLogin from '../components/modal_login'
import ModalRegister from '../components/modal_register'

const Home = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.isAuthenticatedUser();
    }, [])
    return (
        <>
            {
                store.isAuthenticatedUser === false ?
                    (
                        <div className="container">
                            <div className="row pt-3">
                                <div className="col-md-9">
                                    <Link to='/'><h1>Logo</h1></Link>
                                </div>
                                <div className="col-md-3 d-flex justify-content-end">
                                    <button className='btn btn-primary form-control mr-2' data-toggle="modal" data-target="#modal_login">Login</button>
                                    <button className='btn btn-primary form-control' data-toggle="modal" data-target="#modal_register">Register</button>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-12 p-3">
                                    <h5>Restaurants</h5>
                                    <hr></hr>
                                    <ul className='pl-3 pr-3 pt-2'>
                                        <li>First restaurant</li>
                                        <li>Secons restaurant</li>
                                    </ul>
                                </div>
                            </div>
                            <ModalLogin />
                            <ModalRegister />
                            <nav className="navbar fixed-bottom navbar-light justify-content-end">
                            <Link to='/business' >Create business account</Link>
                            </nav>
                        </div>
                    )
                    :
                    (
                        <div className="container">
                                <div className="row pt-3">
                                    <div className="col-md-9">
                                        <Link to='/'><h1>Logo</h1></Link>
                                    </div>
                                    <div className='d-flex justify-content-between text-muted pt-1 btn' onClick={() => actions.Logout()}>
                                        <div className="hand" onClick={() => actions.Logout()}>Logout</div>
                                        <i className="fas fa-sign-out-alt ml-3" onClick={() => actions.Logout()}></i>
                                    </div>
                                </div>
                                <div>Here you login</div>
                            </div>








                    )
            }
        </>
    )
}

export default Home;