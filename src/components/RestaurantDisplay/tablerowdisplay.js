import React, { useContext, useState } from 'react'
import { Context } from '../../../src/store/appContext'

export default function TableRowDisplay(props) {
    const { store, actions } = useContext(Context)
    const [local, setLocal] = useState(
        {
            amount: 0
        }
    )

    const handlePlus = () => {
        let newLocal = { ...local }
        newLocal.amount = local.amount + 1
        setLocal(newLocal)
    }

    const handleMinus = () => {
        let newLocal = { ...local }
        newLocal.amount = local.amount - 1
        setLocal(newLocal)
    }

    const addItem =()=>{
        
        let item={
            id_product:props.elem.id_product,
            name_product:props.elem.name_product,
            price:props.elem.price,
            description:props.elem.description,
            amount:local.amount}
        
        actions.addShoppingCart(item,store.shoppingCart)
    }

    return (
        <tr>
            <th scope="row">{props.i + 1}</th>
            <td>{props.elem.name_product}</td>
            <td>{props.elem.price}</td>
            <td>{props.elem.description}</td>
            <td style={{ textAlign: "center" }}>
                {
                    local.amount <= 0 ?
                        <a className="btn btn-outline-secondary disabled" role="button" >
                            <i className="fas fa-minus" ></i>
                        </a>
                        :
                        <a className="btn btn-outline-secondary" role="button" onClick={() => { handleMinus() }} >
                            <i className="fas fa-minus" ></i>
                        </a>

                }
                <span className="mx-2" > {local.amount} </span>

                <a className="btn btn-outline-secondary mr-2" role="button" onClick={() => { handlePlus() }} >
                    <i className="fas fa-plus" ></i>
                </a>

            </td>
            <td>
                {local.amount > 0 ?
                    <a className="btn btn-outline-success"
                     role="button"  
                     onClick={() => { addItem() }}>
                        <i className="fas fa-check text-success" ></i>
                    </a>
                    :
                    ""
                }

            </td>
        </tr >
    )
            }
