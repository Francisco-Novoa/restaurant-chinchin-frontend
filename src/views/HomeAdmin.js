import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ModalRegisterAdmin from "../components/modal_register_admin"
import ModalLoginAdmin from "../components/modal_login_admin"
import ChinChin from "../components/chinchin";

const Admin = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.isAuthenticatedAdmin();
    }, [])
    return (
        <>
            {store.isAuthenticatedAdmin === false ? (
                /* conditional rendering for show the consumers buttons of login and register */
                <div className="container">
                    <div className="row pt-3">
                    <div className="logo">
                                <ChinChin/>
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
                    <div className="container">
                        <div className="row pt-3">
                            <div className="col-md-9">
                                <Link to="/">
                                    <h1>Logo</h1>
                                </Link>
                            </div>
                            <div className='d-flex justify-content-between text-muted pt-1 btn' onClick={() => actions.LogoutAdmin()}>
                                <div className="hand" onClick={() => actions.Logout()}>Logout</div>
                                <i className="fas fa-sign-out-alt ml-3" onClick={() => actions.LogoutAdmin()}></i>
                            </div>
                            <h3>You authenticated</h3>
                        </div>
                    </div>
                )}
        </>
    );
};

export default Admin;
