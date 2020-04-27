import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../../src/store/appContext";

export default function ControlPanel(props) {
  const { store, actions } = useContext(Context);
  const [local, setLocal] = useState({
    name: false,
    phone: false,
    address: false,
    email: false,
    user: {
      address: "",
      name: "",
      phone: "",
    },
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
    if (props.a) {
      newlocal.user = store.currentRestaurant.restaurantuser;
      newlocal.name = false;
      newlocal.phone = false;
      newlocal.address = false;
      actions.updateCurrRest(newlocal.user, store.currentRestaurant);
    } else {
      newlocal.user = store.currentUser.restaurantuser;
      newlocal.name = false;
      newlocal.phone = false;
      newlocal.address = false;
      actions.updateCurrUser(newlocal.user, store.currentUser);
    }
    setLocal(newlocal);
  };

  useEffect(() => {
    const newlocal = { ...local };
    if (props.a) {
      newlocal.user = store.currentRestaurant.restaurantuser;
    } else {
      newlocal.user = store.currentUser.restaurantuser;
    }
    setLocal(newlocal);
  }, []);

  return (
    <>
      {
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <div className="card">
                        {/* Titulo block */}
                        <div className="card-header card-header-primary">                                              
                            <h3 className="card-title"><i className="fas fa-cogs text-white"></i>  Control Panel</h3>
                            <p className="card-category">Esta pagina es para editar y actualizar los detalles de tu
                                    restaurant que seran mostrados al los clientes</p>
                        </div>
                        <div className="card-body">
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
                                            <i
                                                className="fas fa-edit"
                                                onClick={(e) => {
                                                handleEditButton("name", e);
                                                }}
                                            >
                                                
                                            </i>
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
                                            <i
                                                className="fas fa-edit"
                                                onClick={(e) => {
                                                handleEditButton("phone", e);
                                                }}
                                            >

                                            </i>
                                    </div>            
                            </div>

                            {/* Form Group Address */}
                            <div className="row mb-3">
                                <div className="col-md-8">
                                    <div className="form-group">

                                        <label className="bmd-label-floating text-primary">Adress</label>
                                        {
                                            local.address ? (
                                                
                                                    <input
                                                    type="text"
                                                    name="address"
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
                                        <i
                                            className="fas fa-edit"
                                            onClick={(e) => {
                                            handleEditButton("address", e);
                                            }}
                                        >                  
                                        </i>
                                    </div>            
                            </div>

                            {/* Form Group Email */}
                            <div className="row mb-3">
                                    <div className="col-md-7">
                                            <div className="form-group">
                                                    <label className="bmd-label-floating text-primary">Email</label>
                                                        {
                                                            local.email ? (
                                                                
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    value={local.user.email}
                                                                    className="form-control mb-2"
                                                                    onChange={(e) => {
                                                                        handleChange(e);
                                                                    }}
                                                                    id="inputemail"
                                                                />
                                                                
                                                        ) : (
                                                                
                                                            <div className="form-control mb-2">
                                                                {local.user.email}
                                                            </div>
                                                        )
                                                    }
                                            </div>
                                        </div>
                                        <div className="col-md-3 pt-5"> 
                                            <i
                                                className="fas fa-edit"
                                                onClick={(e) => {
                                                    handleEditButton("email", e);
                                                }}
                                            >                  
                                            </i>
                                        </div>
                                </div>
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
            </div>  
        </div>
      }
    </>
  );
}
