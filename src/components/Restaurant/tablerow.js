import React, { useContext, useState, useEffect, useRef } from 'react'
import { Context } from '../../../src/store/appContext'
import ModalDelete from './modaldelete'

export default function TableRow(props) {
    const { actions } = useContext(Context)
    const firstInput = useRef(null)
    const secondInput = useRef(null)
    const thirdInput = useRef(null)
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
        newlocal.edit = !local.edit
        setLocal(newlocal)
    }
    const handleDeleteButton = (url, getAllProductsOf, url2) => {
        actions.deleteProduct(url, getAllProductsOf, url2)
    }
    const handleSaveButton = () => {
        actions.updateProduct("http://localhost:5000/product/" + local.user.id_product, local.user)
        const newlocal = { ...local }
        newlocal.edit = false
        setLocal(newlocal)
    }
    const firstInputFocus = (e) => {
        if(e.key==="Enter"){
            secondInput.current.focus()
        }
    }
    const secondInputFocus = (e) => {
        if(e.key==="Enter"){
            thirdInput.current.focus()
        }
    }
    useEffect(() => {
        if (firstInput.current !== null) {
            firstInput.current.focus()
        }
    }, [local.edit])
    
    return (
        <>
            <tr>
                {
                    local.edit ?
                        <>
                            <th scope="row" key={props.i}>{props.i + 1}</th>
                            <td><input type="text" 
                                name="name_product" 
                                value={local.user.name_product}
                                className="form-control"
                                ref={firstInput}
                                onKeyDown={(e) => { firstInputFocus(e) }}
                                onChange={(e) => { handleChange(e) }} />
                            </td>
                            <td><input type="text" 
                                name="price" 
                                value={local.user.price}
                                className="form-control" 
                                ref={secondInput} 
                                onKeyDown={(e) => { secondInputFocus(e) }}
                                onChange={(e) => { handleChange(e) }} />
                            </td>
                            <td><input type="text" 
                                name="description" 
                                value={local.user.description}
                                className="form-control" 
                                ref={thirdInput} 
                                onChange={(e) => { handleChange(e) }} /></td>
                            <td scope="col">
                                <i className="fas fa-save btn btn-light" onClick={(e) => { handleSaveButton() }} ></i>
                            </td>
                            <td scope="col">
                                <i className="fas fa-minus-circle btn btn-light" onClick={(e) => { handleEditButton() }} ></i>
                            </td>
                            
                            <td scope="col">
                                <i className="fas fa-trash btn btn-light"
                                    data-toggle="modal"
                                    data-target="#modal_confirmation_delete"
                                    onClick={(e) => { handleDeleteButton() }} ></i>
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
            <ModalDelete delete={handleDeleteButton}
                url={"http://localhost:5000/product/" + local.user.id_product}
                function={actions.getAllProductsOf}
                url2={"http://localhost:5000/product/from/" + local.user.id_restaurant} />
        </>
    )
}