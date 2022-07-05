import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import User from '../pages/User'
import Product from '../pages/Product'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' exact component={Cart}/>
            <Route path='/user' exact component={User}/>
        </Switch>  
    )
}

export default Routes
