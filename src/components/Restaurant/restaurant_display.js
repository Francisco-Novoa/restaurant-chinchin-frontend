import React, { useContext } from 'react'
import { Context } from '../../../src/store/appContext'

export default function RestaurantDisplay(props) {
    console.log(props)
    const { store, actions } = useContext(Context)
    return (
        <>
        <h1>aca va la pagina del restaurant</h1>
        <h3>aca van la pagina donde se ingresan las ordenes</h3>
        </>
    )}