import React, { useContext } from 'react'
import OrderInner from "./user_order_inner"
import { Context } from '../../../src/store/appContext'

export default function Order(props) {
    const { store, actions } = useContext(Context)
    const completeOrder = () => {
        actions.completeOrder(store.path + "/cancel/" + props.elem.id_order, props.i, store.orders)
    }
    return (
        <>
            {(props.done === true && props.elem.done === true) ||
                (props.done === null && props.elem.done === null) ||
                (props.done === false && props.elem.done === false) ?
                <table className="table mb-3 table-bordered">
                    <tr>
                        <th colSpan="12" className="tabla-fondo text-left" >Orden Numero {props.i + 1}
                        </th>
                    </tr>
                    <tr>
                        <td> <span style={{ fontWeight: "bold" }} >Usuario</span>: {props.elem.user_name}</td>
                        <td> <span style={{ fontWeight: "bold" }} >Telefono: </span> {props.elem.user_phone} </td>
                        <td> <span style={{ fontWeight: "bold" }} >Estado de la orden: </span>
                            {
                                props.elem.done === true ?
                                    <span > hecho</span>
                                    :
                                    props.elem.done === null ?
                                        <span > cancelado por usuario</span>
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
                                <tr className="tabla-fondo1">
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
                        {(props.done === false && props.elem.done === false) &&
                            <td colSpan="5" className="text-right " >
                                <a
                                    class="btn btn-danger text-white"
                                    role="button"
                                    onClick={() => { completeOrder() }}>
                                    Cancelar
                                </a>  
                            </td>
                        }


                    </tr>
                </table>
                : ""
            }
        </>

    )
}