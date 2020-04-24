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
                {/* Titulo block */}
                <div className="row mb-3 alert alert-primary text-center">
                    <div className="col-md-12">                    
                        <h3><i className="fas fa-cogs text-white"></i>  Product Table</h3>
                    </div>
                </div>

                {/* Text block */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-primary" role="alert">
                            Esta pagina es para editar y actualizar los detalles de los productos disponibles para la venta
                        </div>
                    </div>
                </div>

                {/* Product Table */}
                <table className="table table-hover text-center">

                    {/* Header */}
                    <thead className="text-primary">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {   
                         !!store.allProducts&&
                         store.allProducts.map((element,i)=>{
                             return (<>
                                    <TableRow elem={element} i={i} key={element.id} />
                                 </>
                             )
                         })
                            
                        }
                        
                    </tbody>
                        {/* Modal New Product */}
                        <button 
                            className="btn btn-primary" 
                            data-toggle="modal" 
                            data-target="#modal_new_product"
                        >
                            <i className="fas fa-plus"> </i>
                        </button>
                </table>
            </div>
        </>
    )
}