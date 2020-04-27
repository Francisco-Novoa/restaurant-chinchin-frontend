import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ModalRegisterAdmin from "../components/modal_register_admin"
import ModalLoginAdmin from "../components/modal_login_admin"

const Admin = (props) => {
    const { store, actions } = useContext(Context);
    const [local, setLocal] = useState(
        {
            user: true,
            product: false,
            orders: false
        }
    )

    const handleClick = (name) => {
        const newlocal = { ...local }
        if (name == "user") {
            newlocal["product"] = false
            newlocal["orders"] = false
            newlocal["user"] = true
        }
        else if (name == "product") {
            newlocal["user"] = false
            newlocal["orders"] = false
            newlocal["product"] = true
        }
        else if (name == "orders") {
            newlocal["user"] = false
            newlocal["orders"] = true
            newlocal["product"] = false
        }
        setLocal(newlocal)
    }
    useEffect(() => {
        actions.isAuthenticatedAdmin();
    }, [])
    return (
        <>
            {store.isAuthenticatedAdmin === false ? (
                /* conditional rendering for show the consumers buttons of login and register */
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-md-9">
                            <Link to="/">
                                <h1>Logo</h1>
                            </Link>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end">
                            <button className="btn btn-primary form-control mr-2" data-toggle="modal" data-target="#modal_login_admin">login</button>
                            <button className="btn btn-primary form-control" data-toggle="modal" data-target="#modal_register_admin">register</button>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12 p-3">
                            <h3>You are not authenticated</h3>
                            <p>
                                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <ModalRegisterAdmin />
                    <ModalLoginAdmin />
                </div>
            ) : (
                    <div className="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">

                        {/* Sidebar LOGO */}
                        <div className="logo">
                            <Link to="/" className="simple-text logo-normal">
                                <i className="fas fa-utensils">  App ChinChin</i>
                            </Link>
                        </div>
                        {/* Sidebar Body */}
                        <div className="sidebar-wrapper">
                            <ul className="nav">
                                <li className="nav-item" onClick={() => { handleClick("user") }} >
                                    <a className="nav-link">
                                        <i class="fas fa-utensils"></i>
                                        <p>View restaurant</p>
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => { handleClick("product") }} >
                                    <a className="nav-link">
                                        <i className="fas fa-th-list"></i>
                                        <p>View menue</p>
                                    </a>
                                </li>
                                <li className="nav-item" onClick={() => { handleClick("orders") }} >
                                    <a className="nav-link">
                                        <i className="fas fa-user"></i>
                                        <p>View user</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    
                )}
        </>
    );
};

export default Admin;
