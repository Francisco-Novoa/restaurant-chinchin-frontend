import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'

export default function TableRow(props) {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(
        {
            edit: false,
            user: props.elem,
        }
    )
    const handleChange = (e) => {
        const newlocal = { ...local }
        newlocal.user[e.target.name] = e.target.value
        setLocal(newlocal)
    }
    const handleEditButton = () => {
        const newlocal = { ...local }
        newlocal.edit= !local.edit
        setLocal(newlocal)
    }
    const handleDeleteButton = () => {
        actions.deleteProduct("http://localhost:5000/product/"+local.user.id_product, actions.getAllProductsOf, "http://localhost:5000/product/from/"+local.user.id_restaurant)
    }
    const handleSaveButton = () => {
        actions.updateProduct("http://localhost:5000/product/"+local.user.id_product,local.user)
        const newlocal = { ...local }
        newlocal.edit= false
        setLocal(newlocal)
    }

    return (
        
        <tr>
            {
                local.edit ?
                    <>
                        <th scope="row" key={props.i}>{props.i + 1}</th>
                        <td><input type="text" name="name_product" value={local.user.name_product}
                            className="form-control" onChange={(e) => { handleChange(e) }} /></td>
                        <td><input type="text" name="price" value={local.user.price}
                            className="form-control" onChange={(e) => { handleChange(e) }} /></td>
                        <td><input type="text" name="description" value={local.user.description}
                            className="form-control" onChange={(e) => { handleChange(e) }} /></td>
                        <td scope="col">
                            <i className="fas fa-edit" onClick={(e) => { handleEditButton() }} ></i>
                        </td>
                        <td scope="col">
                            <i className="fas fa-save" onClick={(e) => { handleSaveButton() }} ></i>
                        </td>
                        <td scope="col">
                            <i className="fas fa-trash" onClick={(e) => { handleDeleteButton() }} ></i>
                        </td>
                    </>

                    :
                    <>
                        <th scope="row">{props.i + 1}</th>
                        <td>{local.user.name_product}</td>
                        <td>{local.user.price}</td>
                        <td>{local.user.description}</td>
                        <td scope="col">
                            <i className="fas fa-edit" onClick={(e) => { handleEditButton() }} ></i>
                        </td>
                    </>
            }

        </tr>
    )
}