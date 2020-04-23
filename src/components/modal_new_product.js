import React, { useContext, useState } from 'react';
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
            && !local.body.price) {
            const newlocal = { ...local }
            newlocal.error = !local.error
            setLocal(newlocal)
        }
        else {
            if(actions.newProduct("http://localhost:5000/product", local.body)){
                
                const newlocal = { ...local }
                newlocal.success = !local.success
                setLocal(newlocal)
            }
        }
    }

    return (
        <>{!local.success?
            <div className="wrapper wrapper--w960">
                <div className="card card-2">
                    <div className="card-heading"></div>
                    <div className="card-body">
                        <h2 className="title">New Product</h2>
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
            :
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded mr-2" alt="..." />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
            </div>
            </div>
        }
        </>
    )
}
