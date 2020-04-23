import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import NewProduct from '../modal_new_product'

function TableRow(props) {

    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.description}</td>
            <td scope="col">
                <i className="fas fa-edit" onClick={(e) => { props.handler("name", e) }} ></i>
            </td>
        </tr>
    )
}

export default function OwnerSideMenu(props, TableRow) {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(
        {
            name: false,
            email: false,
            phone: false,
            address: false,
            user: false,
            productos:false
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
            newlocal.productos=actions.getAllProductsOf("http://localhost:5000/product/from/",newlocal.user.id)
            
        }
        else{
            newlocal.user=store.currentUser.restaurantuser
            newlocal.productos=actions.getAllProductsOf("http://localhost:5000/product/from/",newlocal.user.id)
        }
        setLocal(newlocal)
        
        
    },[])

    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary p-3 border border-dark mb-3">
                    <div className="col-3"><i className="fas fa-cogs fa-3x"></i></div>
                    <div className="col-9"><h3>Tabla de Productos</h3></div>
                </div>
                <div className="row">
                    <div className="alert alert-primary" role="alert">
                        Esta pagina es para editar y actualizar los detalles de los productos disponibles para la venta
                     </div>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
                <NewProduct/>
            </div>
        </>
    )
}