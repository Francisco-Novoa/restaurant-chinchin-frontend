import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const New_Product = props => {

    const { store, actions } = useContext(Context);

    return (

        <div className="wrapper wrapper--w960">
            <div className="card card-2">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">New Product</h2>
                    {
                        !!store.errors_product && (
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Error!</strong> {store.errors_product.msg}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <form onSubmit={actions.registerProduct}>
                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Ingrese nombre del producto" name="name_product"
                                value={store.name_product}
                                onChange={actions.handleChangeProduct} />
                        </div>
                        <div className="input-group">
                            <input className="input--style-2" type="text" placeholder="Ingrese una descripcion" name="description_product"
                                value={store.description_product}
                                onChange={actions.handleChangeProduct} />
                        </div>
                        <div className="input-group">
                            <input className="input--style-2" type="number" placeholder="Ingrese valor del producto $" name="price_product"
                                value={store.price_product}
                                onChange={actions.handleChangeProduct} />
                        </div>
                        <div className="p-t-30">
                            <button className="btn btn--radius btn--green" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default New_Product;