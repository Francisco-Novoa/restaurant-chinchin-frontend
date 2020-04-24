import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';

export default function NewProduct(props) {
    const { store, actions } = useContext(Context);
    const [local, setLocal] = useState(
        {
            body: {
                name_product: "",
                description: "",
                price: "",
                id_restaurant: false
            },
            error: false,
            success: false
        }
    )

    const handleChange = (e) => {
        const newlocal = { ...local }
        newlocal.body[e.target.name] = e.target.value
        setLocal(newlocal)
    }

    const handleSubmit = () => {
        console.log(local.body)
        if (!local.body.name_product
            && !local.body.description
            && !local.body.price && !local.body.id_restaurant) {
            const newlocal = { ...local }
            newlocal.error = !local.error
            setLocal(newlocal)
        }
        else {
            actions.newProduct("http://localhost:5000/product", local.body)
            actions.getAllProductsOf("http://localhost:5000/product/from/" + local.body.id_restaurant)
            const newlocal= {
                body: {
                    name_product: "",
                    description: "",
                    price: "",
                    id_restaurant: local.body.id_restaurant
                },
                error: false,
                success: false
            }
            setLocal(newlocal)
        }
    }

    useEffect(() => {
        const newlocal = { ...local }
        if (store.currentRestaurant.hasOwnProperty("restaurantuser")) {
            newlocal.body.id_restaurant = store.currentRestaurant.restaurantuser.id

        }
        else {
            newlocal.body.id_restaurant = store.currentUser.restaurantuser.id
        }
        setLocal(newlocal)

    }, [])

    return (
        <>
            <div className="col-md-8">
                <div className="modal fade" id="modal_new_product" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>New Product</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                            <div className="modal-body mb-4">
                                {
                                    local.error ? (
                                        <div className="row">                                            
                                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                                <strong>Error!</strong> todos los campos deben ser incluidos
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>                                            
                                        </div>
                                    )
                                        : ""
                                }
                               
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Ingrese nombre del producto" name="name_product"
                                        onChange={(e) => { handleChange(e) }} value={local.body.name_product}/>
                                </div>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Ingrese una descripcion" name="description"
                                        onChange={(e) => { handleChange(e) }} value={local.body.description}/>
                                </div>
                                <div className="input-group">
                                    <input className="form-control" type="number" placeholder="Ingrese valor del producto $" name="price"
                                        onChange={(e) => { handleChange(e) }} value={local.body.price} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                {
                                    local.error? <button className="btn btn-primary" 
                                    onClick={() => { handleSubmit() }} ><i class="far fa-paper-plane fa-2x"></i></button>
                                    : <button className="btn btn-primary" 
                                    data-dismiss="modal" onClick={() => { handleSubmit() }} ><i class="far fa-paper-plane fa-2x"></i></button>
                                }
                               
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
