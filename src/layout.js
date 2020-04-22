import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './views/Notfound'
import Home from './views/Home'
import injectContext from './store/appContext'
import Restaurant from './views/HomeBusiness'
import RestaurantDisplay from "./components/Restaurant/restaurant_display"
import Admin from './views/HomeAdmin'

const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/business" component={Restaurant} />
                <Route exact path="/admin" component={Restaurant} />
                <Route path="/restaurant" render={props=><RestaurantDisplay {...props} />} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);