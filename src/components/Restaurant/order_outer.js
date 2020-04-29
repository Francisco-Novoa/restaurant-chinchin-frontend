import React, { useContext } from 'react'
import OrderInner from "./order_inner"
import { Context } from '../../../src/store/appContext'

export default function Order(props) {
    const { store, actions } = useContext(Context)
    const completeOrder = () => {
        actions.completeOrder(store.path + "/finish/" + props.elem.id_order, props.i, store.orders)
    }
    return (
        <>
            {props.done && props.elem.done || !props.done && !props.elem.done ?
                <table className="table table-bordered">
                    <tr>
                        <th colSpan="12" className="text-left" >Orden Numero {props.i + 1}
                        </th>
                    </tr>
                    <tr>
                        <td> <span style={{ fontWeight: "bold" }} >Usuario</span>: {props.elem.user_name}</td>
                        <td> <span style={{ fontWeight: "bold" }} >Telefono: </span> {props.elem.user_phone} </td>
                        <td> <span style={{ fontWeight: "bold" }} >Estado de la orden: </span>
                            {
                                props.elem.done ?
                                    <span > hecho</span>
                                    :
                                    <span> en espera</span>
                            }
                        </td>
                        <td>
                            {
                                props.elem.date
                            }
                        </td>
                    </tr>
                    <tr >
                        <td colSpan="12">
                            <table className="table" >
                                <tr>
                                    <th>#</th>
                                    <th>Id del Producto</th>
                                    <th>Nombre Producto</th>
                                    <th>Precio Unitario</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                </tr>
                                {
                                    !!props.elem.order_details &&
                                    props.elem.order_details.map((elem, i) => {
                                        return (
                                            <OrderInner elem={elem} key={elem.id_order_detail} i={i} />
                                        )
                                    })
                                }
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <th>Total:
                       </th>
                        <td colSpan="4" className="text-right pr-5" >
                            <span>$ {props.elem.total} </span>
                        </td>
                    </tr>
                    <tr>
                        <th> <span style={{ fontWeight: "bold" }}> Comentarios: </span>
                    </th>
                        <td colSpan="4">
                            {" " + props.elem.comment}
                        </td>
                    </tr>
                    <tr >
                        <td colSpan="5" className="text-right " >
                            <a
                                class="btn btn-primary text-white"
                                role="button"
                                onClick={() => { completeOrder() }}>
                                Completado
                        </a>
                        </td>
                    </tr>
                </table>
                : ""
            }
        </>

    )
}