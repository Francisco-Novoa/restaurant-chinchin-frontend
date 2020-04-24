import React from 'react'


export default function TableRowDisplay(props) {
    return (
        <tr>
            <th scope="row">{props.i + 1}</th>
            <td>{props.elem.name_product}</td>
            <td>{props.elem.price}</td>
            <td>{props.elem.description}</td>
            <td><i class="fas fa-shopping-cart"></i></td>
        </tr >
    )
}