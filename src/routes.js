import React from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import FinalControlList from './Components/FinancialControlList'

export default props => (
        <BrowserRouter>
            <Switch>
                <Route path='/financialControl' component={FinalControlList}/>   
                <Route path='/' component={FinalControlList}/>  
            </Switch>
        </BrowserRouter>
)