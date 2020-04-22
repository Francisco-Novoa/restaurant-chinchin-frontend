import React, { useContext } from 'react'
import { Context } from '../../../src/store/appContext'
import { Link } from 'react-router-dom'

export default function Menu() {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div class="card" style={{width : "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">Here will go Restaurants</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/restaurant">
                                <h5>know more</h5>
                            </Link>
                    </div>
            </div>
        </>
    )
}
