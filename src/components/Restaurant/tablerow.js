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

    return (
        <tr>
            <th scope="row">{props.i+1}</th>
            <td>{props.elem.name_product}</td>
            <td>{props.elem.price}</td>
            <td>{props.elem.description}</td>
            <td scope="col">
                <i className="fas fa-edit" onClick={(e) => { handleEditButton("name", e) }} ></i>
            </td>
        </tr>
    )
}