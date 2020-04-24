import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './views/Notfound'
import Home from './views/Home'
import injectContext from './store/appContext'
import Restaurant from './views/HomeBusiness'
import ClientSideRestaurant from "./components/Restaurant/clientsidemenu"
import Admin from './views/HomeAdmin'
import New_Product from './components/modal_new_product'
import New_Ingredient from './components/modal_new_ingredient'
import ControlPanel from './components/Restaurant/onwercontrolpanel'


const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/product" component={New_Product} />
                <Route exact path="/business" component={Restaurant} />
                <Route exact path="/admin" component={Restaurant} />
                <Route path="/restaurant" render={props=><ClientSideRestaurant {...props} />} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);