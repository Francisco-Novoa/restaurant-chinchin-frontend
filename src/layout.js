import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './views/Notfound'
import Home from './views/Home'
import injectContext from './store/appContext'
import Restaurant from './views/HomeBusiness'
import RestaurantDisplay from "./views/RestaurantDisplay"
import Admin from './views/HomeAdmin'
import New_Product from './components/modal_new_product'
import New_Ingredient from './components/modal_new_ingredient'


const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={New_Product} />
                <Route exact path="/ingredient" component={New_Ingredient} />
                <Route exact path="/business" component={Restaurant} />
                <Route exact path="/admin" component={Restaurant} />
                <Route path="/restaurant" render={props=><RestaurantDisplay {...props} />} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);