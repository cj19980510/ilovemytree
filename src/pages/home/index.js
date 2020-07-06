import React, { Component } from 'react'
import FirstHome from './firsthome'
import { Route, Switch, Redirect } from 'react-router-dom'
import Introduce from './subhome/introduce'
import Renyang from './subhome/renyang'
import Agreement from './subhome/agreement'
import Foster from './subhome/foster'
import OrderForm from './subhome/orderForm'
import Map from './subhome/map'
export default class Home extends Component {
    render() {
        return (
            <div class="container">
               
               <Switch>
                   <Redirect to="/home/firsthome" from="/home" exact/>
                   <Route path="/home/firsthome" component={FirstHome}/>
                   <Route path="/home/subhome/introduce" component={Introduce}/>
                   <Route path="/home/subhome/renyang" component={Renyang}/>
                   <Route path="/home/subhome/agreement" component={Agreement}/>
                   <Route path="/home/subhome/foster" component={Foster}/>
                   <Route path="/home/subhome/orderForm" component={OrderForm}/>
                   <Route path="/home/subhome/map" component={Map}/>
               </Switch>
            
            </div>
        )
    }
}
