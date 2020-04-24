import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './views/Notfound'
import Home from './views/Home'
import injectContext from './store/appContext'
import Restaurant from './views/HomeBusiness'
import Admin from './views/HomeAdmin'
import Confirmation from './views/UserConfirmationPass'
import ConfirmationRestaurant from './views/RestaurantConfirmationPass'
import ConfirmationAdmin from './views/AdminConfirmationPass'


const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/confirmation/:token" component={Confirmation} />
            <Route exact path="/confirmationrestaurant/:token" component={ConfirmationRestaurant} />
            <Route exact path="/confirmationadmin/:token" component={ConfirmationAdmin} />
                <Route exact path="/" component={Home} />
                <Route exact path="/business" component={Restaurant} />
                <Route exact path="/admin" component={Admin} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);