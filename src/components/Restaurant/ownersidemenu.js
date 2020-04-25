import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import TableRow from "./tablerow"
import NewProduct from '../modal_new_product'



export default function OwnerSideMenu(props) {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(
        {
            user: false,
        }
    )
    const [modal,setModal]=useState(false)


    useEffect(() => {
        const newlocal = { ...local }
        newlocal.user = store.currentRestaurant.restaurantuser
        setLocal(newlocal)
        actions.getAllProductsOf("http://localhost:5000/product/from/" + newlocal.user.id)
    }, [])

    return (
        <>
            <div className="container-fluid">
                {/* Titulo block */}
                <div className="row mb-3 alert alert-primary text-center">
                    <div className="col-md-12">
                        <h3><i className="fas fa-cogs text-white"></i>  Productos</h3>
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
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descripcion</th>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {
                            !!store.allProducts &&
                            store.allProducts.map((element, i) => {
                                return (<>
                                    <TableRow elem={element} i={i} key={i} />

                                </>
                                )
                            })

                        }

                    </tbody>

                </table>
                <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#modal_new_product"
                    onClick={()=>{setModal(!modal)}}
                >
                    <i className="fas fa-plus"> </i>
                </button>
                <NewProduct modal={modal}/>

            </div>
        </>
    )
}