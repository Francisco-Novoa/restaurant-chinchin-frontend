import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../../../src/store/appContext";

export default function ControlPanel(props) {
    const { store, actions } = useContext(Context);
    const firstInput = useRef(null)
    const secondInput = useRef(null)
    const thirdInput = useRef(null)
    const [local, setLocal] = useState({
        name: false,
        phone: false,
        address: false,
        user: {},
    });

    const handleEditButton = (nombre, e) => {
        const newlocal = { ...local };
        newlocal[nombre] = !local[nombre];
        setLocal(newlocal);
    };
    const handleChange = (e) => {
        const newlocal = { ...local };
        newlocal.user[e.target.name] = e.target.value;
        setLocal(newlocal);
    };
    const handleSave = () => {
        actions.updateRestaurant(
            "http://localhost:5000/restaurantusers/" + local.user["id"],
            local.user
        );
        const newlocal = { ...local };
        newlocal.user = store.currentRestaurant.restaurantuser;
        newlocal.name = false;
        newlocal.phone = false;
        newlocal.address = false;
        actions.updateCurrRest(newlocal.user, store.currentRestaurant);
        setLocal(newlocal);
    };
    useEffect(() => {
        if (firstInput.current !== null) {
            firstInput.current.focus()
        }
    }, [local.name])
    useEffect(() => {
        if (secondInput.current !== null) {
            secondInput.current.focus()
        }
    }, [local.phone])
    useEffect(() => {
        if (thirdInput.current !== null) {
            thirdInput.current.focus()
        }
    }, [local.address])

    useEffect(() => {
        const newlocal = { ...local };
        newlocal.user = store.currentRestaurant.restaurantuser;
        setLocal(newlocal);
    }, []);

    return (
        <>
            {
                <div className="container-fluid">

                    {/* Titulo block */}
                    <div className="row mb-3 alert alert-primary text-center">
                        <div className="col-md-12">
                            <h3><i className="fas fa-cogs text-white"></i>  Control Panel</h3>
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-primary" role="alert">
                                Esta pagina es para editar y actualizar los detalles de tu
                                restaurant que seran mostrados al los clientes
                    </div>
                        </div>
                    </div>

                    {/* Form Group Name */}
                    <div className="row mb-3">
                        <div className="col-md-10">
                            <div className="form-group">
                                <label className="bmd-label-floating text-primary">Company</label>
                                {
                                    local.name ? (

                                        <input
                                            type="text"
                                            name="name"
                                            ref={firstInput}
                                            value={local.user.name}
                                            className="form-control"
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                            id="inputname"
                                        />

                                    ) : (

                                            <div className="form-control">
                                                {local.user.name}
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                        <div className="col-md-2 pt-5">
                           { local.name ?
                            <i
                                className="fas fa-check"
                                onClick={(e) => {
                                    handleEditButton("name", e);
                                }}
                            >

                            </i>
                            :
                            <i
                                className="fas fa-edit"
                                onClick={(e) => {
                                    handleEditButton("name", e);
                                }}
                            >

                            </i>
                            }
                        </div>
                    </div>

                    {/* Form Group Phone */}
                    <div className="row mb-3">
                        <div className="col-md-5">
                            <div className="form-group">
                                <label className="bmd-label-floating text-primary">Phone</label>
                                {
                                    local.phone ? (

                                        <input
                                            type="text"
                                            name="phone"
                                            ref={secondInput}
                                            value={local.user.phone}
                                            className="form-control"
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                            id="inputphone"
                                        />
                                    ) : (
                                            <div className="form-control">
                                                {local.user.phone}
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                        <div className="col-md-4 pt-5">
                        { local.phone ?
                            <i
                                className="fas fa-check"
                                onClick={(e) => {
                                    handleEditButton("phone", e);
                                }}
                            >
                            </i>
                            :
                            <i
                                className="fas fa-edit"
                                onClick={(e) => {
                                    handleEditButton("phone", e);
                                }}
                            >
                            </i>
                            }
                        </div>
                    </div>

                    {/* Form Group Address */}
                    <div className="row mb-3">
                        <div className="col-md-8">
                            <div className="form-group">

                                <label className="bmd-label-floating text-primary">Address</label>
                                {
                                    local.address ? (

                                        <input
                                            type="text"
                                            name="address"
                                            ref={thirdInput}
                                            value={local.user.address}
                                            className="form-control"
                                            onChange={(e) => {
                                                handleChange(e);
                                            }}
                                            id="inputaddress"
                                        />

                                    ) : (

                                            <div className="form-control">
                                                {local.user.address}
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                        <div className="col-md-2 pt-5">

                        { local.address ?
                            <i
                                className="fas fa-check"
                                onClick={(e) => {
                                    handleEditButton("address", e);
                                }}
                            >
                            </i>
                            :
                            <i
                                className="fas fa-edit"
                                onClick={(e) => {
                                    handleEditButton("address", e);
                                }}
                            >
                            </i>
                            }
                        </div>
                    </div>

                    {/* Form Group Email */}
                    <div className="row mb-3">
                        <div className="col-md-7">
                            <div className="form-group">
                                <label className="bmd-label-floating text-primary">Email</label>
                                {

                                    <div className="form-control mb-2">
                                        {local.user.email}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-end">
                        <div className="col-2 mr-2">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    handleSave();
                                }}
                            >
                                Guardar
                </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
