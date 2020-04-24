import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'

export default function TableRow(props) {
    const [local, setLocal] = useState(
        {
            name: false,
            email: false,
            phone: false,
            address: false,
            user: false,
            productos:false
        }
    )

    const handleEditButton = (nombre, e) => {
        const newlocal = { ...local }
        newlocal[nombre] = !local[nombre]
        setLocal(newlocal)
    }

    const handleChange = (e) => {
        const newlocal = { ...local }
        newlocal.user[e.target.name] = e.target.value
        setLocal(newlocal)
    }

    const handleDelete = (e) =>{
        
    }

    return (
        
        <tr>
            {/* Product Table */}
            <th scope="row">{props.i+1}</th>
            <td>{props.elem.name_product}</td>
            <td>{props.elem.price}</td>
            <td>{props.elem.description}</td>

            {/* Edit Button Product*/}
            <td scope="col">
                <button
                    type="button"
                    className="btn btn-primary  ml-2"
                    onClick={(e) => { 
                        handleEditButton("name", e) 
                    }} 
                >
                <i className="fas fa-edit"></i>
              </button>
                
            </td>
        </tr>
    )
}