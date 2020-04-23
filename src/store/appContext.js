import React, { useState, useEffect} from "react"
import getState from "./flux"

export const Context = React.createContext()

const injectContext = PassedComponent =>{
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: ()=>state.store,
                getActions : ()=> state.actions,
                setStore: updateStore => setState({
                    store: Object.assign(state.store, updateStore),
                    actions: {...state.actions}
                })
            })
        )
        useEffect(()=>{
<<<<<<< HEAD
            state.actions.getAllRestaurants("http://localhost:5000/restaurantusers")
=======
            state.actions.getAllRestaurants("http://localhost:5000/product")
>>>>>>> c4f6317c608f16c4b1540dca5f5c6f58596e378c
            
        },[])
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props}/>
            </Context.Provider>
        )
    }
    return StoreWrapper
}

export default injectContext