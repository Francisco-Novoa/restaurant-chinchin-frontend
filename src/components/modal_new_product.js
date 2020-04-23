import React, { useContext, useState, useEffect} from 'react';
import { Context } from '../store/appContext';

export default function NewProduct(props) {
    const { store, actions } = useContext(Context);
    const [local, setLocal] = useState(
        {
            body: {
                name_product: false,
                description: false,
                price: false,
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
            && !local.body.price&&!local.body.id_restaurant) {
            const newlocal = { ...local }
            newlocal.error = !local.error
            setLocal(newlocal)
        }
        else {
            if(actions.newProduct("http://localhost:5000/product", local.body)){
            }
        }
    }

    useEffect(()=>{
        const newlocal = { ...local }
        if(props.a){
            newlocal.body.id_restaurant=store.currentRestaurant.restaurantuser.id
            
        }
        else{
            newlocal.body.id_restaurant=store.currentUser.restaurantuser.id
        }
        setLocal(newlocal)
    },[])

    return (
        <>
            <div className="wrapper wrapper--w960">
                <div className="modal fade" id="modal_new_product" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document"></div>
                <div className="modal-content">
                <div className="modal-header">
                        <h2 className="title">New Product</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div className="form-group modal-body">
                        {
                            local.error ? (
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                            <strong>Error!</strong> todos los campos deben ser incluidos
                                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                                : ""
                        }
                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Ingrese nombre del producto" name="name_product"
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Ingrese una descripcion" name="description"
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div className="input-group">
                            <input className="input--style-2" type="number" placeholder="Ingrese valor del producto $" name="price"
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div className="p-t-30 d-flex justify-content-end">
                            <button className="btn btn--radius btn--green" onClick={() => { handleSubmit() }} >Send</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
