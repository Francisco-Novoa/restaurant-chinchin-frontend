import React, { useContext } from 'react'
import { Context } from '../../store/appContext'

export default function ClientSideRestaurant(props) {

    const { store, actions } = useContext(Context)
    return (
        <>
        <h1>aca va la pagina del restaurant</h1>
        <h1>aca va el menu</h1>
        aca
        <h3>aca van la pagina donde se ingresan las ordenes</h3>
        </>
    )}