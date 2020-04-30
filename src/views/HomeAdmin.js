import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ModalRegisterAdmin from "../components/modal_register_admin"
import ModalLoginAdmin from "../components/modal_login_admin"
import ChinChin from "../components/chinchin"


const Admin = (props) => {
    const { store, actions } = useContext(Context);
    const [local, setLocal] = useState(
        {
            user: true,
            product: false,
            orders: false
        }
    )
    const items = store.allrest.filter((data) => {
        if (store.search === null)
            return data
        else if (data.name.toLowerCase().includes(store.search.toLowerCase())) {
            return data
        }
    }).map(data => {
        return (
            <tbody>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.address}</td>
                    <td>
                        <button id={data.id} onClick={(e) => { if (window.confirm('Are you sure you want to delete this restaurant?')) actions.deleteRestaurant(e.target.id) }}>Delete</button>
                        <button id={data.id} onClick={(e) => actions.getAllInfoRest(e.target.id)}>More</button>
                    </td>
                </tr>
            </tbody>

        )
    })
    const handleClick = (name) => {
        const newlocal = { ...local }
        if (name === "user") {
            newlocal["user"] = true
            newlocal["orders"] = false
            newlocal["product"] = false
            actions.DeleteRestForAdmin()

        }
        else if (name === "product") {
            newlocal["user"] = false
            newlocal["orders"] = false
            newlocal["product"] = true
            actions.getAllProducts()
        }
        else if (name === "orders") {
            newlocal["user"] = false
            newlocal["orders"] = true
            newlocal["product"] = false
            actions.getAllUsers()
        }
        setLocal(newlocal)
        store.view = 0
    }
    useEffect(() => {
        actions.isAuthenticatedAdmin();
        actions.DeleteRestForAdmin()
        actions.getAllInfoRest()
    }, [])
    return (
        <>
            {store.isAuthenticatedAdmin === false ? (
                /* conditional rendering for show the consumers buttons of login and register */
                <div className="container">
                    <div className="row pt-3">
                        <div className="logo">
                            <ChinChin />
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

                    <>
                        {/* Sidebar OwnerRestaurant */}
                        <div className="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
                            {/* Sidebar LOGO */}
                            <div className="logo">
                                <ChinChin />
                            </div>
                            {/* Sidebar Body */}
                            <div className="sidebar-wrapper">
                                <ul className="nav">
                                    <li className="nav-item" onClick={() => { handleClick("user") }} >
                                        <a className="nav-link">
                                            <i className="fas fa-utensils"></i>
                                            <p>View restaurant</p>
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={() => { handleClick("product") }} >
                                        <a className="nav-link">
                                            <i className="fas fa-th-list"></i>
                                            <p>View menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item" onClick={() => { handleClick("orders") }} >
                                        <a className="nav-link">
                                            <i className="fas fa-user"></i>
                                            <p>View users</p>
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
                                                    <div className="navbar-form justify-content-center">
                                                        <div>
                                                            <input type="text" name="suggestions" className="form-control" placeholder="Search..." onChange={(e) => actions.searchSpace(e)} />

                                                        </div>
                                                    </div>
                                                    <ul className="navbar-nav">
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
                                                    store.view === 0 ?
                                                        <>
                                                            {local.user &&
                                                                <div className="container-fluid">
                                                                    <table className="table table-bordered table-light">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>id</th>
                                                                                <th>Name</th>
                                                                                <th>Email</th>
                                                                                <th>Phone</th>
                                                                                <th>Address</th>
                                                                                <th>Delete</th>
                                                                            </tr>
                                                                        </thead>
                                                                        {items}
                                                                    </table>
                                                                </div>
                                                            }

                                                        </>
                                                        :
                                                            <>
                                                        <h1>Info About Restaurant</h1>
                                                        <div className="container-fluid">
                                                            <table className="table table-bordered table-light">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Description</th>
                                                                        <th>Name of product</th>
                                                                        <th>Price</th>
                                                                    </tr>
                                                                </thead>
                                                                {store.contentofRest.length > 0 &&
                                                                    store.contentofRest.map((item, i) => {
                                                                        return (
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>{item.description}</td>
                                                                                    <td>{item.name_product}</td>
                                                                                    <td>{item.price}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        )
                                                                    })
                                                                }
                                                            </table>
                                                        </div>
                                                      </>          
                                                }


                                                {
                                                    local.product ?
                                                        <>
                                                            <div className="container-fluid">
                                                                <table className="table table-bordered table-light">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>id</th>
                                                                            <th>Name</th>
                                                                            <th>Descriprion</th>
                                                                            <th>Price</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {
                                                                        store.allproducts.length > 0 &&
                                                                        store.allproducts.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>{item.id_product}</td>
                                                                                            <td>{item.name_product}</td>
                                                                                            <td>{item.description}</td>
                                                                                            <td>{item.price}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </table>
                                                            </div>
                                                        </>
                                                        : ""
                                                }
                                                {
                                                    local.orders ?
                                                        <>
                                                            <div className="container-fluid">
                                                                <table className="table table-bordered table-light">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>id</th>
                                                                            <th>Name</th>
                                                                            <th>Email</th>
                                                                            <th>Phone</th>
                                                                        </tr>
                                                                    </thead>
                                                                    {
                                                                        store.allusers.length > 0 &&
                                                                        store.allusers.map((item, i) => {
                                                                            return (
                                                                                <>
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td>{item.id}</td>
                                                                                            <td>{item.name}</td>
                                                                                            <td>{item.email}</td>
                                                                                            <td>{item.phone}</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
                                                                </table>
                                                            </div>
                                                        </>
                                                        : ""
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

export default Admin;
