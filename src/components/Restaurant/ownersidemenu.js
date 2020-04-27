import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import TableRow from "./tablerow"



export default function OwnerSideMenu(props) {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(
        {
            user: false,
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
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            {/* Titulo block */}
                            <div className="card-header card-header-primary">             
                                <h3 className="card-title "><i className="fas fa-cogs text-white"></i>  Product Table</h3>           
                                <p className="card-category"> Esta pagina es para editar y actualizar los detalles de los productos disponibles para la venta</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">

                                    {/* Product Table */}
                                    <table className="table table-hover text-center">

                                        {/* Header */}
                                        <thead className="text-primary">
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Descriptio</th>
                                        </thead>

                                        {/* Body */}
                                        <tbody>
                                            {   
                                            !!store.allProducts&&
                                            store.allProducts.map((element,i)=>{
                                                return (<>
                                                        <TableRow elem={element} i={i} key={i}/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}