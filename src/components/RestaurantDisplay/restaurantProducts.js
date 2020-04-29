import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../src/store/appContext'
import TableRowDisplay from "./tablerowdisplay"


export default function RestaurantProducts(props) {
    const { store, actions} = useContext(Context)
    const [local, setLocal] = useState(
        {   
            contact:false,
        }
    )
    return (
        <>
            <div className="container-fluid">
                <div className= "row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header col-md-6 card-header-primary">
                                <h4 className="card-title">Nombre del restaurant</h4>
                            </div>
                            <div className="card-body col-md-12">
                                <div className="table-responsive">
                                    {   
                                    !!store.restaurant.products&&
                                    store.restaurant.products.map((element,i)=>{
                                        return (<>
                                                <TableRowDisplay elem={element} i={i} key={i}/>
                                            </>
                                        )
                                    })
                                        
                                    }
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}