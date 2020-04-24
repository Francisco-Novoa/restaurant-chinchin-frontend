import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import TableRowDisplay from "./tablerowdisplay"


export default function RestaurantProducts(props) {
    const { store, actions} = useContext(Context)
    const [local, setLocal] = useState(
        {   
            contact:false,
            user:store.restaurantFocus
        }
    )
    useEffect(()=>{
        actions.getAllProductsOf("http://localhost:5000/product/from/"+local.user.id)
    },[])

    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary p-3 border border-dark mb-3">
                    <div className="col-9"><h3>Tabla de Productos</h3></div>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                         !!store.allProducts&&
                         store.allProducts.map((element,i)=>{
                             return (<>
                                    <TableRowDisplay elem={element} i={i} key={i}/>
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