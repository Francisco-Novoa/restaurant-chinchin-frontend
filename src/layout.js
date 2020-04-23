import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './views/Notfound'
import Home from './views/Home'
import injectContext from './store/appContext'
import Restaurant from './views/HomeBusiness'
import ClientSideRestaurant from "./components/Restaurant/clientsidemenu"
import Admin from './views/HomeAdmin'


const Layout = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/business" component={Restaurant} />
                <Route exact path="/admin" component={Restaurant} />
                <Route path="/restaurant" render={props=><ClientSideRestaurant {...props} />} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout);