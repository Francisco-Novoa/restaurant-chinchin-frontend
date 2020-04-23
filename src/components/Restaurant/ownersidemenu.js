import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import TableRow from "./tablerow"



export default function OwnerSideMenu(props) {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(
        {
            user: false,
            productos:false
        }
    )

    useEffect(()=>{
        const newlocal = { ...local }
        if(props.a){
            newlocal.user=store.currentRestaurant.restaurantuser
            actions.getAllProductsOf("http://localhost:5000/product/from/"+newlocal.user.id)

            
        }
        else{
            newlocal.user=store.currentUser.restaurantuser
            actions.getAllProductsOf("http://localhost:5000/product/from/"+newlocal.user.id)
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
                        {   
                         !!store.allProducts&&
                         store.allProducts.map((element,i)=>{
                             return (<>
                                    <TableRow elem={element} i={i} />
                                 </>
                             )
                         })
                            
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}