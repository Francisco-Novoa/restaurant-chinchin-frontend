import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import { Link } from 'react-router-dom'

export default function ControlPanel(props) {
    const { store, actions } = useContext(Context)

    const [local, setLocal] = useState(
        {
            name: false,
            email: false,
            phone: false,
            address: false,
            user:{
                address:"",
                email:"",
                name:"",
                phone:""
            }
        }
    )
    const handleEditButton = (nombre, e) => {
        const newlocal = { ...local }
        newlocal[nombre] = !local[nombre]
        setLocal(newlocal)
    }

    const handleChange = (e) => {
        const newlocal = { ...local }
        newlocal.user[e.target.name] = e.target.value
        setLocal(newlocal)
    }

    useEffect(()=>{
        const newlocal = { ...local }
        if(props.a){
            newlocal.user=store.currentRestaurant.restaurantuser
            
        }
        else{
            newlocal.user=store.currentUser.restaurantuser
        }
        setLocal(newlocal)
        
    },[])

    return (
        <>{
            <div className="container-fluid">
                <div className="row bg-secondary p-3 border border-dark mb-3">
                    <div className="col-3"><i className="fas fa-cogs fa-3x"></i></div>
                    <div className="col-9"><h3>Control Panel</h3></div>
                </div>
                <div className="row"><div className="alert alert-primary" role="alert">
                    Esta pagina es para editar y actualizar los detalles de tu restaurant que seran mostrados al los clientes
                </div></div>

                <div className="row ">
                    <div className="col-3 bg-secondary border-bottom">Nombre</div>
                    {
                        local.name ? <div className="col-8"><input type="text" name="name" value={local.user.name}
                        className="form-control"    onChange={(e) => { handleChange(e) }} id="inputname" />
                        </div>
                            : <div className="col-8">{local.user.name}</div>

                    }
                    <div className="col-1"><i className="fas fa-edit" onClick={(e) => { handleEditButton("name", e) }} ></i></div>
                </div>

                <div className="row ">
                    <div className="col-3 bg-secondary border-bottom">Email</div>
                    {
                        local.email ? <div className="col-8"><input type="text" name="email" value={local.user.email}
                        className="form-control"    onChange={(e) => { handleChange(e) }} id="inputemail" /></div>
                            : <div className="col-8">{local.user.email}</div>

                    }
                    <div className="col-1"><i className="fas fa-edit" onClick={(e) => { handleEditButton("email", e) }} ></i></div>
                </div>

                <div className="row ">
                    <div className="col-3 bg-secondary border-bottom">Telefono</div>
                    {
                        local.phone ? <div className="col-8"><input type="text" name="phone" value={local.user.phone}
                        className="form-control"    onChange={(e) => { handleChange(e) }} id="inputphone" /></div>
                            : <div className="col-8">{local.user.phone}</div>

                    }
                    <div className="col-1"><i className="fas fa-edit" onClick={(e) => { handleEditButton("phone", e) }} ></i></div>
                </div>

                <div className="row ">
                    <div className="col-3 bg-secondary border-bottom">Direccion</div>
                    {
                        local.address ? <div className="col-8"><input type="text" name="address" value={local.user.address}
                        className="form-control"  onChange={(e) => { handleChange(e) }} id="inputaddress" /></div>
                            : <div className="col-8">{local.user.address}</div>

                    }
                    <div className="col-1"><i className="fas fa-edit" onClick={(e) => { handleEditButton("address", e) }} ></i></div>
                </div>

                <div className="row d-flex justify-content-end">
                    <div className="col-2 mr-2">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            actions.updateRestaurant("http://localhost:5000/restaurantusers/" + local.user["id"], local.user)
                        }} >
                            Guardar</button>
                    </div>
                </div>
            </div>
        }
        </>
    )
}