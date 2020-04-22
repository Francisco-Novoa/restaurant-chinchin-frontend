import React, { useContext } from 'react'
import { Context } from '../store/appContext'

export default function RestaurantDisplay() {
    const { store, actions } = useContext(Context)
    return (
        <>
        <h1>aca va la pagina de restaurants</h1>
        <h3>aca van la pagina donde se ingresan las ordenes</h3>
        </>
    )}