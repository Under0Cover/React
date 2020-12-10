import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import sobreEmpresa from './pages/sobreEmpresa';
import Contato from './pages/Contato';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Contato" component={Contato} />
                <Route path="/sobreEmpresa" component={sobreEmpresa} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;