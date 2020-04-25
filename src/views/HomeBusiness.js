import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import ControlPanel from "../components/Restaurant/onwercontrolpanel";
import OwnerSideMenu from "../components/Restaurant/ownersidemenu";
import NavbarRest from "../components/navRest";
import ChinChin from "../components/chinchin";
const Restaurant = (props) => {

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

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.isAuthenticatedRestaurantUser();
        actions.getAllRestaurants("http://localhost:5000/restaurantusers")
    }, [])
    return (
        <>
            {store.isAuthenticatedRestaurantUser === false ? (
                /* conditional rendering for show the consumers buttons of login and register */
                <div className="container">
                    <NavbarRest />
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
                </div>
            ) : (
                    <>
                        {/* Sidebar OwnerRestaurant */}
                        <div className="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
                            {/* Sidebar LOGO */}
                            <div className="logo">
                                <ChinChin/>
                            </div>
                            {/* Sidebar Body */}
                            <div className="sidebar-wrapper">
                                <ul className="nav">
                                    <li className="nav-item" onClick={() => { handleClick("user") }} >
                                        <a className="nav-link">
                                            <i className="fas fa-user"></i>
                                            <p>Perfil de Usuario</p>
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={() => { handleClick("product") }} >
                                        <a className="nav-link">
                                            <i className="fas fa-th-list"></i>
                                            <p>Productos</p>
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={() => { handleClick("orders") }} >
                                        <a className="nav-link">
                                            <i className="far fa-envelope"></i>
                                            <p>Ordenes</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-panel">
                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        {/* Navbar OwnerRestaurant */}
                                        <nav
                                            className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "
                                            id="navigation-example"
                                        >
                                            <div className="container-fluid">
                                                <button
                                                    className="navbar-toggler"
                                                    type="button"
                                                    data-toggle="collapse"
                                                    aria-controls="navigation-index"
                                                    aria-expanded="false"
                                                    aria-label="Toggle navigation"
                                                    data-target="#navigation-example"
                                                >
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="navbar-toggler-icon icon-bar"></span>
                                                    <span className="navbar-toggler-icon icon-bar"></span>
                                                    <span className="navbar-toggler-icon icon-bar"></span>
                                                </button>
                                                <div className="collapse navbar-collapse justify-content-end">
                                                    <form className="navbar-form justify-content-center">
                                                        <div className="input-group no-border">
                                                            <input
                                                                type="text"
                                                                value=""
                                                                className="form-control"
                                                                placeholder="Search..."
                                                            />
                                                            <button
                                                                type="submit"
                                                                className="btn btn-default btn-round btn-just-icon"
                                                            >
                                                                <i className="fas fa-search"></i>
                                                                <div className="ripple-container"></div>
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item dropdown">
                                                            <a
                                                                className="nav-link"
                                                                href="javscript:void(0)"
                                                                id="navbarDropdownMenuLink"
                                                                data-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="fas fa-bell fa-3x"></i>
                                                                <span className="notification">5</span>
                                                                <p className="d-lg-none d-md-block">Some Actions</p>
                                                            </a>
                                                            <div
                                                                className="dropdown-menu dropdown-menu-right"
                                                                aria-labelledby="navbarDropdownMenuLink"
                                                            >
                                                                <a className="dropdown-item" href="javascript:void(0)">
                                                                    Mike John responded to your email
                                                </a>
                                                                <a className="dropdown-item" href="javascript:void(0)">
                                                                    You have 5 new tasks
                                                </a>
                                                                <a className="dropdown-item" href="javascript:void(0)">
                                                                    You're now friend with Andrew
                                                </a>
                                                                <a className="dropdown-item" href="javascript:void(0)">
                                                                    Another Notification
                                                </a>
                                                                <a className="dropdown-item" href="javascript:void(0)">
                                                                    Another One
                                                </a>
                                                            </div>
                                                        </li>
                                                        <li className="nav-item" onClick={() => actions.LogoutRestaurant()}>
                                                            <a className="nav-link" href="" onClick={() => actions.Logout()}>
                                                                Logout
                                                    <i className="fas fa-sign-out-alt ml-3" onClick={() => actions.LogoutRestaurant()}></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </nav>
                                        {
                                            <>
                                                {
                                                    local.user ? <ControlPanel/> : ""
                                                }
                                                {
                                                    local.product ?
                                                        <>
                                                            <OwnerSideMenu />
                                                        </>
                                                        : ""
                                                }
                                                {
                                                    local.orders ? <h1>orders!!</h1> : ""
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </>
    );
};

export default Restaurant;
